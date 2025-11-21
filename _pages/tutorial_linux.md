---
layout: presentation
title: Linux 服务器环境配置和使用技巧
permalink: /zh-CN/tutorial_linux/
locale: zh-CN
---

layout: true
<p style="display: block; position: absolute; width: 30%; left: 35px; top: 25px; margin: 0; padding: 0; text-align: left;"><img draggable="false" (dragstart)="false;" class="unselectable" src="/images/remark.js/sjtu_banner.png" style="width: 100%;"/></p>
<p style="display: block; position: absolute; width: 100%; left: 0px; bottom: 75px; margin: 0; padding: 0; text-align: center;"><img draggable="false" (dragstart)="false;" class="unselectable" src="/images/remark.js/logo_audiocc.png" style="width: 80%;"/></p>
<div class="my-footer">
  <span style="width: 20%; background-color: #3172C9; text-align: center; left: 0px;">张王优</span><!--
  --><span style="width: 60%; background-color: #D47838; text-align: center; left: 20%;">Linux 服务器环境配置和使用技巧</span><!--
  --><span style="width: 19%; background-color: #3172C9; text-align: left; padding-left: 1%; left: 80%;">SJTU AudioCC
</div>

---
class: center

[//]: # (Manually add some vertical space)
<p class="unselectable"><br><br><br><br></p>

## .darkblue[.titlelarge[Linux 服务器环境配置<br>和使用技巧]]

.huge[张王优]

.cute.orange[2025 年 10 月 27 日]<br/>
.small[.cute.gray[更新于 2025 年 11 月 19 日]]


---
layout: true
<div class="my-header" style="background-color: #173D6E;">
  <img draggable="false" (dragstart)="false;" class="unselectable" src="/images/remark.js/logo_sjtu.svg"/>
  <span style="color: #FFC000;"><b>目录</b></span>
</div>
<div class="my-watermark" style="z-index: -1;"> </div>
<div class="my-footer">
  <span style="width: 20%; background-color: #3172C9; text-align: center; left: 0px;">张王优</span><!--
  --><span style="width: 60%; background-color: #D47838; text-align: center; left: 20%;">Linux 服务器环境配置和使用技巧</span><!--
  --><span style="width: 19%; background-color: #3172C9; text-align: left; padding-left: 1%; left: 80%;">SJTU AudioCC
</div>
</div>

---
class: middle
name: toc

![:toc](
  1. [SSH 登录]&#lpar;#ssh-login&#rpar;
  2. [Linux 基本操作]&#lpar;#linux-basics&#rpar;
  3. [Zsh / Bash]&#lpar;#zsh-bash&#rpar;
  4. [调试机使用方式]&#lpar;#debug-machine-usage&#rpar;
  5. [Python / PyTorch]&#lpar;#python-pytorch&#rpar;
  6. [YAML]&#lpar;#yaml&#rpar;
  7. [Git]&#lpar;#git&#rpar;
  8. [SLURM]&#lpar;#slurm&#rpar;
  9. [VSCode]&#lpar;#vscode&#rpar;
  10. [学生福利]&#lpar;#student-benefits&#rpar;
)

---
layout: true
<div class="my-header" style="background-color: #173D6E;">
  <img draggable="false" (dragstart)="false;" class="unselectable" src="/images/remark.js/logo_sjtu.svg"/>
  <span style="color: #FFC000;"><b>SSH 登录</b></span>
</div>
<div class="my-watermark" style="z-index: -1;"> </div>
<div class="my-footer">
  <span style="width: 20%; background-color: #3172C9; text-align: center; left: 0px;">张王优</span><!--
  --><span style="width: 60%; background-color: #D47838; text-align: center; left: 20%;">Linux 服务器环境配置和使用技巧</span><!--
  --><span style="width: 19%; background-color: #3172C9; text-align: left; padding-left: 1%; left: 80%;">SJTU AudioCC
</div>
</div>

---
name: ssh-login

# 参考资料

1. SSH man 手册页（英文）：https://manpages.ubuntu.com/manpages/noble/man1/ssh.1.html
2. SSH 入门教程（中文）：https://wangdoc.com/ssh/

<iframe src="https://wangdoc.com/ssh/" width="800px" height="385px" style="border: none; transform: scale(1.0); transform-origin: 0 0;"></iframe>

---

# 普通登录方式

+ 命令行方式（Linux / macOS Terminal / Windows PowerShell / Windows Terminal）
+ SSH 配置文件
    + Linux / macOS：`~/.ssh/config`
    + Windows：`C:\Users\your_username\.ssh\config`
+ 第三方终端模拟器
    + Windows：[MobaXterm](https://mobaxterm.mobatek.net)、[Xshell](https://www.netsarang.com/en/xshell/)、[WezTerm](https://wezterm.org/index.html) 等
    + macOS：[iTerm2](https://iterm2.com/)、[Kitty](https://sw.kovidgoyal.net/kitty/quickstart/)、[Ghostty](https://ghostty.org) 等

--
count: false

```bash
# 如果不指定 port，默认端口号为 22
ssh username@host_name_or_ip:[port]
ssh -p [port] username@host_name_or_ip

# 使用别名登录（需提前在 ~/.ssh/config 中配置别名）
ssh alias_name

# 登录到远程服务器，执行指定的命令 nvidia-smi，然后退出
ssh username@remoteHost "nvidia-smi"
```

---

# 使用 SSH 密钥对登录（免密登录）

(1) 生成 SSH 密钥对（若已有密钥对，可跳过此步骤）

```bash
# 默认将公钥和私钥生成在 ~/.ssh/ 目录下，两个文件名称相同，但公钥多一个后缀 .pub
ssh-keygen -t rsa

# 如果私钥文件的读写权限不是 400，建议手动将其修改为 400，否则有可能遇到报错：
#     Permissions are too open
# 此时应手动修改私钥权限为 400
#     chmod 400 ~/.ssh/id_rsa
```

(2) 将.red[公钥]上传到服务器

```bash
ssh-copy-id -f -i ~/.ssh/key.pub username@remoteHost

# 若没有安装 ssh-copy-id 命令，也可以手动登录到远程服务器，并在服务器上手动创建
#   ~/.ssh/ 目录，将公钥文件的文本内容添加到 ~/.ssh/authorized_keys 文件末尾
ssh username@remoteHost
mkdir -p ~/.ssh/;       echo "your_public_key_content" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
# 如果跳板机与集群服务器的 $HOME 目录在不同路径（如 /home/username 和
#     /share_home/username），还需要分别在每个 $HOME 目录下执行上述操作
```

---

# 使用 SSH 密钥对登录（免密登录）

(3) 修改本地 SSH 配置文件 `~/.ssh/config`，在末尾添加以下内容

```config
Host alias_name
    HostName xxx.xxx.xxx.xxx  # 远程服务器地址（域名或 IP）
    User username            # 登录用户名
    Port 1234                 # 远程服务器端口号（默认 22）
    IdentityFile ~/.ssh/key   # 私钥文件路径（Windows 系统则为 C:\User\username\.ssh\key）
```

(4) 使用别名登录远程服务器

```bash
ssh alias_name
```

.orange[以上配置成功后，VSCode 等支持 SSH 远程登录的软件也能够免密登录]

(5) 集群内部，不同节点之间的免密登录

```bash
# 登录到远程服务器集群，然后输入以下命令
cat ~/.ssh/public_key_file.pub >> ~/.ssh/authorized_keys
```

---

# 调试模式

+ 用于显示详细登录信息，检查错误原因

```bash
ssh -v username@remoteHost
ssh -vv username@remoteHost  # 更详细的信息
ssh -vvv username@remoteHost # 最详细的信息
```

---
name: ssh-port-forward

# 推荐掌握

+ .red[端口转发（Port Forwarding）]
    + 本地端口转发
        + 常见用途：在本地浏览器访问远程服务器的特定端口<br/>（如打开 tensorboard 的可视化网页）
    + 远程端口转发

```bash
# 本地端口转发：创建一个本地端口，将发往该端口的所有通信都通过 SSH 服务器，
#     转发到指定的远程服务器的端口
# 将本地的 8888 端口转发到远程服务器的 6006 端口
#     -N：不从标准输入读取要执行的命令（仅用于端口转发）
#     -L：转发本地端口
ssh -N -L 8888:localhost:6006 username@remoteHost

# 远程端口转发：将远程服务器的 6008 端口转发到本地 6666 端口
#     -R：转发远程端口
ssh -R 6008:remote_host_name_or_ip:6666 username@remoteHost
```

+ 非命令行方法：在 VSCode 上通过 SSH 登录到服务器，并在底部面板的「端口」选项卡中，点击『转发端口』按钮，设置需要转发的端口号

---

# 推荐掌握

+ .red[代理跳板机]
    + 通过跳板机登录内网服务器

```bash
# 方式一：使用 ProxyJump 选项
ssh -J jump_user@jump_host:jump_port target_user@target_host -p target_port

# 方式二：使用 ProxyCommand 选项
ssh -o ProxyCommand="ssh -W %h:%p jump_user@jump_host -p jump_port" `\`
    target_user@target_host -p target_port

# 方式三：在 SSH 配置文件 ~/.ssh/config 中配置跳板机（jump_server）
*Host jump_server
*    HostName jump_host
*    User jump_user
*    Port jump_port
*
*Host target_alias
*    HostName target_host
*    User target_user
*    Port target_port
*    ProxyJump jump_server
# 然后使用别名登录目标服务器
ssh target_alias
```

---
layout: true
<div class="my-header" style="background-color: #173D6E;">
  <img draggable="false" (dragstart)="false;" class="unselectable" src="/images/remark.js/logo_sjtu.svg"/>
  <span style="color: #FFC000;"><b>Linux 基本操作</b></span>
</div>
<div class="my-watermark" style="z-index: -1;"> </div>
<div class="my-footer">
  <span style="width: 20%; background-color: #3172C9; text-align: center; left: 0px;">张王优</span><!--
  --><span style="width: 60%; background-color: #D47838; text-align: center; left: 20%;">Linux 服务器环境配置和使用技巧</span><!--
  --><span style="width: 19%; background-color: #3172C9; text-align: left; padding-left: 1%; left: 80%;">SJTU AudioCC
</div>
</div>

---
name: linux-basics

# 参考资料

1. 快乐的 Linux 命令行（中英对照版）：https://billie66.github.io/TLCL/
2. CS 自学指南：https://csdiy.wiki
--
count: false
3. 在线交互式教程（英文）：https://sandbox.bio/community/linux-basics
4. 在线沙盒练习（英文）：https://sandbox.bio/playgrounds/terminal

<iframe src="https://sandbox.bio/playgrounds/terminal" width="800px" height="345px" style="border: none; transform: scale(1.0); transform-origin: 0 0;"></iframe>

???
这一页主要介绍学习 Linux 的一些参考资料，方便大家自学和练习。

---

# 1. 取消命令/退出命令行
  > + `ctrl + c`：取消当前在执行的命令
  > + `ctrl + d`：退出当前命令行（仅在当前无前台命令在执行时生效）
  > + 输入 `exit` 命令：退出当前命令行

---

# 2. 切换路径
+ `cd`：切换当前工作目录

```bash
# 切换到指定路径
cd "/path/to/directory"

# 切换到上一级目录
cd ..

# 切换到用户家目录
cd ~
cd "$HOME"

# 切换到上一次访问的目录
cd -
```

---

# 3. 查看帮助文档

1. `man` 命令：比如 `man ls`
2. `--help` 选项：比如 `ls --help`
3. 在线 Linux 命令搜索引擎：https://wangchujiang.com/linux-command/

<iframe src="https://wangchujiang.com/linux-command/" width="700px" height="380px" style="border: none; transform: scale(1.0); transform-origin: 0 0;"></iframe>

---

# 4. 查看路径
+ `pwd`：显示当前工作目录的完整路径
+ `ls`：列出当前目录下的文件和子目录

```bash
# -a：包括以 . 开头的隐藏文件
# -l：列出详细信息，从左到右依次是
#    文件类型、`权限`、链接数、所有者名、组名、大小（byte）、时间信息、文件名
# -h：以更具可读性的格式（如 MB、GB 等）显示文件大小
# --color=auto：用不同颜色区分普通文件、可执行文件、软链接、目录等
ls -lha --color=auto "/path/to/file_or_dir"

# 权限含义：所有者、所属组和其他用户
# 示例：-`rwx r-- r--` 1 user group 1.2K Jan 01 12:00 example.txt
# 第一个 - 代表普通文件，若为 d 则代表目录
# rwx : 所有者有读写执行权限（r、w、x 分别对应数字 4、2、1 => 7）
# r-x : 所属组有读权限（=> 5）
# r-x : 其他用户有读权限（=> 5）
```

---

# 5. 创建空文件/目录
+ `touch`：创建空文件
+ `mkdir`：创建目录

>    **关于文件/目录路径的说明**<br/>
>    + 当路径中某个目录或文件的名字带有**特殊符号**时，应用在路径两侧添加一对单引号/双引号
>    + 特殊符号包括 .red[空格]、圆括号、方括号、花括号等

```bash
touch "/path/to/new_file"

# 创建新目录，若路径中的某个父目录不存在，则报错
mkdir "/path/to/new_dir"

# 创建新目录，若路径中的某个父目录不存在，则一并创建
mkdir -p "/path/to/new_dir"
```

---

# 6. 删除文件/目录

+ `rm`：删除文件/目录

```bash
# 删除文件
rm "/path/to/file"

# 删除所有名称满足前缀格式的文件
rm "/path/to/dir/"prefix*

# 删除所有名称满足后缀格式的文件
rm "/path/to/dir/"*suffix

# -r：递归地删除整个目录及内部的所有文件/子目录
# -f：强制删除，忽略所有警告
rm -rf "/path/to/dir"

*# 删除当前目录所有文件和子目录（谨慎使用！）
*rm -rf ./*
*rm -rf ${some_path_variable}/*
```

--
count: false

.red[.titlesize[⚠️ sudo rm -rf /*]]

---

# 7. 查看文件信息

+ `file`：查看文件类型
+ `ls`：查看文件的基本信息
+ `stat`：查看文件的详细信息

```bash
# 查看文件类型
file "/path/to/file"

# 查看文件的基本信息
ls -lh "/path/to/file"

# 查看文件的详细信息（如创建、最近修改、最近访问时间）
stat "/path/to/file"
```

<iframe src="https://wangchujiang.com/linux-command/c/stat.html" width="700px" height="180px" style="border: none; transform: scale(1.0); transform-origin: 0 0;"></iframe>

---

# 8. 查找文件

+ `find`：在指定路径下递归查找文件

```bash
# 在指定路径下递归查找文件
find "/path/to/search" -name "filename_or_pattern"

# 查找当前目录及子目录下所有以 .wav 结尾（大小写不敏感）的文件，并统计总数
find . `-iname` "*.wav" | wc -l

# 在软链接的目录下查找
find "/path/to/symbolic_link_dir`/`" -name "filename_or_pattern"

# 查找 data 目录下所有大于 100MB 的文件
find "data" -type f -size +100M

# 查找并删除指定路径下所有名为 .DS_Store 的文件
find "/path/to/search" -name ".DS_Store" -type f -delete

# 查找所有名为 __pycache__ 或 __MACOSX 的目录，并删除
find "/path/to/search" -name "__pycache__" -type d -exec rm -rf {} `\;`
find "/path/to/search" -name "__MACOSX" -type d -exec rm -rf {} `\;`
```

---

# 9. 查看文件内容

+ `cat`：查看文件内容
+ `less`：分页查看文件内容
+ `head`：查看文件开头部分内容
+ `tail`：查看文件结尾部分内容

```bash
# 查看文件全部内容（适用于小文件）
cat "/path/to/file"

# 分页查看文件内容
less "/path/to/file"

# 查看文件开头内容（默认前 10 行）
head "/path/to/file"
head -n20 "/path/to/file"  # 查看前 20 行

# 查看文件结尾内容（默认后 10 行）
tail "/path/to/file"
tail -n20 "/path/to/file"  # 查看后 20 行
tail `-f` "/path/to/file"  # 实时查看文件新增内容（如日志文件），按 ctrl+c 停止
```

---

# 10. 复制/移动文件

+ `cp`：复制文件/目录
+ `rsync`：复制文件/目录（支持断点续传）
+ `mv`：移动文件/目录（或重命名文件/目录）

```bash
# 复制文件
cp "/path/to/source_file" "/path/to/destination_file"

# 复制目录及其内容
cp -r "/path/to/source_dir" "/path/to/destination_dir"

# 断点续传复制文件或目录
rsync -v --progress "/path/to/source_file" "/path/to/destination_file"
rsync -av --progress "/path/to/source_dir" "/path/to/destination_dir/"

# 移动文件或目录
mv "/path/to/source" "/path/to/destination/"

# 重命名文件或目录
mv "/path/to/old_name" "/path/to/new_name"
mv "/path1/old_name" "/path2/new_name"
```

---

# 11. 修改文件权限/所有者

+ `chmod`：修改文件/目录权限
+ `chown`：修改文件/目录所有者

```bash
# 修改文件/目录权限为所有者可读、写、执行，所属组和其他用户可读、写
chmod 755 "/path/to/file_or_dir"

# 修改文件/目录权限为所有者、所属组和其他用户均可读、写、执行
chmod 777 "/path/to/file_or_dir"

# 修改文件/目录权限为所有者可读，所属组和其他用户无权限
chmod 400 "/path/to/private_file_or_dir"

# 递归修改目录及其内容的权限
chmod `-R` 755 "/path/to/dir"

# 修改文件所有者为 user，所属组为 group
chown user:group "/path/to/file_or_dir"

# 递归修改目录及其内容的所有者
chown `-R` user:group "/path/to/dir"
```

---

# 12. 修改文件内容

+ `>` 或 `>>`（重定向）：向文件写入内容
+ `vim`：文本编辑器
    > 在命令行执行 `vimtutor` 可学习 vim 的基本使用方法
    >
    > 中英对照：https://github.com/HanielF/VimTutor

```bash
# 向文件写入内容（会覆盖原有内容）
echo "New content" > "/path/to/file"

# 追加内容到文件末尾
echo "Additional content" >> "/path/to/file"

# 使用 vim 编辑文件
vim "/path/to/file"
```

---

# 12. 修改文件内容

+ `>` 或 `>>`（重定向）：向文件写入内容
+ `vim`：文本编辑器

.small[
> 1. 打开 vim 后，默认进入【读模式】
> 2. 按下小写 `a`（append）或者 `i`（insert）或者 `s`（substitute）进入「编辑模式」
> 3. 在「编辑模式」中，按下 `Esc` 键，可退出「编辑模式」，回到【读模式】
> 4. 在【读模式】中，按下大写 `G` 可跳到文件末尾，按下小写 `gg` 可跳到文件开头
> 5. 在【读模式】中，按下数字，再按下大写 `G` 可跳到数字指定的行号处
> 6. 在【读模式】中，按下小写 `dd` 可删除当前行
> 7. 在【读模式】中，按下小写 `u` 可撤销上一步的改动，按下 `ctrl+r` 可重做撤销的改动
> 8. 在【读模式】中，依次按下英文符号 `/xyz` 并回车，会搜索字符串 `xyz` 出现的所有位置；<br/>
>     在此「搜索模式」下，按小写 `n` 跳转到下个匹配位置，按大写  `N` 跳转到前一个匹配位置
> 9. 在【读模式】中，依次按下 `:s#xxx#yyy#g` 并回车，可将出现的所有字符串 `xxx`
>	 替换为 `yyy`
> 10. 在【读模式】中，依次按下英文符号 `:q`（quit）或者 `:wq`（write and quit）或者 `:q!`（force quitting），然后回车，以退出 vim 界面；也可以通过按下大写 `ZZ`，保存并退出
]

---

# 13. 下载/上传文件

+ `wget`：下载文件
+ `scp`：通过 SSH 上传/下载文件
+ `rsync`：通过 SSH 上传/下载文件（支持断点续传）

```bash
# 下载文件到指定路径（-c：支持断点续传）
wget "http://example.com/file.zip" -O "/path/to/save/file.zip"
wget -c "http://example.com/file.zip" -O "/path/to/save/file.zip"

# （一）上传本地文件到远程服务器
scp "/local/file" username@remoteHost:"/path/to/remote_path"
scp -r "/local/dir" username@remoteHost:"/path/to/remote_path/"
# rsync 支持断点续传
rsync "/local/file" username@remoteHost:"/path/to/remote_path"
rsync -a "/local/dir/" username@remoteHost:"/path/to/remote_path/"

# （二）下载远程服务器文件到本地
scp username@remoteHost:"/path/to/remote_file" "/local/path"
scp -r username@remoteHost:"/path/to/remote_dir" "/local/path/"
# rsync 支持断点续传
rsync username@remoteHost:"/path/to/remote_file" "/local/path"
rsync -a username@remoteHost:"/path/to/remote_dir" "/local/path/"
```

---

# 14. 解压缩文件

+ `tar`：解压缩 tar、tar.gz、tar.bz2 等格式的压缩包
    + 集群上一般都预装该命令
    ```bash
    # 解压缩 .tar 格式的压缩包
    #   -x: 解压缩
    #   -v: 显示解压缩过程
    #   -f: 指定压缩包文件名
    #   -C: 指定解压缩到的目标路径（可选）
    tar -xvf "/path/to/file.tar" -C "/path/to/destination_dir"
    # 解压缩 .tar.gz 或 .tgz 格式的压缩包
    #   -z: 使用 gzip 解压缩
    tar -xzvf "/path/to/file.tar.gz"
    # 解压缩 .tar.bz2 格式的压缩包
    #   -j: 使用 bzip2 解压缩
    tar -xjvf "/path/to/file.tar.bz2"
    ```
+ `unzip`：解压缩 zip 格式的压缩包
+ `7z`：解压缩 7z、rar 格式的压缩包

---

# 14. 解压缩文件

+ `tar`：解压缩 tar、tar.gz、tar.bz2 等格式的压缩包
+ `unzip`：解压缩 zip 格式的压缩包
    + 如果集群上没有安装该命令，可通过 conda 手动安装

    ```bash
    # 安装 unzip 命令
    conda install conda-forge::unzip
    
    # 解压缩 .zip 格式的压缩包
    #   -d: 指定解压缩到的目标路径（可选）
    unzip "/path/to/file.zip" -d "/path/to/destination_dir"

    # 查看 zip 压缩包内容
    unzip -l "/path/to/file.zip"
    ```

+ `7z`：解压缩 7z、rar 格式的压缩包

---

# 14. 解压缩文件

+ `tar`：解压缩 tar、tar.gz、tar.bz2 等格式的压缩包
+ `unzip`：解压缩 zip 格式的压缩包
+ `7z`：解压缩 7z、rar 格式的压缩包

    ```bash
    # 用 conda 安装 p7zip 命令
    conda install -c conda-forge::p7zip
    # 用 apt-get 安装 p7zip 命令（Ubuntu 系统，仅适用于有 sudo 权限的用户）
    sudo apt-get update;    sudo apt-get install p7zip-full

    # 解压缩 .7z 格式的压缩包
    #   x: 解压缩
    #   -o: 指定解压缩到的目标路径（可选）
    #       注意，-o 后面不能有空格
    7z x "/path/to/file.7z" -o"/path/to/destination_dir"
    # 解压缩 .rar 格式的压缩包
    7z x "/path/to/file.rar" -o"/path/to/destination_dir"

    # 查看 7z 或 rar 压缩包内容
    7z l "/path/to/file.rar"
    ```

---

# 15. 查找历史命令

+ `history`：查看历史命令
+ `ctrl + r` + 输入关键词 + 重复按下 `ctrl + r`：反向搜索历史命令

<iframe src="https://sandbox.bio/playgrounds/terminal" width="700px" height="400px" style="border: none; transform: scale(1.0); transform-origin: 0 0;"></iframe>

---

# 16. 查看进程的资源占用以及进程管理

+ `top`：动态查看系统资源占用情况
+ `htop`：增强版的 top（可能需要手动安装）
+ `nvidia-smi`：查看 NVIDIA GPU 使用情况（仅适用于 NVIDIA 显卡驱动）
+ `npu-smi`：查看华为昇腾 NPU 使用情况（仅适用于华为昇腾 NPU 驱动）
+ `ps`：查看当前运行的所有进程
+ `kill`：终止指定 PID 的进程
+ `killall`：终止指定名称的所有进程

```bash
top -u username   # 动态查看系统资源占用情况
htop -u username  # 查看指定用户的进程
nvidia-smi        # 查看 NVIDIA GPU 使用情况
npu-smi           # 查看华为昇腾 NPU 使用情况
ps aux | grep process_name  # 查找指定名称的进程
kill PID          # 终止指定 PID 的进程
kill -9 PID       # 强制终止指定 PID 的进程
killall process_name  # 终止指定名称的所有进程
```

---

# 17. 在后台执行（长时）任务

+ `tmux`：终端复用工具，支持在后台运行任务

```bash
# 1. 创建并进入一个新的 tmux 会话（可用 -s 指定会话的唯一名称）
tmux new -s some_name

# 2. 依次按下英文按键 `ctrl+b` 和 `d`，可关闭当前 tmux 会话界面（仍在后台运行）

# 3. 在 tmux 会话界面，依次按下英文按键 `ctrl+b` 和 `%`，可创建垂直分屏

# 4. 在 tmux 会话界面，依次按下英文按键 `ctrl+b` 和 `"`，可创建水平分屏

# 5. 在 tmux 会话界面，按下 `ctrl+d` 或执行 `exit` 命令，可彻底结束当前 tmux 会话

# 6. 重新连接名为 some_name 的 tmux 会话
tmux a -t some_name

# 7. 查看已经创建的所有 tmux 窗口
tmux ls
```

---

# 18. 在后台执行（长时）任务

+ `tmux`：终端复用工具，支持在后台运行任务

> 推荐采用以下 tmux 配置（需创建并修改 `~/.tmux.conf` 文件）
>
```bash
set -g default-terminal screen-256color
set-window-option -g xterm-keys on
set -g mouse on          # 允许鼠标操作
set -g set-clipboard on  # 允许与系统剪贴板交互
```

---

# 19. 查看已占用的硬盘空间

+ `df`：查看磁盘分区的使用情况
+ `du`：查看指定路径的磁盘使用情况

```bash
# 查看所有磁盘分区的使用情况
df -h

# 查看指定目录/文件所占用的磁盘空间
#   -s：只计算总占用
#   -h：以具有可读性的格式显示
du -sh "/path/to/dir_or_file"

# 查看指定目录下各个子目录/文件所占用的空间大小
#   -d：限制列出的文件夹深度
du -h -d 1 "/path/to/dir"

*⬆️ 对于包含大量小文件的目录，上述命令通常需要花费较长时间
```

---
layout: true
<div class="my-header" style="background-color: #173D6E;">
  <img draggable="false" (dragstart)="false;" class="unselectable" src="/images/remark.js/logo_sjtu.svg"/>
  <span style="color: #FFC000;"><b>Zsh / Bash</b></span>
</div>
<div class="my-watermark" style="z-index: -1;"> </div>
<div class="my-footer">
  <span style="width: 20%; background-color: #3172C9; text-align: center; left: 0px;">张王优</span><!--
  --><span style="width: 60%; background-color: #D47838; text-align: center; left: 20%;">Linux 服务器环境配置和使用技巧</span><!--
  --><span style="width: 19%; background-color: #3172C9; text-align: left; padding-left: 1%; left: 80%;">SJTU AudioCC
</div>
</div>

---
name: zsh-bash

# 推荐配置

+ 优先选择 zsh，因为其功能、特性更强大，可选插件多，使用体验更好
+ 常用配置
  1. [`oh-my-zsh`](https://ohmyz.sh/)：最有名，但较臃肿，启动速度较慢
  2. [`zim`](https://zimfw.sh/#install)：轻量化，功能较全面，使用体验不差，启动速度快

--
count: false

+ 进阶学习资料：[How to write a Bash script（英文）](https://sandbox.bio/tutorials/bash-script)

<iframe src="https://sandbox.bio/tutorials/bash-script" width="800px" height="300px" style="border: none; transform: scale(1.0); transform-origin: 0 0;"></iframe>

---
layout: true
<div class="my-header" style="background-color: #173D6E;">
  <img draggable="false" (dragstart)="false;" class="unselectable" src="/images/remark.js/logo_sjtu.svg"/>
  <span style="color: #FFC000;"><b>调试机使用方式</b></span>
</div>
<div class="my-watermark" style="z-index: -1;"> </div>
<div class="my-footer">
  <span style="width: 20%; background-color: #3172C9; text-align: center; left: 0px;">张王优</span><!--
  --><span style="width: 60%; background-color: #D47838; text-align: center; left: 20%;">Linux 服务器环境配置和使用技巧</span><!--
  --><span style="width: 19%; background-color: #3172C9; text-align: left; padding-left: 1%; left: 80%;">SJTU AudioCC
</div>
</div>

---
name: debug-machine-usage

#

1. 日常编辑代码
    + 使用 vim 或者自行安装 VSCode 的远程 SSH 插件
--
count: false
2. 执行**短时**后台任务
	+ 应避免使用大量 CPU 核（如创建 >10 个 CPU 进程）或占用大量内存，因为容易导致调试机宕机或集群严重卡顿
--
count: false
3. 下载数据
    + 公用数据集应统一下载到 `指定的数据目录`（查看 Wiki 说明，或询问设备委员），以免大家重复下载
    + 下载前，应检查自己的剩余硬盘空间配额（disk quota）是否足够存放要下载的数据
        + 每个用户的默认配额，可在 Wiki 相关页面查看，或询问设备委员

4. 调试 GPU/CPU 程序

---

#

.normalsize[4.] 调试 GPU/CPU 程序
+ 如果程序需要的 GPU 显存/CPU 内存不够，怎么办？
  + 变通思维：能否调小程序的默认配置中的一些数值，得到减小显存/内存占用的目的？
--
count: false
+ 如何区分程序报错是由于 GPU 显存不足还是 CPU 内存不足？
  + 观察报错信息：① 出现 `oom_kill` 等关键词，或者程序返回码为 137，表明是 CPU 内存不足；② 出现 `CUDA out of memory` 等关键词，表明是 GPU 显存不足
  + 其他情况，询问 chatGPT 或者在 Google 搜索引擎上检索相关报错信息，寻找可能的解决方案
--
count: false
+ 如何分析程序的 GPU 利用效率？
  + 使用 `watch -n 1 'nvidia-smi'` 命令观察 GPU 负载的变化情况
  + 如果 `GPU-Util` 项的数值浮动范围很大，很可能是 dataloader 数据加载速度比单个 batch 训练更慢导致的，需要定位具体原因（如硬盘 IO 瓶颈、数据加载存在长时操作等）

---
layout: true
<div class="my-header" style="background-color: #173D6E;">
  <img draggable="false" (dragstart)="false;" class="unselectable" src="/images/remark.js/logo_sjtu.svg"/>
  <span style="color: #FFC000;"><b>Python / PyTorch</b></span>
</div>
<div class="my-watermark" style="z-index: -1;"> </div>
<div class="my-footer">
  <span style="width: 20%; background-color: #3172C9; text-align: center; left: 0px;">张王优</span><!--
  --><span style="width: 60%; background-color: #D47838; text-align: center; left: 20%;">Linux 服务器环境配置和使用技巧</span><!--
  --><span style="width: 19%; background-color: #3172C9; text-align: left; padding-left: 1%; left: 80%;">SJTU AudioCC
</div>
</div>

---
name: python-pytorch

# Python 环境管理工具

+ 推荐使用 `miniconda`
    + 轻量级的 Anaconda 发行版，只包含最基础的包管理和环境管理功能
    + 官网：https://docs.conda.io/en/latest/miniconda.html

```bash
# 下载 Miniconda 安装脚本（以 Linux 64-bit 为例，约 150 MB）
wget -c --tries=3 --no-check-certificate `\`
    "https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh" `\`
    -O ~/miniconda3.sh
# 安装 Miniconda（安装路径可自定义）
bash ~/miniconda3.sh -b -p "$HOME/miniconda3"
# 激活 conda（每次登录后都需执行此命令，或将其添加到 ~/.bashrc 或 ~/.zshrc 中）
source "${HOME}/miniconda3/etc/profile.d/conda.sh"

# 退出 conda 环境
conda deactivate

# 创建新的 conda 环境
conda create -yn env_name python=3.x

# 激活 conda 环境
conda activate env_name
```

---

# Python 包管理工具

+ 推荐使用 `pip` 或 `uv` 安装 Python 包
    + [`pip`](https://pypi.org/project/pip/)：Python 官方推荐的包管理工具，支持从 PyPI 仓库安装大部分 Python 包
    + [`uv`](https://github.com/astral-sh/uv)：基于 Rust 编写的包管理器，功能全面，且速度极快（比 pip 快 10 倍甚至更多的性能）

+ 配置镜像源（部分镜像同步 pypi 更新的延迟可能超过1天）
    + 清华大学镜像源：https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple
    + 阿里云镜像源：https://mirrors.aliyun.com/pypi/simple/
    + 交大镜像源：https://pypi.mirrors.sjtug.sjtu.edu.cn/simple/


```bash
# 使用 pip 安装包，并指定镜像源
python -m pip install xxx -i "https://mirrors.aliyun.com/pypi/simple/"
# 使用 uv 安装包，并指定镜像源
uv add xxx --index "https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple"
```

---

# Python 包管理工具

+ 配置全局镜像源

```bash
# 配置 pip 全局镜像源
mkdir -p ~/.pip
cat > ~/.pip/pip.conf << EOF
*[global]
*index-url = https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple
EOF

# 配置 uv 全局镜像源
mkdir -p ~/.config/uv
cat > ~/.config/uv/uv.toml << EOF
*[[index]]
*url = "https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple"
*default = true
EOF
```

---

# IPython 和 JupyterLab

![:callout info, IPython：增强版的 Python REPL（交互式命令行）](
+ 安装：`pip install ipython` 或 `uv add --dev ipython`
+ **适用场景**：快速调试代码片段、测试函数等
+ 使用方式：在命令行输入 `ipython` 即可进入 IPython 交互式命令行
  + 支持语法高亮、Tab 补全、魔法命令等功能
)

推荐配置 1
```bash
ipython profile create
# 在 IPython 中自动加载代码的热更新
cat >> ~/.ipython/profile_default/ipython_config.py << 'EOF'
*c.InteractiveShellApp.exec_lines = []
*c.InteractiveShellApp.exec_lines.append('%load_ext autoreload')
*c.InteractiveShellApp.exec_lines.append('%autoreload 2')
*c.InteractiveShellApp.exec_lines.append(r'print("\n\033[1m\033[38;5;9mWarning:\033[0m\033[1m disable autoreload in \033[4m~/.ipython/profile_default/ipython_config.py\033[0m\033[1m if you want to improve performance.\033[0m")')
EOF
```

---

# IPython 和 JupyterLab

推荐配置 2

```bash
# 参考 https://gist.github.com/fratajczak/64e32421a43d3b8194d0409ce300518a
# 将 ctrl+w / ctrl+左右箭头的默认行为修改为以整个单词为删除/移动单位
cat > ~/.ipython/profile_default/startup/shortcuts.py << 'EOF'
*from prompt_toolkit.key_binding.bindings import named_commands as nc
*from prompt_toolkit.keys import Keys
*from prompt_toolkit.enums import DEFAULT_BUFFER
*from prompt_toolkit.filters import has_focus, has_selection, emacs_insert_mode
*
*ipython = get_ipython()
*
*def backward_word_space(event):
*    buf = event.current_buffer
*    pos = buf.document.find_previous_word_beginning(count=event.arg, WORD=True)
*
*    if pos:
*        buf.cursor_position += pos
*
*
*def forward_word_space(event):
*    buf = event.current_buffer
*    pos = buf.document.find_next_word_ending(count=event.arg, WORD=True)
*
*    if pos:
*        buf.cursor_position += pos
*
*
*if getattr(ipython, 'pt_app', None):
*    registry = ipython.pt_app.key_bindings
*
*    # cont+W now only kills the previous word instead of until the previous whitespace
*    registry.add_binding(Keys.ControlW,
*                         filter=(has_focus(DEFAULT_BUFFER)
*                                 & ~has_selection
*                                 & emacs_insert_mode))(nc.backward_kill_word)
*    registry.add_binding(Keys.ShiftLeft,
*                         filter=(has_focus(DEFAULT_BUFFER)
*                                 & emacs_insert_mode))(backward_word_space)
*    registry.add_binding(Keys.ShiftRight,
*                         filter=(has_focus(DEFAULT_BUFFER)
*                                 & emacs_insert_mode))(forward_word_space)
EOF
```

---

# IPython 和 JupyterLab

![:callout info, JupyterLab：基于浏览器的交互式编程环境](
+ 安装：`pip install jupyterlab` 或 `uv add jupyterlab`
+ 支持 Markdown 文本块 和 Python 代码块两种类型的单元格，可逐个单元格执行代码
+ **适用场景**：数据可视化、分析和代码调试
+ 使用方式：
    1. 在命令行输入 `jupyter lab` 即可启动 Jupyter
      + 通过浏览器访问 `http://localhost:8888`（或命令行输出的其他端口号）即可使用 JupyterLab
    2. 安装 VSCode 的 Jupyter Notebook 插件，即可在 VSCode 中直接运行 Jupyter Notebook 文件（`.ipynb`）
)

---

# IPython 和 JupyterLab

![:callout info, marimo：基于浏览器的交互式编程环境](
+ 安装：`pip install marimo` 或 `uv add marimo`
+ 支持 Markdown 文本块 和 Python 代码块两种类型的单元格，可逐个单元格执行代码
+ 支持更高级的交互功能，如 ① 生成可交互 UI 元素，如与图表进行交互，② 更新某个单元格中的全局变量后，自动运行其他引用该变量的单元格等
+ **适用场景**：数据可视化、分析和代码调试
+ 使用方式：
    1. 在命令行输入 `marimo edit` 即可启动 notebook 服务
      + 通过浏览器访问 `http://localhost:2718?access_token=xxxxx`（或命令行输出的其他端口号）即可使用
    2. 安装 VSCode 的 marimo 插件，即可在 VSCode 中直接运行 marimo notebook 文件（`.py`）
)

---

# PyTorch 安装

+ 官方安装指南：https://pytorch.org/get-started/locally/
+ 注意事项
    + 安装的 torchaudio、torchvision 版本应与 PyTorch 版本（包括 CUDA 版本）相匹配
    + 版本对应关系见 https://pytorch.org/get-started/previous-versions/

| PyTorch 版本   |torchaudio 版本  | torchvision 版本   |
|:-------------:|:---------------:|:-----------------:|
| 2.8.0         | 2.8.0           | 0.23.0            |
| 2.7.1         | 2.7.1           | 0.22.1            |
| 2.6.0         | 2.6.0           | 0.21.0            |
| 2.1.0         | 2.1.0           | 0.16.0            |
| 2.0.1         | 2.0.2           | 0.15.2            |
| 2.0.0         | 2.0.0           | 0.15.0            |

---

# PyTorch 使用技巧与踩坑

+ 使用 `torch.no_grad()` 包裹不需要梯度计算的代码块，节省显存
+ 注意模型处理过程中，device 是否始终保持一致（`cpu` vs. `cuda:0` vs. `cuda:1`）
+ 注意 DataLoader 中的 `num_workers` 参数设置，避免使用过多子进程，导致内存不足（`oom_kill`）
+ 按引用传递对象时，注意避免意外修改原始对象

--
count: false
```python
import torch

a = torch.tensor([1, 2, 3])
b = a          # b 是对 a 的引用，而非 a 的副本（clone）
c = a.clone()  # 使用 clone 创建 a 的副本，不会和 a 互相影响
b[0] = 0       # 修改 b 中元素的值也会影响 a -> tensor([0, 2, 3])

a = torch.tensor([1, 2, 3, 4])
a[:2], b[-2:] = b[-2:], a[:2]  # 看上去交换了两者元素的值
print(a)  # -> tensor([3, 4, 3, 4]), 实际上不等于 tensor([3, 4, 1, 2])

a[:2], b[-2:] = b[-2:].clone(), a[:2].clone()
print(a)  # -> tensor([3, 4, 1, 2])，正确交换了两者元素的值
```

---

# PyTorch 使用技巧与踩坑

![:callout warn, 常见错误示例](
+ 忘记对模型的输入信号/特征做.blue[归一化（normalization）]
+ 在推理/评估阶段没有使用 `model.eval&#lpar;&#rpar;`
+ 局部微调时忘记.blue[冻结]预训练模型的参数
+ 训练类似 Transformer 架构的模型时，忘记使用.blue[学习率预热（warm-up）]
+ 处理不同采样率的音频数据时，忘记.blue[重采样（resample）]到统一采样率
+ 加载原始长度不同的 batch 数据时，没有把其中的音频.blue[截断/补零]到一样长
  + 处理这类 batch 时未采用时间.blue[掩码（mask）]，导致模型学到错误的信息
+ 在类别极度不平衡的数据集上，只汇报准确率（Accuracy）指标，而不关注其他指标（如 F1-score、Precision、Recall 等）
+ 遇到训练 loss 出现 NaN 时，反而把学习率调得更大
+ 错把 `feature.to&#lpar;device&#rpar;` 当作 .blue[in-place 操作]
)

---

# PyTorch 使用技巧与踩坑

+ 调试 checklist
    + 检查实验用的数据（包括 dump 之后的特征）是否正常？【不要想当然，在做实验之前最好抽样验证，以免浪费时间】
    + 上一次 Debug 时修改的代码有没有还原回去？
    + 如果 CTC 模块的 loss 为 inf 或者梯度为 nan，请检查训练数据中是否有 CTC 输入特征长度小于标签序列长度的样本
    + 如果存在 PyTorch 模型不更新的问题，请检查代码中是否有 `.detach()` 或者 `with torch.no_grad()` 使用不当的情况
    + 用预训练模型提取特征时，是否固定住该部分参数，以及设置 `model.eval()`？
+ 调试案例
    + 中文博客：https://emrys365.github.io/post/debug-gu-shi-01/
    + 英文博客：[the bug that taught me more about PyTorch than years of using it](https://elanapearl.github.io/blog/2025/the-bug-that-taught-me-pytorch/)
      + 小红书翻译版：http://xhslink.com/o/94l2GKgFEwd

---

# 实验结果可视化

+ tensorboard
    + 直接在命令行运行 tensorboard 命令，查看本地实验结果
    + 对于服务器上的实验结果，可通过 [SSH 端口转发](#ssh-port-forward)，在本地浏览器中查看

```bash
# 可视化单个实验目录下的实验数据，并指定端口为 6008
tensorboard --logdir=/path/to/tensorboard_data_dir --bind_all --port 6008

# 同时可视化多个实验目录下的数据
tensorboard --logdir_spec "name1":/path/to/dir1,"name2":/path/to/dir2,"name3":/path/to/dir3
```

.center[![:scale 60%](https://github.com/tensorflow/tensorboard/blob/master/docs/images/quickstart_model_fit.png?raw=1)]

---

# 实验结果可视化

+ wandb
    + 远程可视化实验结果，需注册账号并登录：https://wandb.ai/site
    + 将 wandb 实验数据文件上传到 wandb 服务器（需科学上网）
    + 通过登录 wandb 网站，查看对应项目的实验结果
```bash
# 登录 wandb 账号
wandb login your_wandb_api_key  # 相关信息存储在 ~/.netrc 中
wandb sync "/path/to/run-xxxxxx.wandb"
```

> 若训练程序所在节点无网络（或无法科学上网），可在训练脚本中设置
```bash
export WANDB_MODE=offline
```
> 使其将实验数据保存到本地，稍后可手动上传

---

# 实验结果可视化

+ SwanLab
    + 远程可视化实验结果，国产服务，需注册账号并登录：https://swanlab.cn
    + 不仅支持[联网使用](https://github.com/SwanHubX/SwanLab#-快速开始)，也支持开源、免费、[自托管的版本](https://github.com/SwanHubX/SwanLab#-自托管)
    + 通过登录 swanlab 网站，查看对应项目的实验结果
```bash
# 登录 wandb 账号
swanlab login  # 出现提示时，输入您的 API Key，按下回车，完成登陆
```

```python
# 使用方法
import swanlab

# 初始化一个新的 swanlab 实验
swanlab.init(
    project="my-first-ml",
    config={'learning-rate': 0.003},
)

# 记录指标
for i in range(10):
    swanlab.log({"loss": i, "acc": i})
```

---
layout: true
<div class="my-header" style="background-color: #173D6E;">
  <img draggable="false" (dragstart)="false;" class="unselectable" src="/images/remark.js/logo_sjtu.svg"/>
  <span style="color: #FFC000;"><b>YAML</b></span>
</div>
<div class="my-watermark" style="z-index: -1;"> </div>
<div class="my-footer">
  <span style="width: 20%; background-color: #3172C9; text-align: center; left: 0px;">张王优</span><!--
  --><span style="width: 60%; background-color: #D47838; text-align: center; left: 20%;">Linux 服务器环境配置和使用技巧</span><!--
  --><span style="width: 19%; background-color: #3172C9; text-align: left; padding-left: 1%; left: 80%;">SJTU AudioCC
</div>
</div>

---
name: yaml

# 基本语法规则

+ 使用.red[缩进]表示层级关系
+ 使用 `key: value` 的形式表示字典的键值对
+ 使用 `-` 表示列表项
+ 支持注释，使用 `#` 开始，后面的内容为注释
+ 支持多种数据类型，如字符串、数字、布尔值、列表和字典
    + 不支持 Python 中的元组（tuple）类型
    + 列表有两种表示形式（行内采用 `[...]`，块级采用多行 `-` 列表项）
    + 字典有两种表示形式（行内采用 `{...}`，块级采用缩进的键值对）

```yaml
parent_key: # 值为字典
  child_key1: [1, -2, 's']  # 值为列表
  child_key2: # 值为列表
    - hello             # 字符串
    - {'a': 1, 'b': 2}  # 值为字典
  child_key3: true      # 布尔值
  child_key4: null      # 空值
```

---

# YAML 踩坑

+ 每个列表项前的 `-` 后面应有一个空格
+ 注意字符串值中若包含特殊字符（如 `:`、`#`、`{`、`}` 等），应使用单引号（或双引号）括起来
+ 注意布尔值应使用小写的 `true` 和 `false`
+ 对下列文件的解析结果是数字还是字符串？
```yaml
# config.yaml
lr1: 1e-5
lr2: 1.0e-5
snr_range1: -5_15
snr_range2: "-5_15"
```
--
count: false

```python
import yaml

with open("config.yaml", "r") as f:
    config = yaml.safe_load(f)
print(f)
# {'lr1': '1e-5', 'lr2': 1e-05, 'snr_range1': -515, 'snr_range2': '-5_15'}
```

---
layout: true
<div class="my-header" style="background-color: #173D6E;">
  <img draggable="false" (dragstart)="false;" class="unselectable" src="/images/remark.js/logo_sjtu.svg"/>
  <span style="color: #FFC000;"><b>Git</b></span>
</div>
<div class="my-watermark" style="z-index: -1;"> </div>
<div class="my-footer">
  <span style="width: 20%; background-color: #3172C9; text-align: center; left: 0px;">张王优</span><!--
  --><span style="width: 60%; background-color: #D47838; text-align: center; left: 20%;">Linux 服务器环境配置和使用技巧</span><!--
  --><span style="width: 19%; background-color: #3172C9; text-align: left; padding-left: 1%; left: 80%;">SJTU AudioCC
</div>
</div>

---
name: git

# Git 常用命令

.normalsize[1.] 克隆在线仓库

```bash
# 基于 SSH 连接，无网络连接问题，但需要配置登录 GitHub 账号的 SSH 密钥
#    参考 `https://docs.github.com/zh/authentication/connecting-to-github-with-ssh`
git clone git@github.com:UserName/RepoName LocalDirectory

# 基于 HTTPS 访问，大概率需要科学上网
git clone https://github.com/UserName/RepoName LocalDirectory
```

.normalsize[2.] 拉取远程仓库的最新代码
```bash
# 拉取 origin 源对应的仓库的 master 分支
git pull origin master

# 要查看可拉取的源仓库信息，可执行以下命令
git remote -v
```

.normalsize[3.] 撤销仓库中某个文件的改动，还原到原始状态
```bash
git checkout path/to/file
```

---

# GitHub 仓库

+ GitHub 是目前最大的.gray[<del>同性交友</del>]开源代码托管平台，拥有海量的开源项目资源
    + 示例仓库：https://github.com/Emrys365/torch_stft

.left-column-44[![:scale 90%](https://raw.githubusercontent.com/Mottie/GitHub-userscripts/master/images/github-download-zip.gif)]


.right-column-55[
![:callout warn, 注意](
.v-loose[
+ 通过 GitHub 仓库页面的 Download 按钮下载 ZIP 压缩包，会导致仓库中的&#lspar;软链接&#rspar;&#lpar;https://gnu-linux.readthedocs.io/zh/latest/Chapter03/00_link.html&#rpar;和 git 版本控制失效
    + ZIP 压缩格式不支持软链接的存储
+ 建议使用 `git clone` 命令克隆仓库
]
)
]

---

# GitHub 镜像源

+ 配置文件： `~/.gitconfig`
```
[url "https://mirror_site_url/"]
        insteadOf = https://github.com/
```
+ 常用镜像源
    + https://githubfast.com
    + https://gitclone.com

![:callout warn, 注意](
  + 镜像站可能存在安全隐患，建议谨慎选择不知名的镜像站
  + 镜像站的更新频率可能滞后于 GitHub 官方仓库
)

---
layout: true
<div class="my-header" style="background-color: #173D6E;">
  <img draggable="false" (dragstart)="false;" class="unselectable" src="/images/remark.js/logo_sjtu.svg"/>
  <span style="color: #FFC000;"><b>SLURM</b></span>
</div>
<div class="my-watermark" style="z-index: -1;"> </div>
<div class="my-footer">
  <span style="width: 20%; background-color: #3172C9; text-align: center; left: 0px;">张王优</span><!--
  --><span style="width: 60%; background-color: #D47838; text-align: center; left: 20%;">Linux 服务器环境配置和使用技巧</span><!--
  --><span style="width: 19%; background-color: #3172C9; text-align: left; padding-left: 1%; left: 80%;">SJTU AudioCC
</div>
</div>

---
name: slurm

# SLURM 系统概览

.left-column-44[.midsize[
+ 全称：Simple Linux Utility for Resource Management
+ 参考资料：
    + 英文：https://slurm.schedmd.com
    + 中文：
      + 翻译版：https://doc.slurm.cn
      + https://hpcde.github.io/cluster-docs/docs/users/slurm/quickstart
      + https://docs.hpc.sjtu.edu.cn/job/
+ 集群（Cluster）：一组相互独立的、通过高速网络互联的计算机，它们作为一个整体被管理，就像一个单一的服务器。
]]

.right-column-55[
<svg width="500" height="500" viewBox="0 0 900 980" xmlns="http://www.w3.org/2000/svg" style="max-width: 700px;">
  <defs>
    <style>
      .box { fill: #fff; stroke: #111; stroke-width: 2.5; rx: 14; ry: 14; }
      .subbox { fill: #fff; stroke: #111; stroke-width: 2; rx: 10; ry: 10; }
      .title { font: 600 22px/1.2 system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans", Arial, sans-serif; fill: #111; text-anchor: middle; }
      .label { font: 400 16px/1.3 system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans", Arial, sans-serif; fill: #111; text-anchor: middle; }
      .mono  { font: 400 14px/1.3 ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace; fill: #111; text-anchor: middle; }
      .small { font: 400 14px/1.3 system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans", Arial, sans-serif; fill: #111; text-anchor: middle; }
      .divider { stroke: #111; stroke-width: 2; stroke-linecap: round; }
      .link { stroke: #111; stroke-width: 2.5; stroke-linecap: round; }
    </style>
  </defs>

  <!-- Client -->
  <rect class="box" x="300" y="40" width="300" height="100"/>
  <text class="title" x="450" y="80">Client</text>
  <text class="mono"  x="450" y="108">(sbatch / squeue / sinfo)</text>

  <!-- Link: Client -> Control Node -->
  <line class="link" x1="450" y1="140" x2="450" y2="170"/>
  <text class="small" x="450" y="165">Network / RPC</text>

  <!-- Control Node -->
  <rect class="box" x="300" y="180" width="300" height="100"/>
  <text class="title" x="450" y="220">Control Node</text>
  <text class="mono"  x="450" y="248">(slurmctld)</text>

  <!-- Link: Control Node -> Database -->
  <line class="link" x1="450" y1="280" x2="450" y2="308"/>

  <!-- Database (accounting) -->
  <!-- <rect class="box" x="320" y="310" width="260" height="70"/>
  <text class="title" x="450" y="345">Database</text>
  <text class="mono"  x="450" y="368">(slurmdbd / SQL)</text> -->

  <!-- Link: Database -> Partitions -->
  <line class="link" x1="450" y1="280" x2="450" y2="410"/>

  <!-- Partitions container -->
  <rect class="box" x="120" y="410" width="660" height="280"/>
  <text class="title" x="450" y="445">Partitions</text>

  <!-- Partition columns guides (optional dashed) -->
  <!-- gpu -->
  <rect class="subbox" x="160" y="470" width="170" height="190"/>
  <text class="label" x="245" y="500">gpu</text>
  <line class="divider" x1="175" y1="515" x2="315" y2="515"/>
  <text class="mono" x="245" y="545">Node A</text>
  <text class="mono" x="245" y="575">Node B</text>
  <text class="mono" x="245" y="605">Node C</text>

  <!-- cpu -->
  <rect class="subbox" x="365" y="470" width="170" height="190"/>
  <text class="label" x="450" y="500">cpu</text>
  <line class="divider" x1="380" y1="515" x2="520" y2="515"/>
  <text class="mono" x="450" y="545">Node D</text>
  <text class="mono" x="450" y="575">Node E</text>
  <text class="mono" x="450" y="605">Node F</text>

  <!-- highmem -->
  <rect class="subbox" x="570" y="470" width="170" height="190"/>
  <text class="label" x="655" y="500">highmem</text>
  <line class="divider" x1="585" y1="515" x2="725" y2="515"/>
  <text class="mono" x="655" y="545">Node G</text>
  <text class="mono" x="655" y="575">Node H</text>
  <text class="mono" x="655" y="605">Node I</text>

  <!-- Link: Partitions -> Disk -->
  <line class="link" x1="450" y1="690" x2="450" y2="740"/>

  <!-- Shared Disk / Filesystem -->
  <rect class="box" x="240" y="740" width="420" height="90"/>
  <text class="title" x="450" y="775">Shared Disk / Filesystem</text>
  <text class="mono"  x="450" y="800">(NFS / Lustre / BeeGFS / GPFS)</text>

  <!-- Footer note -->
  <text class="small" x="450" y="940">Minimal Slurm Architecture: client → controller → accounting → partitions(nodes) → shared storage</text>
</svg>
]

---

# SLURM 与文件系统

+ 共享存储
  + 网络文件系统（Network File System, [NFS](https://nfs.sourceforge.net/)）
     + 允许多台计算机通过**网络**共享文件和目录（受限于网络带宽）
     + 适用于小型集群或对性能要求不高的场景
  + 集群文件系统：同时挂载在多个服务器上实现文件共享
      + [Lustre](https://www.lustre.org)：[开源](https://github.com/lustre/lustre-release)的分布式并行文件系统
          + 优点：可扩展的高性能
          + 缺点：部署和维护复杂，数据可靠性过度依赖硬件
      + [BeeGFS](https://doc.beegfs.io/latest/overview/overview.html)：高性能的分布式文件系统（[代码公开](https://github.com/ThinkParQ/beegfs)）
          + 优点：开放硬件架构下的高性能，相对 Lustre/GPFS 更加灵活易用和更高扩展性
          + 缺点：系统复杂度较高，性能之外的高级存储功能缺失比较多
      + [GPFS (IBM Spectrum® Scale)](https://www.ibm.com/products/spectrum-scale)：企业级分布式文件系统
          + 优点：高性能、高可靠性，适用于大规模数据存储和处理
          + 缺点：商业软件，成本较高


---

# 常用 SLURM 命令

+ 配置文件：`slurm.conf`
+ `sinfo`：查看集群节点状态（所有分区 partition 以及节点 node 的状态）
+ `squeue`：查看当前排队和运行的作业信息
    + `-u username`：查看指定用户的作业信息
    + `-j jobID`：查看指定作业的信息
    + `-l`：显示更详细的信息
    + `-o format`：自定义显示格式（取代 `-l`）
      ```bash
      squeue -u username -o "%.9i %.9P %20j %8T %10M %10l %.5D %18R %18b"
      ```
    + `--start -j jobID`：显示指定作业的预计开始时间
+ `sbatch`：提交批处理作业脚本（非阻塞式）
+ `srun`：交互式运行作业（阻塞式）
+ `salloc`：分配资源以进行交互式作业（任务启动后可使用 `srun` 命令运行程序）
+ `scancel`：取消指定作业
<!-- + `slurm_gpustat`：查看 GPU 使用情况（需集群支持该命令） -->

---

# 常用 SLURM 命令示例

+ 配置文件：`slurm.conf`
+ `sinfo`：查看集群节点状态（所有分区 partition 以及节点 node 的状态）
+ `squeue`：查看当前排队和运行的作业信息
+ `sbatch`：提交批处理作业脚本（非阻塞式）
  + 提交 GPU 任务的示例 .midsize[（申请 1 个节点，每个节点 2 张显卡，内存 30G，--qos qlong 表示任务时间最多为 3 天，--ntasks-per-node 指定并行任务个数）]：

```bash
sbatch -J job_name --qos qlong -p 4090,a10 --gres=gpu:2 -N 1 `\`
    --ntasks-per-node 2 --mem=30G --cpus-per-task 8 `\`
*   ./run.sh --stage 6 --stop_stage 6 --enh_config conf/train.yaml
```
  + 提交 CPU 任务的示例 .midsize[（申请 1 个节点，内存 20G，-t 02:00:00 指定任务时间最多为 2 小时，--cpus-per-task 指定每个任务使用的 CPU 数）]：

```bash
sbatch -t 02:00:00 --qos qnormal -p cpu -N 1 --cpus-per-task=4 --mem=20G `\`
*   ./run.sh --stage 1 --stop_stage 4 --nj 4
```
+ `srun`：交互式运行作业（阻塞式）
<!-- + `salloc`：分配资源以进行交互式作业（任务启动后可使用 `srun` 命令运行程序） -->
<!-- + `scancel`：取消指定作业 -->


---

# 常用 SLURM 命令示例

+ 配置文件：`slurm.conf`
+ `sinfo`：查看集群节点状态（所有分区 partition 以及节点 node 的状态）
+ `squeue`：查看当前排队和运行的作业信息
+ `sbatch`：提交批处理作业脚本（非阻塞式）

.tiny[
```bash
# 排除特定节点（--exclude=xxx,yyy 或 -x xxx）
sbatch -J job_name --qos qlong -p 4090,a10 `--exclude=gpu-a10-04,gpu-4090-02` `\`
    -N 1 --ntasks-per-node 1 --mem=16G --cpus-per-task 4 `\`
    ./run.sh --stage 1 --stop_stage 4 --nj 4

# 指定使用特定节点（--nodelist=xxx 或 -w xxx）
sbatch -J job_name --qos qlong -p 4090,a10 `--nodelist=gpu-4090-01` `\`
    -N 1 --ntasks-per-node 1 --mem=16G --cpus-per-task 4 `\`
    ./run.sh --stage 1 --stop_stage 4 --nj 4

# 等待特定作业结束后再启动（--dependency=afterany:jobID 或 -d afterany:jobID）
#   afterany 表示无论该作业成功或失败，afterok 表示仅在该作业成功结束后才启动
sbatch -J job_name --qos qlong -p 4090,a10 `\`
    `--dependency=afterany:6287` `\`
    -N 1 --ntasks-per-node 1 --mem=16G --cpus-per-task 4 `\`
    ./run.sh --stage 1 --stop_stage 4 --nj 4
```
]

---

# 常用 SLURM 命令

+ 配置文件：`slurm.conf`
+ `sinfo`：查看集群节点状态（所有分区 partition 以及节点 node 的状态）
+ `squeue`：查看当前排队和运行的作业信息
+ `sbatch`：提交批处理作业脚本（非阻塞式）
+ `srun`：交互式运行作业（阻塞式）
  + 适合临时申请少量资源，用于手动调试

```bash
# 提交 GPU 任务
srun --pty --qos qshort -p 4090,a10 --gres=gpu:1 -N 1 `\`
    --ntasks-per-node 1 --mem=16G --cpus-per-task 4 `\`
*   bash -l

# 提交 CPU 任务
srun --pty -t 02:00:00 --qos qnormal -p cpu -N 1 --cpus-per-task=4 --mem=8G `\`
*   bash -l
```

+ `salloc`：分配资源以进行交互式作业（任务启动后可使用 `srun` 命令运行程序）
+ `scancel`：取消指定作业

---

# 常用 SLURM 命令

+ 配置文件：`slurm.conf`
+ `sinfo`：查看集群节点状态（所有分区 partition 以及节点 node 的状态）
+ `squeue`：查看当前排队和运行的作业信息
+ `sbatch`：提交批处理作业脚本（非阻塞式）
+ `srun`：交互式运行作业（阻塞式）
+ `salloc`：分配资源以进行交互式作业（任务启动后可使用 `srun` 命令运行程序）
  + 适合需要反复调试，但不希望频繁排队的场景

```bash
# 分配 GPU 资源
salloc --qos qlong -p 4090,a10 --gres=gpu:2 -N 1 `\`
    --ntasks-per-node 2 --mem=30G --cpus-per-task 8 --qos qlong
# 任务启动后，使用 srun 命令运行程序
*srun ./run.sh

# 分配 CPU 资源
salloc -t 04:00:00 --qos qnormal -p cpu -N 1 --cpus-per-task=8 --mem=20G
# 任务启动后，使用 srun 命令运行程序
*srun ./run.sh
```

---

# 常用 SLURM 命令

+ 配置文件：`slurm.conf`
+ `sinfo`：查看集群节点状态（所有分区 partition 以及节点 node 的状态）
+ `squeue`：查看当前排队和运行的作业信息
+ `sbatch`：提交批处理作业脚本（非阻塞式）
+ `srun`：交互式运行作业（阻塞式）
+ `salloc`：分配资源以进行交互式作业（任务启动后可使用 `srun` 命令运行程序）
+ `scancel`：取消指定作业
  + 取消误提交的作业，或终止运行中的作业

```bash
# 取消指定作业
scancel jobID

# 取消指定用户的所有作业
scancel -u username
```

---
layout: true
<div class="my-header" style="background-color: #173D6E;">
  <img draggable="false" (dragstart)="false;" class="unselectable" src="/images/remark.js/logo_sjtu.svg"/>
  <span style="color: #FFC000;"><b>VSCode</b></span>
</div>
<div class="my-watermark" style="z-index: -1;"> </div>
<div class="my-footer">
  <span style="width: 20%; background-color: #3172C9; text-align: center; left: 0px;">张王优</span><!--
  --><span style="width: 60%; background-color: #D47838; text-align: center; left: 20%;">Linux 服务器环境配置和使用技巧</span><!--
  --><span style="width: 19%; background-color: #3172C9; text-align: left; padding-left: 1%; left: 80%;">SJTU AudioCC
</div>
</div>

---
name: vscode

# VSCode 使用技巧

+ 批量编辑多处文字
    1. 按住 `Alt` 键（macOS 中为 `Option` 键），点选多处文字，创建多个光标
    2. 按住 `Shift + Alt` 键（macOS 中为 `Shift + Option` 键），从当前光标位置开始，向上（或向下）拖动鼠标，创建多行光标
    3. 按住 `Shift + Alt` 键（macOS 中为 `Shift + Option` 键），点选另一行的位置，在当前行与所选行之间创建多行光标
+ 快速移动行
    + 按住 `Alt` 键（macOS 中为 `Option` 键），再按下方向键 `↑` 或 `↓`：上下移动当前行（或当前选中的多行）
+ 将剪贴板内容与当前文件进行比较
    + 按下 `Ctrl + Shift + P`（macOS 中为 `Cmd + Shift + P`），输入 `compare`，找到 `Compare Active File with Clipboard` 并回车
+ 分屏显示多个文件
    + 将外部文件或当前打开的「文件选项卡」，拖拽到编辑区的左侧（或右侧、上侧、下侧），松开后即可分屏显示

---

# VSCode 使用技巧

+ 复制整行
    + 光标点选某一行，按下 `Ctrl + C` 或 `Cmd + C`
+ 快速跳转到指定行
    + 按下 `Ctrl + G`，输入行号并回车
+ 快速注释/取消注释代码
    + `Ctrl + /`（macOS 中为 `Cmd + /`）：支持单行（光标所在行）和选中多行
+ 快速打开最近打开过的文件
    + 按下 `Ctrl + P`（macOS 中为 `Cmd + P`），输入文件名关键字，选择对应文件并回车打开
+ 批量删除行末的空白符
    + 按下 `Ctrl + Shift + P`（macOS 中为 `Cmd + Shift + P`），输入 `trim`，找到 `Trim Trailing Whitespace` 并回车
+ 快速将多行文本转换为单行（用空格分隔）
    + 选中多行文本，按下 `Ctrl + J`（macOS 中也可以用 `Option + J`）

---

# VSCode 使用技巧

+ 搜索和替换
    + 按下 `Ctrl + F`（macOS 中为 `Cmd + F`）：在当前文件中搜索
    + 按下 `Ctrl + H`（macOS 中为 `Cmd + Option + F`）：在当前文件中搜索并替换
    + 按下 `Ctrl + Shift + F`（macOS 中为 `Cmd + Shift + F`）：在整个工作区中搜索
    + 按下 `Ctrl + Shift + H`（macOS 中为 `Cmd + Shift + H`）：在整个工作区中搜索并替换
+ 三种搜索方式
    + 支持区分大小写搜索（点击搜索框右侧的 `Aa` 图标）
    + 支持全字匹配搜索（点击搜索框右侧的 `a̲b̲` 图标）
      + 如 搜索 `cat`，则不会匹配 `catalog` 或 `my_cat`，会匹配 ` cat ` 或 `my-cat`
    + 支持正则表达式搜索（点击搜索框右侧的 `.*` 图标）
      + <span style="color: red;"><b>推荐掌握！</b></span>

---

# VSCode 使用技巧

+ 三种搜索方式
    + 支持区分大小写搜索（点击搜索框右侧的 `Aa` 图标）
    + 支持全字匹配搜索（点击搜索框右侧的 `a̲b̲` 图标）
    + 支持正则表达式搜索（点击搜索框右侧的 `.*` 图标）
      + 参考资料：https://www.runoob.com/regexp/regexp-syntax.html
      + 交互式网站：https://devtoolcafe.com/tools/regex-tester （英文）
      + 交互式网站：https://regex101.com/ （支持[设置界面语言](https://regex101.com/settings)为中文）

<iframe src="https://regex101.com/" width="800px" height="250px" style="border: none; transform: scale(1.0); transform-origin: 0 0;"></iframe>

---

# 正则表达式速记表

<div style="height: 500px; width: 800px; overflow-y: auto;">
<table>
    <thead style="position: sticky; top: 0; color: #000cf6ff;">
        <tr><th>vim</th><th>grep</th><th>sed</th><th>Python - re</th><th>含义</th></tr>           
    </thead>
    <tbody>
        <tr><td>\</td><td>\</td><td>\</td><td>\</td><td>转义符</td></tr><tr><td>.</td><td>.</td><td>.</td><td>.</td><td>单个任意字符</td></tr><tr><td>*</td><td>*</td><td>*</td><td>*</td><td>重复前一个字符0 次或多次</td></tr><tr><td>\?</td><td>\?</td><td>\?</td><td>?</td><td>重复前一个字符 0 次或 1 次）</td></tr><tr><td>\+</td><td>\+</td><td>\+</td><td>+</td><td>重复前一个字符 1 次或多次</td></tr><tr><td>\{n\}</td><td>\{n\}</td><td>\{n\}</td><td>{n}</td><td>重复前一个字符 n 次</td></tr><tr><td>\{n,\}</td><td>\{n,\}</td><td>\{n,\}</td><td>{n,}</td><td>重复前一个字符至少 n 次</td></tr><tr><td>\{,m\}</td><td>\{,m\}</td><td>\{,m\}</td><td>{,m}</td><td>重复前一个字符至多 m 次</td></tr><tr><td>\{n,m\}</td><td>\{n,m\}</td><td>\{n,m\}</td><td>{n,m}</td><td>重复前一个字符 n~m 次</td></tr><tr><td>^</td><td>^</td><td>^</td><td>^</td><td>一行的开头</td></tr><tr><td>$</td><td>$</td><td>$</td><td>$</td><td>一行的结尾</td></tr><tr><td>\s 以及 [[:blank:]]</td><td>\s 以及 [[:blank:]]</td><td>\s 以及 [[:blank:]]</td><td>\s</td><td>单个空白符</td></tr><tr><td>\S</td><td>\S</td><td>\S</td><td>\S</td><td>单个非空白符</td></tr><tr><td>\d 以及 [[:digit:]]</td><td>[0-9] 以及 [[:digit:]]</td><td>[0-9] 以及 [[:digit:]]</td><td>\d</td><td>单个数字（0~9）</td></tr><tr><td>\D 以及 [^0-9]</td><td>[^0-9]</td><td>[^0-9]</td><td>\D 以及 [^0-9]</td><td>单个非数字</td></tr><tr><td>[A-Za-z] 以及 [[:alpha:]]</td><td>[A-Za-z] 以及 [[:alpha:]]</td><td>[A-Za-z] 以及 [[:alpha:]]</td><td>[A-Za-z]</td><td>单个字母</td></tr><tr><td>[0-9A-Za-z] 以及 [[:alnum:]]</td><td>[0-9A-Za-z] 以及 [[:alnum:]]</td><td>[0-9A-Za-z] 以及 [[:alnum:]]</td><td>[0-9A-Za-z]</td><td>单个字母或数字</td></tr><tr><td>\w</td><td>\w</td><td>\w</td><td>\w</td><td>单个字母、数字或下划线</td></tr><tr><td>\W</td><td>\W</td><td>\W</td><td>\W</td><td>单个非字母、数字和下划线的字符</td></tr><tr><td>[[:punct:]]</td><td>[[:punct:]]</td><td>[[:punct:]]</td><td>[-\\[\\]!&quot;#$%&amp;&#x27;()*+,./:;&lt;=&gt;?@\\^_`{|}~]</td><td>单个标点符号</td></tr><tr><td>\< 以及 \></td><td>\< 以及 \></td><td>\< 以及 \></td><td>\b</td><td>单词边界</td></tr><tr><td>[xyz]</td><td>[xyz]</td><td>[xyz]</td><td>[xyz]</td><td>匹配指定范围内的任意一个字符</td></tr><tr><td>[^xyz]</td><td>[^xyz]</td><td>[^xyz]</td><td>[^xyz]</td><td>匹配不属于指定范围的任意一个字符</td></tr><tr><td>\|</td><td>\|</td><td>\|</td><td>|</td><td>匹配该标志符左边或者右边的样式</td></tr><tr><td><span>\(</span>匹配样式\)</td><td>无</td><td><span>\(</span>匹配样式\)</td><td>(匹配样式)</td><td>对匹配进行分组</td></tr><tr><td>\1</td><td>无</td><td>\1</td><td>\1</td><td>第 1 个分组的内容</td></tr>
    </tbody>
</table>
</div>

---

# VSCode 插件推荐

1. **Remote - SSH**
    + 通过 SSH 连接远程服务器，在本地 VSCode 界面中编辑和运行远程服务器上的代码
2. **GitHub Copilot**
    + 基于 AI 的代码补全工具，支持多种编程语言
    + 需注册 GitHub 账号并登录使用（学生可免费申请使用权限）
    + ① 自动补全代码；② 基于当前代码的 AI 问答
3. **audio-preview**
    + ① 播放音频；② 可视化波形和频谱（支持框选放大）
4. **Path Autocomplete**
    + 在编辑区输入路径时，自动补全路径
5. **Code Spell Checker**
    + 拼写检查工具，支持多种语言
    + 支持添加生词到自定义字典

---
layout: true
<div class="my-header" style="background-color: #173D6E;">
  <img draggable="false" (dragstart)="false;" class="unselectable" src="/images/remark.js/logo_sjtu.svg"/>
  <span style="color: #FFC000;"><b>学生福利</b></span>
</div>
<div class="my-watermark" style="z-index: -1;"> </div>
<div class="my-footer">
  <span style="width: 20%; background-color: #3172C9; text-align: center; left: 0px;">张王优</span><!--
  --><span style="width: 60%; background-color: #D47838; text-align: center; left: 20%;">Linux 服务器环境配置和使用技巧</span><!--
  --><span style="width: 19%; background-color: #3172C9; text-align: left; padding-left: 1%; left: 80%;">SJTU AudioCC
</div>
</div>

---
name: student-benefits

# GitHub 学生开发包

![:callout info](
+ 网址：https://education.github.com/pack
  + 用学校邮箱（sjtu.edu.cn）注册/绑定账号，通过学生证认证（每年更新认证？）
  + 可以免费获得哪些福利？（2025 年 11 月）
	  + .red[GitHub Pro] 用户权益（可无限创建私有仓库）
	  + .red[GitHub Copilot] 和相应的 VSCode 插件
	  + Microsoft Azure 云服务器 + $100 credits
	  + Namecheap 的免费域名和 SSL 证书（1 年）、Name.com 的免费域名
	  + 等等
)

---

layout: true
<div class="my-footer">
  <span style="width: 20%; background-color: #3172C9; text-align: center; left: 0px;">张王优</span><!--
  --><span style="width: 60%; background-color: #D47838; text-align: center; left: 20%;">Linux 服务器环境配置和使用技巧</span><!--
  --><span style="width: 19%; background-color: #3172C9; text-align: left; padding-left: 1%; left: 80%;">SJTU AudioCC
</div>

---
class: center, middle

.titlehuge[**感谢观看!**]

.titlehuge[.darkblue[**Q & A**]]
