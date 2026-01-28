---
layout: presentation
title: 学术论文写作规范与技巧
permalink: /zh-CN/tutorial_writing/
locale: zh-CN
---

layout: true
<p style="display: block; position: absolute; width: 30%; left: 35px; top: 25px; margin: 0; padding: 0; text-align: left;"><img draggable="false" (dragstart)="false;" class="unselectable" src="/images/remark.js/sjtu_banner.png" style="width: 100%;"/></p>
<p style="display: block; position: absolute; width: 100%; left: 0px; bottom: 75px; margin: 0; padding: 0; text-align: center;"><img draggable="false" (dragstart)="false;" class="unselectable" src="/images/remark.js/logo_audiocc.png" style="width: 80%;"/></p>
<div class="my-footer">
  <span style="width: 20%; background-color: #3172C9; text-align: center; left: 0px;">张王优</span><!--
  --><span style="width: 60%; background-color: #D47838; text-align: center; left: 20%;">学术论文写作规范与技巧</span><!--
  --><span style="width: 19%; background-color: #3172C9; text-align: left; padding-left: 1%; left: 80%;">SJTU AudioCC
</div>

---
class: center

[//]: # (Manually add some vertical space)
<p class="unselectable"><br><br><br><br></p>

## .darkblue[.titlelarge[学术论文写作规范与技巧]]

.huge[张王优]

.cute.orange[2026 年 1 月 28 日]<br/>
<!-- .small[.cute.gray[更新于 2026 年 1 月 28 日]] -->


---
layout: true
<div class="my-header" style="background-color: #173D6E;">
  <img draggable="false" (dragstart)="false;" class="unselectable" src="/images/remark.js/logo_sjtu.svg"/>
  <span style="color: #FFC000;"><b>目录</b></span>
</div>
<div class="my-watermark" style="z-index: -1;"> </div>
<div class="my-footer">
  <span style="width: 20%; background-color: #3172C9; text-align: center; left: 0px;">张王优</span><!--
  --><span style="width: 60%; background-color: #D47838; text-align: center; left: 20%;">学术论文写作规范与技巧</span><!--
  --><span style="width: 19%; background-color: #3172C9; text-align: left; padding-left: 1%; left: 80%;">SJTU AudioCC
</div>

---
class: middle
name: toc

![:toc](
  1. [论文的基本结构]&#lpar;#basic-structure&#rpar;
  2. [学术伦理与规范]&#lpar;#ethics&#rpar;
  3. [参考文献]&#lpar;#references&#rpar;
  4. [LaTeX 写作技巧]&#lpar;#latex-skills&#rpar;
  5. [作图与制表]&#lpar;#figure-chart-table&#rpar;
  6. [数学公式]&#lpar;#equations&#rpar;
  7. [关于 PDF]&#lpar;#pdf&#rpar;
)

---
layout: true
<div class="my-header" style="background-color: #173D6E;">
  <img draggable="false" (dragstart)="false;" class="unselectable" src="/images/remark.js/logo_sjtu.svg"/>
  <span style="color: #FFC000;"><b>论文的基本结构</b></span>
</div>
<div class="my-watermark" style="z-index: -1;"> </div>
<div class="my-footer">
  <span style="width: 20%; background-color: #3172C9; text-align: center; left: 0px;">张王优</span><!--
  --><span style="width: 60%; background-color: #D47838; text-align: center; left: 20%;">学术论文写作规范与技巧</span><!--
  --><span style="width: 19%; background-color: #3172C9; text-align: left; padding-left: 1%; left: 80%;">SJTU AudioCC
</div>

---
name: basic-structure

#

+ 摘要 Abstract
+ 引言 Introduction
+ 相关工作 Related Work
+ 方法 Methodology
+ 实验 Experiments
+ 结论 Conclusion
+ 参考文献 References

---

#

+ **摘要 Abstract**
    + 字数限制通常为 120~250 词、1000 字以内（请确认模板要求）
    + 简要介绍研究背景、当前存在的问题、本文动机和方法、实验结果和结论
    + 如果需要凸显所提方法的性能优势，建议提及关键实验结果（数值、指标）
    + 独立成篇，避免引用文献
    + 如有开源代码/数据/模型，可在此提及
    + 吸引读者注意力，突出贡献<br/>
平时阅读论文时留意：.blue[“你看到什么样的摘要，会有想要阅读下去的兴趣？”]

---

#

+ 摘要 Abstract
+ **引言 Introduction**
    + 介绍研究领域、研究背景和重要性（应用/科学价值）
    + 梳理领域内的相关工作，突出研究空白
        + 展现对相关工作（开山之作、代表性工作、近期亮眼工作）的掌握
        + 体现对当前领域的理解（划分流派、方法论等），impress 读者/审稿人
        + 明确指出当前存在的问题或挑战，以便过渡到本文的方法
    + 引出本文的研究动机和目标
        + 新的思考角度 / 新的问题 / 更先进的技术组件
    + <span class="blue">概述本文的主要贡献和创新点（抓眼球，吸引读者）</span>
        + 列出方法的主要思想、创新点即可，**不用赘述细节**
    + 提供论文结构的简要概述（可选，凑字数）

---

#

+ 摘要 Abstract
+ 引言 Introduction
+ **相关工作 Related Work（视情况可选）**
    + 着重介绍与本文方法最相关的几项工作
    + 突出这些工作与本文的异同

---

#

+ 摘要 Abstract
+ 引言 Introduction
+ 相关工作 Related Work
+ **方法 Methodology（从读者的视角出发）**
    + 问题描述/信号模型（可选）
    + 方法总体框架
        + <span class="blue">强烈建议配图介绍方法的总体架构/流程</span>
        + 图文结合，而不应孤立使用：<br/>
图中善用变量符号、正文术语，正文描述应联系图中元素来辅助理解
    + 详细介绍各个模块/组件/训练步骤
    + 数学公式推导（视情况而定，应避免过多冗余公式）
        + 变量符号应清晰定义，避免歧义和混用
    + 算法伪代码（可选）

---

#

+ 摘要 Abstract
+ 引言 Introduction
+ 相关工作 Related Work
+ 方法 Methodology
+ **实验 Experiments**
    + 讲清楚实验设置（<span class="blue">可复现性！</span>）
        + 数据集信息（子集划分、样本数量/时长、采样率等）
        + 预处理、模型超参数设置、模型参数量
        + 训练超参数（学习率、batch size、训练轮数等）
        + 列出评估指标（越大越好 vs. 越小越好）、用到的开源模型（引用+链接）
    + 展现实验结果：表格、图表等
    + 有哪些分析实验结果的方法？

---

#

+ 摘要 Abstract
+ 引言 Introduction
+ 相关工作 Related Work
+ 方法 Methodology
+ 实验 Experiments
+ **结论 Conclusion**
    + 不要简单重复摘要和引言内容，进一步升华
    + 总结主要发现和贡献（通常采用过去时态）
    + 对未来工作的展望
+ 参考文献 References

---

#

+ 摘要 Abstract
+ 引言 Introduction
+ 相关工作 Related Work
+ 方法 Methodology
+ 实验 Experiments
+ 结论 Conclusion
+ **参考文献 References**
    + 使用合适的引用格式（如 IEEEbib、IEEEtran 等）
    + 确保引用的完整性、准确性、时效性
        + 检查是否缺失页码、发表刊物等信息
        + 检查作者姓名拼写（注意区分姓氏和名字），比如 Jonathan Le Roux
        + 若已经正式发表（有同行评审），应优先引用该版本，而非 arXiv 预印本
        + 检查正式发表的论文标题是否有改动（[例子](https://arxiv.org/abs/2509.09666v1)）、论文是否撤稿（[例子](https://arxiv.org/abs/1903.03107)）
        + 过去经典、近期重要的工作均应涵盖
    + <span class="blue">避免过于随意的引用，确保每个引用都有实际意义</span>

---
class: center, middle

# 思考：什么是好的论文？


---

# 思考：什么是好的论文？

+ 引用量高、影响力大、有开源代码
--

+ 论文内容：
    + **挖坑类、比赛类、数据集类：**提出了新的问题/任务
      + “第一篇论文”、开山之作
    + **理论类、框架类：**提出新的理论/范式（通用性强的方法）
      + “第二篇论文”、定调之作
    + **分析类、benchmark 类：**提供了新颖见解
    + **常规类型：**提出新的方法，显著提升了性能
        + “最后一篇”论文、绝杀之作
--

+ 论文写作：
    + **可读性：**容易读懂，思路清晰，阅读门槛和理解成本低
    + **启发性：**角度新颖，方法独特，引人深思
    + **可信度：**实验设计合理，实验对比充分，分析逻辑严谨，结论有说服力

---
layout: true
<div class="my-header" style="background-color: #173D6E;">
  <img draggable="false" (dragstart)="false;" class="unselectable" src="/images/remark.js/logo_sjtu.svg"/>
  <span style="color: #FFC000;"><b>学术伦理与规范</b></span>
</div>
<div class="my-watermark" style="z-index: -1;"> </div>
<div class="my-footer">
  <span style="width: 20%; background-color: #3172C9; text-align: center; left: 0px;">张王优</span><!--
  --><span style="width: 60%; background-color: #D47838; text-align: center; left: 20%;">学术论文写作规范与技巧</span><!--
  --><span style="width: 19%; background-color: #3172C9; text-align: left; padding-left: 1%; left: 80%;">SJTU AudioCC
</div>

---
name: ethics

# 伦理和诚信问题

1. 数据造假 Data Fabrication
    + 编数据、篡改数据、抄错数据、歪曲数据等
2. 剽窃/抄袭 Plagiarism
    + 自我剽窃
        + 重复使用自己已发表的工作（如中英互翻）
        + 原封不动地复用自己已发表的论文中的图、表
    + 他人剽窃
        + 直接复制粘贴他人论文的内容（整句、整段复制）
        + 引用他人原文内容但不注明出处，或不进行改写
3. 隐私侵犯 Privacy Violations
4. 伦理问题 Ethical Issues
5. 同行评审操纵 Peer Review Manipulation
6. 作者署名 Authorship Issues

---

# 伦理和诚信问题

1. 数据造假 Data Fabrication
2. 剽窃/抄袭 Plagiarism
3. 隐私侵犯 Privacy Violations
    + 发布、使用的数据集涉及个人隐私信息，且未获得授权许可
    + 比如自动驾驶数据集中包含人脸、车牌等敏感信息
    + 语音数据集中包含说话人真实姓名、住址等敏感信息
4. 伦理问题 Ethical Issues
    + 研究内容可能引发伦理争议，例如涉及人类受试者的实验、动物实验等
    + 发布的数据集是否符合 license？
    + 相关实验是否取得伦理审查批准（IRB approval）
    + 是否存在偏见、歧视、公平性等社会伦理问题
5. 同行评审操纵 Peer Review Manipulation
6. 作者署名 Authorship Issues

---

# 伦理和诚信问题

1. 数据造假 Data Fabrication
2. 剽窃/抄袭 Plagiarism
3. 隐私侵犯 Privacy Violations
4. 伦理问题 Ethical Issues
5. 同行评审操纵 Peer Review Manipulation
    + 作者通过不正当手段影响审稿过程，例如推荐假审稿人、操纵审稿意见、私下串通审稿人等
    + 通过隐形提示词注入等方式操纵 AI 审稿系统
6. 作者署名 Authorship Issues
    + 作者名单中包含未实际参与研究工作、贡献微小的人员（赠送署名）
        + 合作者的基本贡献：参与研究构思/设计实验/分析数据/撰写论文/论文审校等
        + <span class="blue">如果论文被 desk reject 或撤稿，所有合作者都有责任</span>
    + 忽略了对研究工作有实质贡献的人员

---

# AI 合规性问题

+ [Can AI Review the Scientific Literature — and Figure out What It All Means?](https://www.nature.com/articles/d41586-024-03676-9)
+ [Large Language Models for Automated Scholarly Paper Review: A Survey](https://arxiv.org/abs/2501.10326)
+ 留意投稿规则更新
    + [【新智元】突发！arXiv CS 新规：未经同行评审，一律不收](https://mp.weixin.qq.com/s/p-obiUXTVEvRY0AWhcvykg)
    + [【新智元】ICLR 2026 史上最严新规：论文用 LLM 不报，直接拒稿！](https://mp.weixin.qq.com/s/3jBzma-PNuMyV0iP4yUTtA)
    + [【机器之心】综述连 arXiv 都不给发了？最严新规出台：被会议、期刊接收才行，workshop 都不行](https://mp.weixin.qq.com/s/ZCOMBtiGd0UH3g_vxBv4nw)

---

# AI 合规性问题

![:callout danger, Interspeech 2026 新规则](

> The extent of Generative AI use must be disclosed. This section may be in the 5th or 6th pages of regular papers, or the 9th or 10th pages of long papers. ISCA policy says: *All (co-&#rpar;authors must be responsible and accountable for the work and content of the paper, and they must consent to its submission. Any generative AI tools cannot be a co-author of the paper. They can be used for editing and polishing manuscripts, but should not be used for producing a significant part of the manuscript.*

)

---

# 规范性

1. 准确
    + 与事实相符，避免歧义
    + 使用正确的术语和严谨的定义，避免错字和语法错误
    + 凡是引用观点或数据均需注明出处
2. 清晰
    + 图表标注完整，字号/颜色合适，caption 能够基本完备地自我解释
3. 简洁
    + 避免长难句和过多脚注
    + 避免多处重复描述性内容（需要强调的地方除外）
4. 一致
    + 实际方法与引言中讨论的问题相对应
    + 实验结果应与方法描述相对应，能映证结论
    + 数学符号不混用，定义清晰
    + 术语使用保持一致，概念区分明确（method vs. framework vs. paradigm）

---

# Checklist

[A final sanity checklist to help your CS paper get accepted, not desk rejected.](https://github.com/yzhao062/cs-paper-checklist)

---

# 从审稿的视角了解学术论文的规范性

+ [IEEE Transaction 的审稿准则](https://signalprocessingsociety.org/publications-resources/guidelines-reviewers)
+ [Elsevier - How to conduct a review](https://www.elsevier.com/reviewer/how-to-review)


---
layout: true
<div class="my-header" style="background-color: #173D6E;">
  <img draggable="false" (dragstart)="false;" class="unselectable" src="/images/remark.js/logo_sjtu.svg"/>
  <span style="color: #FFC000;"><b>参考文献</b></span>
</div>
<div class="my-watermark" style="z-index: -1;"> </div>
<div class="my-footer">
  <span style="width: 20%; background-color: #3172C9; text-align: center; left: 0px;">张王优</span><!--
  --><span style="width: 60%; background-color: #D47838; text-align: center; left: 20%;">学术论文写作规范与技巧</span><!--
  --><span style="width: 19%; background-color: #3172C9; text-align: left; padding-left: 1%; left: 80%;">SJTU AudioCC
</div>

---
name: references

# BibTeX 格式

```bibtex
% 期刊论文
@article{引用标签,
  author    = {作者姓名},
  title     = {论文标题},
  journal   = {期刊名称},
  pages     = {起始页码--结束页码},
  volume    = {卷号},
  number    = {期号},
  year      = {发表年份},
}
```

```bibtex
% 会议论文
@inproceedings{引用标签,
  author    = {作者姓名},
  title     = {论文标题},
  booktitle = {会议名称},
  pages     = {起始页码--结束页码},
  year      = {发表年份},
}
```

---

# BibTeX 格式

+ 论文标题
    + 避免全部大写或全部小写
    + **保留人名、地名、国家/语种、特定方法/模型等的正确大小写**
    + 通过花括号 `{}` 锁定大写、小写格式

    ```bibtex
    title={A Novel Approach to {CNN}-based Image Recognition},
    
    title="{AISHELL}-3: A Multi-Speaker {Mandarin} {TTS} Corpus",
    
    title={Signal Estimation from Modified Short-Time {Fourier} Transform},
    
    title="{DNSMOS} {P}.835: A Non-Intrusive Perceptual Objective Speech ...",

    title={The {USTC-NERCSLIP} Systems for the {CHiME}-8 {NOTSOFAR}-1 Challenge},
    ```

---

# BibTeX 格式

+ 作者姓名
    + 格式 1：`姓氏, 名字`
    + 格式 2：`名字 姓氏`
    + 多个作者之间用 `and` 连接
    + `others` 可用于省略部分作者（实际显示为 `et al.`）

    ```bibtex
      author={Zhang, Wei and Wang, You and Li, Ming},

      author={Jonathan {Le Roux} and John R. Hershey and Zhuo Chen},

      author={W{\"o}lfel, Matthias and McDonough, John W},

      author={Subramanian, Aswin Shanmugam and Wang, Xiaofei and `others`},
    ``` 

---

# BibTeX 格式

+ 发表刊物名称
    + 可在 `xxx.bib` 文件开头定义常见期刊、会议的名称变量，方便统一格式
    + 参考 [`mybib.bib`](/files/mybib.bib)

    ```bibtex
    @string{aaai = "Proc. AAAI"}
    @string{icassp = "Proc. ICASSP"}
    @string{interspeech = "Proc. ISCA Interspeech"}
    @string{ieee-taslp = "IEEE Trans. ASLP."}
    
    @inproceedings{example2024,
      ...
      booktitle=icassp,
    }

    @article{example2025,
      ...
      journal=ieee-taslp,
    }
    ```

---

# 一些 Tips

+ 保持同一会议/期刊（如 ICASSP、Interspeech）在不同 BibTeX 条目中的格式一致，彰显专业性和严谨性
    + 通过使用前一页介绍的名称变量，可有效解决上述问题
+ 不要出现<span class="blue">同一篇论文被多次引用</span>的情况
    + 例如同时引用了 arXiv 版本和正式发表版本
    + 例如同时引用了会议版本和期刊扩展版本
    + 通过规范的 BibTeX 引用标签的命名方式（如包含年份、会议/期刊缩写等）来避免混淆
        + 我的习惯：`[论文关键字]-[作者姓氏][发表年份]`，如 `DCCRN-Hu2020`
+ 保持 BibTeX 条目的简洁性，去除不必要的字段
    + 避免使用 `month` 字段（会在参考文献中显示额外内容，可能导致多余占行）
    + 避免使用 `abstract` 字段（大段文字）
    + 避免使用 `url` 字段（如有必要，可在 `note` 字段中添加代码链接）

---

# 一些 Tips

+ 如何确认论文是否已经正式发表？
    + 在 Google Scholar 上检索论文名称，找到相应条目，观察是否为正式发表的版本（如显示发表在 xxx 会议/期刊上）
    + 如果 Google Scholar 条目默认显示的是 arXiv 版本
        1. 点击进入 arXiv 链接，查看 arXiv 页面中的 Comments 部分是否标注了正式发表的信息
        2. 点击 Google Scholar 条目 下方的 `All ? versions` 小字，查看是否有其他版本
        3. 如果没看到正式发表版本，但有 OpenReview 链接，点击进入 OpenReview 页面，查看是否为某个会议/期刊的投稿
            + 进一步确认录用状态是否为 `Accepted`
    + 也可尝试直接在 Google 搜索引擎中搜索论文标题，查看是否有正式发表的链接
    + 如果有论文可能发表刊物的猜想，可以直接在该会议/期刊的 proceedings 数据库（如 [IEEE Xplore](https://ieeexplore.ieee.org/search/searchresult.jsp?newsearch=true&queryText=speech)、[ISCA Archive](https://www.isca-archive.org/interspeech_2025/index.html)）中搜索论文标题进行确认

---

# 引用参考文献的规范性

+ 不盲信 Google Scholar，比如
    + 它上面的 NeurIPS 论文的 BibTeX 通常都是错误格式（article 期刊类型），实则应为 inproceedings 会议类型
    + 它上面的很多 arXiv 论文实则已经正式发表，如 ICLR、Interspeech 等，应尽量引用正式发表的版本（经过同行评审，更具可信度）
    + [小红书 - 所有 IEEE 论文在谷歌学术的检索出现重大 bug](http://xhslink.com/o/PYf4IpYSvz)

+ **练习：**尝试找到下列论文的 BibTeX 条目：

    + [KB+15] Adam: A Method for Stochastic Optimization
    + [HLL+20] DCCRN: Deep complex convolution recurrent network for phase-aware speech enhancement


---
layout: true
<div class="my-header" style="background-color: #173D6E;">
  <img draggable="false" (dragstart)="false;" class="unselectable" src="/images/remark.js/logo_sjtu.svg"/>
  <span style="color: #FFC000;"><b>LaTeX 写作技巧</b></span>
</div>
<div class="my-watermark" style="z-index: -1;"> </div>
<div class="my-footer">
  <span style="width: 20%; background-color: #3172C9; text-align: center; left: 0px;">张王优</span><!--
  --><span style="width: 60%; background-color: #D47838; text-align: center; left: 20%;">学术论文写作规范与技巧</span><!--
  --><span style="width: 19%; background-color: #3172C9; text-align: left; padding-left: 1%; left: 80%;">SJTU AudioCC
</div>

---
name: latex-skills

# LaTeX 介绍

![:callout info, LaTeX 学习资料](

+ https://www.overleaf.com/learn
+ https://oi-wiki.org/tools/latex/

)

+ 参考文件：[example.tex](/files/example.tex)

---

# 基本语法

+ 需要转义（Escape）的符号：

    ```tex
    \#                 →   #

    \$                 →   $

    \%                 →   %

    \&                 →   &

    \_                 →   _

    \{                 →   {

    \}                 →   }

    \textasciitilde{}  →   ~
    \textasciicircum{} →   ^
    \textbackslash{}   →   \
    \textless{}        →   <
    \textgreater{}     →   >
    ```

---

# 基本语法

+ 注释：采用 `%` 符号，LaTeX 编译时会忽略该符号后面的内容，直到行尾

    ```tex
    % 这是注释内容，LaTeX 编译时会忽略这一行的内容
    ```

+ 连续多个空格会被视为一个空格，多个空行会被视为单个空行

    ```tex
    这是    多个     空格
    ```

+ `~` 表示不间断空格（non-breaking space）

    ```tex
    RNN~\cite{xxx}  % 防止“RNN”和“[?]”被拆分到两行
    ```

+ `\\` 表示换行

    ```tex
    这是第一行内容。\\
    这是第二行内容。\\[5px]
    这是第三行内容，与上一行间隔 5px。
    ```

---

# 基本语法

+ `\quad` 和 `\qquad` 分别表示横向间隔 1em 和 2em 的空格

    ```tex
    这是第一部分内容。\quad 这是第二部分内容。

    这是第一部分内容。\qquad 这是第二部分内容。
    ```

+ `\hspace{长度}`、`\vspace{长度}` 表示自定义长度的横向和纵向空格

    ```tex
    这是第一部分内容。\hspace{2cm} 这是第二部分内容。

    \vspace{-5px}
    这是文字。
    ```

+ `-` 表示连字符（hyphen），`--` 表示短横线（en dash），`---` 表示长横线（em dash）

    ```tex
    state-of-the-art
    pages 10--20          % en dash (–)
    New York---London     % em dash (—)
    ```

---

# 基本语法

+ 行内数学公式：`$...$`
+ 行间数学公式：

```latex
\[
  ...  
\]

\begin{equation}
  ...
\end{equation}


\begin{align}
  ...
\end{align}
```

+ `\cite{引用标签}`：文中引用参考文献
+ `\citep{引用标签}`：圆括号形式引用参考文献（natbib 宏包）
+ `\ref{标签}`：引用章节、图片、表格等标签的编号（不带括号）
+ `\eqref{标签}`：引用公式编号（带括号）

---

#

![:callout info, LaTeX 写作工具](

1. Overleaf（在线编译，多人合作）：https://www.overleaf.com/
    + SJTU LaTeX 文档助手：https://latex.sjtu.edu.cn/
    + [PaperDebugger](https://arxiv.org/abs/2512.02589&#rpar; 浏览器插件：https://github.com/PaperDebugger/PaperDebugger
2. OpenAI Prism（在线编译，多人合作&#rpar;：https://prism.openai.com/
3. TeXstudio（免费软件&#rpar;：https://www.texstudio.org/
4. Texifier（收费&#rpar;：https://www.texifier.com/
)

---

#

![:callout note, 内置命令](

  + 字号控制（较少使用）
    ```latex
    # 字号依次从大到小
    \Huge, \LARGE, \Large, \large, \normalsize, \small, \footnotesize,

    \scriptsize, \tiny
    ```

    > 适用于调整表格、公式等局部字号，正文字号不建议/不允许随意更改

  + 字体控制

    ```tex
    \textsf{H}              % 无衬线字体
    \texttt{test-clean}     % 等宽字体
    \textsc{AnyEnhance}     % 全大写字母（区分大小型字母）
    \textbf{best results}   % 粗体
    \textit{et al.}         % 斜体
    \emph{This implies}     % 强调（斜体）
    ```
)

---

# LaTeX 数学模式中的各种空格符号

```latex
% thin space
\,
\thinspace
 
% negative thin space
\!
 
% medium space (\: and \> are equivalent)
\:
\>
 
% large space
\;
 
% 0.5em space
\enspace
 
% 1em space
\quad
 
% 2em space
\qquad
 
% custom space
\hspace{3em}
 
% fill empty space
\hfill
```

---
layout: true
<div class="my-header" style="background-color: #173D6E;">
  <img draggable="false" (dragstart)="false;" class="unselectable" src="/images/remark.js/logo_sjtu.svg"/>
  <span style="color: #FFC000;"><b>作图与制表</b></span>
</div>
<div class="my-watermark" style="z-index: -1;"> </div>
<div class="my-footer">
  <span style="width: 20%; background-color: #3172C9; text-align: center; left: 0px;">张王优</span><!--
  --><span style="width: 60%; background-color: #D47838; text-align: center; left: 20%;">学术论文写作规范与技巧</span><!--
  --><span style="width: 19%; background-color: #3172C9; text-align: left; padding-left: 1%; left: 80%;">SJTU AudioCC
</div>

---
name: figure-chart-table

# 在线制表工具
1. [Create LaTeX Tables Online – TablesGenerator.com](http://www.tablesgenerator.com/)
2. [Advanced Table Editor - LaTeX, Typst, HTML and more – latex-tables.com](https://www.latex-tables.com/)

---

# 作图工具

1. Microsoft PowerPoint（[交大授权版](https://software.sjtu.edu.cn/List/Office/2024)）
    + 导出图片的注意事项
        + 为 LaTeX 论文中准备图片时，尽量导出为 PDF、SVG 等矢量图格式，这样在插入论文中后显示更加清晰
        + 注：在 macOS 上制作的 PDF 矢量图，在其他软件（如 WPS）或 Windows 系统上打开查看，可能存在显示不一致的问题（如字体不一致、文字错位等）。因此，在外做报告的 PPT，或者在 WORD 文档中插入图片时，最好保存在 PNG 格式，以保证显示的一致性。
2. [Draw.io](https://app.diagrams.net)
    + 在线作图
3. [Next-AI-Drawio](https://next-ai-drawio.jiang.jp/)
    + 通过自然语言指令和 AI 辅助绘制和修改 draw.io 图表
4. https://www.mathcha.io
    + 在线数学公式、图表编辑器（Notebook）

---

# 作图建议

1. 尽量导出为 PDF / 矢量图格式，以保持高清晰度
    + [macOS 矢量作图小贴士](https://abcdabcd987.com/macos-vector-graphics-tips/)
2. 绘制神经网络的模型架构图时，如果涉及较复杂的结构，建议在每个模块的输入、输出端增加变量符号，和正文中描述一一对应，以便读者更好理解
3. 绘制图表时，应选择合适的坐标尺度，以直观展现出关键信息（如大小关系、变化趋势等），必要时可对坐标轴进行折叠
    + [Matplotlib 最具价值的 50个 可视化项目（英文）](https://www.machinelearningplus.com/plots/top-50-matplotlib-visualizations-the-master-plots-python/)

---

# 相关工具推荐

1. 图片压缩
    + 付费软件：[PP 鸭](https://ppduck.com)（每次打开可免费压缩 10 张图片）
    + 在线工具（免费）
        + https://zh.recompressor.com
        + https://squoosh.app
2. JPG/PNG 转高清矢量图
    + 在线工具（开源）：https://www.visioncortex.org/vtracer/
    + 付费软件：https://zh.vectormagic.com

---
layout: true
<div class="my-header" style="background-color: #173D6E;">
  <img draggable="false" (dragstart)="false;" class="unselectable" src="/images/remark.js/logo_sjtu.svg"/>
  <span style="color: #FFC000;"><b>数学公式</b></span>
</div>
<div class="my-watermark" style="z-index: -1;"> </div>
<div class="my-footer">
  <span style="width: 20%; background-color: #3172C9; text-align: center; left: 0px;">张王优</span><!--
  --><span style="width: 60%; background-color: #D47838; text-align: center; left: 20%;">学术论文写作规范与技巧</span><!--
  --><span style="width: 19%; background-color: #3172C9; text-align: left; padding-left: 1%; left: 80%;">SJTU AudioCC
</div>

---
name: equations

# OCR 数学公式识别

1. （手写）数学符号识别：[Detexify – LaTeX handwritten symbol recognition](https://detexify.kirelabs.org/classify.html)
2. 付费软件：[PixPin](https://pixpin.cn)
    + 免费版支持普通文字 OCR
    + 会员版支持 LaTeX 公式识别 + 表格识别
3. 付费软件：[Mathpix Snipping Tool](https://mathpix.com/snipping-tool)（每月免费识别 10 张图片，edu 邮箱注册则为 20 张）
4. 在线工具（开源）：https://texocr.netlify.app/ocr
5. 在线工具：https://simpletex.cn/ai/latex_ocr
6. 开源软件（Windows）：https://github.com/RQLuo/MixTeX-Latex-OCR

---
layout: true
<div class="my-header" style="background-color: #173D6E;">
  <img draggable="false" (dragstart)="false;" class="unselectable" src="/images/remark.js/logo_sjtu.svg"/>
  <span style="color: #FFC000;"><b>关于 PDF</b></span>
</div>
<div class="my-watermark" style="z-index: -1;"> </div>
<div class="my-footer">
  <span style="width: 20%; background-color: #3172C9; text-align: center; left: 0px;">张王优</span><!--
  --><span style="width: 60%; background-color: #D47838; text-align: center; left: 20%;">学术论文写作规范与技巧</span><!--
  --><span style="width: 19%; background-color: #3172C9; text-align: left; padding-left: 1%; left: 80%;">SJTU AudioCC
</div>

---
name: pdf

# 常见问题

**1. 连字（Ligature）现象**

+ 在生成 PDF 文件时，某些字母组合（如 "fi", "fl", "ff", "ffi", "ffl"）常常会被自动替换为连字形式，以提高排版美观度
+ 然而，在某些情况下，连字可能会导致文本识别和复制的问题，特别是在涉及技术术语或代码时
+ 解决方法（如需要）：
    + 使用 LaTeX 的 `microtype` 宏包，并禁用连字功能
    + 在需要避免连字的地方使用 `\mbox{}` 命令包裹相关文本

**2. 下划线的渲染**

+ 下划线字符 `_`（常出现在网页链接中）在渲染到 PDF 中时，实际复制出来的内容可能会变成空格
+ 解决方法：
    + 使用 `\usepackage[T1]{fontenc}` 宏包，能够自动确保正确的字符编码

---

# 常见问题

**3. 元信息泄露**

+ PDF 文件中可能包含作者、创建时间、修改时间等元信息，在要求盲审的投稿场景下可能会泄露作者身份
+ 解决方法：
    + 使用 PDF 编辑工具（如 Adobe Acrobat）清除元信息
    + 使用命令行工具 `exiftool` 清除元信息，例如：
      ```bash
      exiftool -all= -overwrite_original yourfile.pdf
      ```

---

layout: true
<div class="my-footer">
  <span style="width: 20%; background-color: #3172C9; text-align: center; left: 0px;">张王优</span><!--
  --><span style="width: 60%; background-color: #D47838; text-align: center; left: 20%;">学术论文写作规范与技巧</span><!--
  --><span style="width: 19%; background-color: #3172C9; text-align: left; padding-left: 1%; left: 80%;">SJTU AudioCC
</div>

---
class: center, middle

.titlehuge[**感谢观看!**]

.titlehuge[.darkblue[**Q & A**]]
