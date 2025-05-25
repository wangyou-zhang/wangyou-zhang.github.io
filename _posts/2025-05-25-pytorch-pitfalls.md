---
title: 'PyTorch Pitfalls'
date: 2025-05-25
permalink: /posts/2025/05/pytorch-pitfalls/
tags:
  - PyTorch
  - deep learning
  - pitfalls
---

This blog post will continuously update with common pitfalls encountered when using PyTorch, especially for beginners. The goal is to help users avoid these issues and improve their understanding of PyTorch.

## Table of Contents

* [Assign value by reference vs. by value](#assign-value-by-reference-vs-by-value)


## Assign value by reference vs. by value
In PyTorch, when you directly assign a tensor to another variable, it does not create a copy of the tensor by default. Instead, it creates a **reference** to the original tensor. This means that if you modify the new variable, the original tensor will also be modified.

<d-code block language="python">
import torch

a = torch.tensor([1, 2, 3])
b = a     # `b` is a reference to `a`, not a copy
b[0] = 0  # Modifying `b` also modifies `a`
print(a)  # -> tensor([0, 2, 3])

########################
# To avoid this, you can use the `clone()` method to
# create a copy of the tensor
########################
a = torch.tensor([1, 2, 3])
c = a.clone()  # `c` is a copy of `a`, not a reference
c[0] = 0  # Modifying `c` does not affect `a`
print(a)  # -> tensor([0, 2, 3])
</d-code>

A more elusive example is when you swapping two parts of a tensor:

<d-code block language="python">
import torch

a = torch.tensor([1, 2, 3, 4])
a[:2], a[-2:] = a[-2:], a[:2]  # Seems like the values are swapped
print(a)  # -> tensor([3, 4, 3, 4]), not tensor([3, 4, 1, 2])

########################
# To avoid this, you can use the `clone()` method to
# create a copy of the tensor
########################
a = torch.tensor([1, 2, 3, 4])
a[:2], a[-2:] = a[-2:].clone(), a[:2].clone()
print(a)  # -> tensor([3, 4, 1, 2]), now it works as expected
</d-code>

Another common pitfall is when you use the `clone()` method. The `clone()` method creates a copy of the tensor, but it does not detach it from the computation graph. This means that if you perform operations on the cloned tensor, gradients will still be tracked.
<d-code block language="python">
import torch

a = torch.tensor([1., 2., 3.], requires_grad=True)
print(a.grad)  # -> None, no gradients yet

# ⬇️ `c` is a copy of `a`, but still part of the computation graph
c = a.clone()
# ⬇️ Modifying `c` does not affect `a`,
#    but gradients will still be tracked
c[0] = 0
# ⬇️ This will propagate gradients back to `a`
c.sum().backward()
print(a.grad)  # -> tensor([0., 1., 1.])
</d-code>

To avoid this pitfall, you can use the `detach()` method before cloning to create a copy that is not part of the computation graph:

<d-code block language="python">
c = a.detach().clone()
</d-code>
