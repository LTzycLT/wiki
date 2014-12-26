tips = new Array(222);
code = new Array(222);
tips[0] = '查看软件xxx安装内容';
code[0] = 'dpkg -L xxx';
tips[1] = '查找软件库中的软件';
code[1] = 'apt-cache search 正则表达式';
tips[2] = '查找软件库中的软件';
code[2] = 'aptitude search 软件包';
tips[3] = '查找文件属于哪个包';
code[3] = 'dpkg -S filename';
tips[4] = '查找文件属于哪个包';
code[4] = 'apt-file search filename';
tips[5] = '查询软件xxx依赖哪些包';
code[5] = 'apt-cache depends xxx';
tips[6] = '查询软件xxx被哪些包依赖';
code[6] = 'apt-cache rdepends xxx';
tips[7] = '增加一个光盘源';
code[7] = 'sudo apt-cdrom add';
tips[8] = "系统升级";
code[8] = 'sudo apt-get update;sudo apt-get dist-upgrade';
tips[9] = "清除已删除包的残馀配置文件";
code[9] = "dpkg -l |grep ^rc|awk '{print $2}' |sudo xargs dpkg -P";
tips[10] = '编译时缺少h文件的自动处理';
code[10] = 'sudo auto-apt run ./configure';
tips[11] = "查看安装软件时下载包的临时存放目录";
code[11] = "ls /var/cache/apt/archives";
tips[12] = "备份当前系统安装的所有包的列表";
code[12] = "dpkg --get-selections | grep -v deinstall > ~/somefile";
tips[13] = "从备份的安装包的列表文件恢复所有包";
code[13] = "dpkg --set-selections < ~/somefile;sudo dselect";
tips[14] = "清理旧版本的软件缓存";
code[14] = "sudo apt-get autoclean";
tips[15] = "清理所有软件缓存";
code[15] = "sudo apt-get clean";
tips[16] = "删除系统不再使用的孤立软件";
code[16] = "sudo apt-get autoremove";
tips[17] = "查看包在服务器上面的地址";
code[17] = "apt-get -qq --print-uris install ssh | cut -d\\' -f2";
tips[18] = "查看内核";
code[18] = "uname -a";
tips[19] = "查看Ubuntu版本";
code[19] = "cat /etc/issue 或 lsb_release -a";
tips[20] = "查看内核加载的模块";
code[20] = "lsmod";
tips[21] = "查看PCI设备";
code[21] = "lspci";
tips[22] = "查看USB设备";
code[22] = "lsusb -v";
tips[23] = "查看网卡状态";
code[23] = "sudo ethtool eth0";
tips[24] = "查看CPU信息";
code[24] = "cat /proc/cpuinfo";
tips[25] = "显示当前硬件信息";
code[25] = "sudo lshw";
tips[26] = "显示系统运行时间";
code[26] = "uptime";
tips[27] = "查看硬盘的分区";
code[27] = "sudo fdisk -l";
tips[28] = "硬盘分区";
code[28] = "sudo fdisk /dev/sda";
tips[29] = "硬盘格式化";
code[29] = "sudo mkfs.ext3 /dev/sda1";
tips[30] = "硬盘检查(请不要检查已经挂载的分区，否则容易损坏数据)";
code[30] = "sudo fsck /dev/sda1";
tips[31] = "分区挂载";
code[31] = "sudo mount -t 文件系统类型 (-o nls=utf8 或 -o iocharset=utf8) 设备路经 访问路经 ";
tips[32] = "分区卸载";
code[32] = "sudo umount 目录名或设备名";
tips[33] = "查看IDE硬盘信息";
code[33] = "sudo hdparm -i /dev/hda";
tips[34] = "查看STAT硬盘信息 ";
code[34] = "sudo hdparm -I /dev/sda 或 sudo blktool /dev/sda id";
tips[35] = "查看硬盘剩馀空间";
code[35] = "df";
tips[36] = "查看目录占用空间";
code[36] = "du -hs 目录名";
tips[37] = "优盘没法卸载";
code[37] = "sync;fuser -km /media/usbdisk";
tips[38] = "查看硬盘当前读写情况";
code[38] = "sudo iostat -x 2";
tips[39] = "查看当前的内存使用情况";
code[39] = "free";
tips[40] = "动态显示进程执行情况";
code[40] = "top";
tips[41] = "查看当前有哪些进程";
code[41] = "ps -A";
tips[42] = "查看当前进程树";
code[42] = "pstree";
tips[43] = "中止一个进程";
code[43] = "kill 进程号 或 killall 进程名";
tips[44] = "强制中止一个进程";
code[44] = "kill -9 进程号 或 killall -9 进程名";
tips[45] = "图形方式中止一个程序";
code[45] = "xkill 出现骷髅标志的鼠标，点击需要中止的程序即可";
tips[46] = "查看进程打开的文件";
code[46] = "lsof -p";
tips[47] = "显示开启文件abc.txt的进程 ";
code[47] = "lsof abc.txt ";
tips[48] = "显示22端口现在运行什么程序 ";
code[48] = "lsof -i :22 ";
tips[49] = "显示nsd进程现在打开的文件 ";
code[49] = "lsof -c nsd";
tips[50] = "在后台运行程序，退出登录后，并不结束程序 ";
code[50] = "nohup 程序 &";
tips[51] = "详细显示程序的运行信息 ";
code[51] = "strace -f -F -o outfile <cmd>";
tips[52] = "增加系统最大打开文件个数";
code[52] = "ulimit -n 4096 或 echo 4096 > /proc/sys/fs/file-max";
tips[53] = "配置 ADSL ";
code[53] = "sudo pppoeconf";
tips[54] = "ADSL手工拨号";
code[54] = "sudo pon dsl-provider";
tips[55] = "激活 ADSL";
code[55] = "sudo /etc/ppp/pppoe_on_boot";
tips[56] = "断开 ADSL ";
code[56] = "sudo poff";
tips[57] = "查看拨号日志";
code[57] = "sudo plog";
tips[58] = "如何设置动态域名";
code[58] = "w3m -no-cookie -dump 'http://usere:pass@members.3322.org/dyndns/update?system=dyndns&hostname=yourdns.3322.org'";
tips[59] = "根据IP查网卡地址 ";
code[59] = "arping IP地址";
tips[60] = "根据IP查电脑名 ";
code[60] = "nmblookup -A IP地址";
tips[61] = "查看当前IP地址 ";
code[61] = "ifconfig eth0 |awk '/inet/ {split($2,x,\":\");print x[2]}'";
tips[62] = "查看当前外网的IP地址 ";
code[62] = "w3m -no-cookie -dump www.123cha.com|grep -o '[0-9]\\{1,3\\}\\.[0-9]\\{1,3\\}\\.[0-9]\\{1,3\\}\\.[0-9]\\{1,3\\}'";
tips[63] = "查看当前监听80端口的程序 ";
code[63] = "lsof -i :80";
tips[64] = "查看当前网卡的物理地址";
code[64] = "arp -a | awk '{print $4}'";
tips[65] = "同一个网卡增加第二个IP地址 ";
code[65] = "sudo ifconfig eth0:0 1.2.3.4 netmask 255.255.255.0";
tips[66] = "立即让网络支持nat ";
code[66] = "echo 1 | sudo tee /proc/sys/net/ipv4/ip_forward; sudo iptables -t nat -I POSTROUTING -j MASQUERADE ";
tips[67] = "查看路由信息";
code[67] = "netstat -rn 或 sudo route -n";
tips[68] = "手工增加一条路由 ";
code[68] = "sudo route add -net 192.168.0.0 netmask 255.255.255.0 gw 172.16.0.1";
tips[69] = "手工删除一条路由";
code[69] = "sudo route del -net 192.168.0.0 netmask 255.255.255.0 gw 172.16.0.1";
tips[70] = "修改网卡MAC地址的方法 ";
code[70] = "sudo ifconfig eth0 hw ether 00:AA:BB:CC:DD:EE";
tips[71] = "统计当前IP连接的个数 ";
code[71] = "netstat -na|grep ESTABLISHED|awk '{print $5}'|awk -F: '{print $1}'|sort|uniq -c|sort -r -n";
tips[72] = "屏蔽IPV6 ";
code[72] = "echo 'blacklist ipv6' | sudo tee /etc/modprobe.d/blacklist-ipv6";
tips[73] = "察看当前网络连接状况以及程序 ";
code[73] = "sudo netstat -atnp";
tips[74] = "查看ADSL的当前流量";
code[74] = "sudo ethstatus -i ppp0";
tips[75] = "查看域名的注册备案情况";
code[75] = "whois baidu.cn";
tips[76] = "查看到某一个域名的路由情况";
code[76] = "tracepath baidu.cn";
tips[77] = "重新从服务器获得IP地址 ";
code[77] = "sudo dhclient";
tips[78] = "下载网站文档";
code[78] = "wget -r -p -np -k http://www.xxx.com";
tips[79] = "如何5个线程下载";
code[79] = "axel -n 5 http://www.xxx.com/downloadfile.zip";
tips[80] = "添加一个服务";
code[80] = "sudo update-rc.d 服务名 defaults 99";
tips[81] = "删除一个服务 ";
code[81] = "sudo update-rc.d 服务名 remove";
tips[82] = "临时重启一个服务";
code[82] = "/etc/init.d/服务名 restart";
tips[83] = "临时关闭一个服务";
code[83] = "/etc/init.d/服务名 stop";
tips[84] = "临时启动一个服务";
code[84] = "/etc/init.d/服务名 start";
tips[85] = "增加用户";
code[85] = "sudo adduser 用户名";
tips[86] = "删除用户";
code[86] = "sudo deluser 用户名";
tips[87] = "修改当前用户的密码";
code[87] = "passwd";
tips[88] = "修改用户密码";
code[88] = "sudo passwd 用户名";
tips[89] = "修改用户资料";
code[89] = "sudo chfn userid";
tips[90] = "如何禁用某个帐户";
code[90] = "sudo usermod -L 用户名 或 sudo passwd -l 用户名";
tips[91] = "如何启用某个帐户";
code[91] = "sudo usermod -U 用户名 或 sudo passwd -u 用户名";
tips[92] = "增加用户到admin组";
code[92] = "sudo usermod -G admin -a 用户名";
tips[93] = "配置默认Java使用哪个 ";
code[93] = "sudo update-alternatives --config java";
tips[94] = "终端设置代理 ";
code[94] = "export http_proxy=http://xx.xx.xx.xx:xxx";
tips[95] = "修改系统登录信息";
code[95] = "sudo vim /etc/motd";
tips[96] = "使用sun的java编译器";
code[96] = "sudo update-java-alternatives -s java-6-sun";
tips[97] = "切换输入法引擎";
code[97] = "im-switch -c";
tips[98] = "转换文件名由GBK为UTF8 ";
code[98] = "convmv -r -f cp936 -t utf8 --notest --nosmart *";
tips[99] = "转换文件内容由GBK到UTF8 ";
code[99] = "iconv -f gbk -t utf8 $i > newfile";
tips[100] = "转换 mp3 标签编码 ";
code[100] = "sudo apt-get install python-mutagen;find . -iname '*.mp3' -execdir mid3iconv -e GBK {} \\;";
tips[101] = "控制台下显示中文 ";
code[101] = "sudo apt-get install zhcon;zhcon --utf8 --drv=vga";
tips[102] = "lftp 登录远程Windows中文FTP　";
code[102] = "lftp :~>set ftp:charset GBK";
tips[103] = "PDF 文件乱码 ";
code[103] = "sudo apt-get install xpdf-chinese-simplified xpdf-chinese-traditional poppler-data";
tips[104] = "一屏查看文件内容 ";
code[104] = "cat 文件名";
tips[105] = "分页查看文件内容";
code[105] = "more 文件名";
tips[106] = "可控分页查看文件内容";
code[106] = "less 文件名";
tips[107] = "根据字符串匹配来查看文件部分内容";
code[107] = "grep 字符串 文件名";
tips[108] = "显示包含字符串的文件名";
code[108] = "grep -l -r 字符串 路径";
tips[109] = "显示不包含字符串的文件名";
code[109] = "grep -L -r 字符串 路径";
tips[110] = "快速查找某个文件";
code[110] = "find 目录 -name 文件名";
tips[111] = "创建两个空文件";
code[111] = "touch file1 file2";
tips[112] = "递归式创建一些嵌套目录";
code[112] = "mkdir –p /tmp/xxs/dsd/efd";
tips[113] = "递归式删除嵌套目录";
code[113] = "rm –fr /tmp/xxs";
tips[114] = "回当前用户的宿主目录";
code[114] = "cd ~";
tips[115] = "查看当前所在目录的绝对路经";
code[115] = "pwd";
tips[116] = "列出当前目录下的所有文件";
code[116] = "ls -a";
tips[117] = "移动路径下的文件并改名";
code[117] = "mv 路径/文件  /新路径/新文件名";
tips[118] = "复制文件或者目录";
code[118] = "cp -av 原文件或原目录 新文件或新目录";
tips[119] = "查看文件类型";
code[119] = "file filename";
tips[120] = "对比两个文件之间的差异";
code[120] = "diff file1 file2";
tips[121] = "显示xxx文件倒数6行的内容 ";
code[121] = "tail -n 6 xxx";
tips[122] = "不停地显示最新的内容 ";
code[122] = "tail -n 10 -f /var/log/apache2/access.log";
tips[123] = "查看文件第五行到第10行的内容 ";
code[123] = "sed -n '5,10p' /var/log/apache2/access.log";
tips[124] = "查找关于xxx的命令 ";
code[124] = "apropos xxx 或 man -k xxx";
tips[125] = "通过ssh传输文件 ";
code[125] = "scp -rp /path/filename username@remoteIP:/path ";
tips[126] = "把所有文件的后辍由rm改为rmvb ";
code[126] = "rename 's/.rm$/.rmvb/' *";
tips[127] = "把所有文件名中的大写改为小写";
code[127] = "rename 'tr/A-Z/a-z/' *";
tips[128] = "删除特殊文件名 --help.txt 的文件";
code[128] = "rm -- --help.txt 或 rm ./--help.txt";
tips[129] = "查看当前目录的子目录";
code[129] = "ls -d */. 或 echo */.";
tips[130] = "将最近30天访问过的文件移动到上级back目录 ";
code[130] = "find . -type f -atime -30 -exec mv {} ../back \\;";
tips[131] = "显示一小时以内的包含 xxxx 的文件";
code[131] = "find . -type f -mmin -60|xargs -i  grep -l xxxx '{}'";
tips[132] = "显示最近2小时到8小时之内的文件";
code[132] = "find . -mmin +120 -mmin -480 -exec more {} \\;";
tips[133] = "删除修改时间在30天之前的文件 ";
code[133] = "find . -type f -mtime +30 -mtime -3600 -exec rm {} \\;";
tips[134] = "删除访问时间在30天之前的文件 ";
code[134] = "find . -type f -atime +30 -atime -3600 -exec rm {} \\;";
tips[135] = "删除掉guest的以avi或rm结尾的文件";
code[135] = "find . -name '*.avi' -o -name '*.rm' -user 'guest' -exec rm {} \\;";
tips[136] = "删除掉不以java和xml结尾7天没有使用的文件 ";
code[136] = "find . ! -name *.java ! -name '*.xml' -atime +7 -exec rm {} \\;";
tips[137] = "删除所有的 .svn 目录 ";
code[137] = "find . -name .svn -type d -exec rm -fr {} \\;";
tips[138] = "删除所有以“~”结尾的临时文件 ";
code[138] = "find . -name '*~' -exec rm {} \\;";
tips[139] = "统计当前文件个数";
code[139] = "ls .|wc -w";
tips[140] = "统计当前目录个数";
code[140] = "ls -l |grep ^d|wc -l";
tips[141] = "显示当前目录下2006-01-01的文件名 ";
code[141] = "ls -l |grep 2006-01-01 |awk '{print $8}'";
tips[142] = "使用ssh方式同步远程数据到本地目录 ";
code[142] = "rsync -Pa -I --size-only --delete --timeout=300 Remote_IP:/home/ubuntu /backup";
tips[143] = "增加 7Z 压缩软件";
code[143] = "sudo apt-get install p7zip p7zip-full p7zip-rar";
tips[144] = "增加 rar 软件压缩和解压缩支持 ";
code[144] = "sudo apt-get install rar unrar";
tips[145] = "解压缩 xxx.tar.gz ";
code[145] = "tar -zxvf xxx.tar.gz";
tips[146] = "解压缩 xxx.tar.bz2 ";
code[146] = "tar -jxvf xxx.tar.bz2";
tips[147] = "压缩aaa bbb目录为xxx.tar.gz ";
code[147] = "tar -zcvf xxx.tar.gz aaa bbb";
tips[148] = "压缩aaa bbb目录为xxx.tar.bz2 ";
code[148] = "tar -jcvf xxx.tar.bz2 aaa bbb";
tips[149] = "增加 lha 支持 ";
code[149] = "sudo apt-get install lha";
tips[150] = "增加解 cab 文件支持 ";
code[150] = "sudo apt-get install cabextract";
tips[151] = "显示日历";
code[151] = "cal";
tips[152] = "设置日期";
code[152] = "date -s mm/dd/yy";
tips[153] = "设置时间";
code[153] = "date -s HH:MM";
tips[154] = "将时间写入CMOS ";
code[154] = "hwclock --systohc";
tips[155] = "查看CMOS时间 ";
code[155] = "hwclock --show";
tips[156] = "读取CMOS时间 ";
code[156] = "hwclock --hctosys";
tips[157] = "从服务器上同步时间 ";
code[157] = "sudo ntpdate ntp.ubuntu.com";
tips[158] = "设置电脑的时区为上海";
code[158] = "sudo cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime";
tips[159] = "关闭UTC，将当前时间写入CMOS。";
code[159] = "sudo sed -ie 's/UTC=yes/UTC=no/g' /etc/default/rcS;sudo hwclock --systohc";
tips[160] = "修改mysql的root口令 ";
code[160] = "sudo mysqladmin -u root -p password '你的新密码'";
tips[161] = "如何使用命令关闭显示器 ";
code[161] = "xset dpms force off";
tips[162] = "设置CPU的频率 ";
code[162] = "sudo apt-get install cpufrequtils;sudo cpufreq-info ";
tips[163] = "命令关机";
code[163] = "sudo halt";
tips[164] = "现在关机";
code[164] = "sudo shutdown -h now";
tips[165] = "晚上11点自动关机";
code[165] = "sudo shutdown -h 23:00";
tips[166] = "60分钟后关机";
code[166] = "sudo shutdown -h +60";
tips[167] = "命令重启电脑";
code[167] = "sudo reboot";
tips[168] = "现在重启电脑";
code[168] = "sudo shutdown -r now";
tips[169] = "关闭笔记本的触摸板 ";
code[169] = "synclient touchpadoff=1";
tips[170] = "开启笔记本的触摸板";
code[170] = "synclient touchpadoff=0";
tips[171] = "统计每个单词的出现频率并排序 ";
code[171] = "awk '{arr[$1]+=1 }END{for(i in arr){print arr[i]\"\\t\"i}}' FILE_NAME | sort -rn";
tips[172] = "统计80端口的连接并排序 ";
code[172] = "netstat -na|grep :80|awk '{print $5}'|awk -F: '{print $1}'|sort|uniq -c|sort -r -n";
tips[173] = "把终端加到右键菜单";
code[173] = "sudo apt-get install nautilus-open-terminal ";
tips[174] = "如何删除Totem电影播放机的播放历史记录 ";
code[174] = "rm ~/.recently-used";
tips[175] = "vim 如何显示彩色字符 ";
code[175] = "sudo cp /usr/share/vim/vimcurrent/vimrc_example.vim /usr/share/vim/vimrc";
tips[176] = "让 vim 直接支持编辑 .gz 文件 ";
code[176] = "sudo apt-get install vim-full";
tips[177] = "vim 如何显示行号";
code[177] = ":set number";
tips[178] = "查看在会话设置的启动程序";
code[178] = "ls ~/.config/autostart";
tips[179] = "提高wine的反应速度 ";
code[179] = "sudo sed -ie '/GBK/,/^}/d' /usr/share/X11/locale/zh_CN.UTF-8/XLC_LOCALE";
tips[180] = "制作ISO文件";
code[180] = "mkisofs -o test.iso -Jrv -V test_disk /home/carla/";
tips[181] = "延迟10秒抓图";
code[181] = "gnome-screenshot -d 10";
tips[182] = "延迟5秒抓当前激活窗口";
code[182] = "gnome-screenshot -w -d 5";
tips[183] = "如何命令行刻录";
code[183] = "cdrecord -scanbus;cdrecord -v -eject speed=8 dev=1,1,0 test.iso";
tips[184] = "回收站在哪里";
code[184] = "~/.local/share/Trash/";
tips[185] = "默认打开方式的配置文件在哪里";
code[185] = "~/.local/share/applications/mimeapps.list";
tips[186] = "如何查看HTTP头";
code[186] = "w3m -dump_head http://www.xxx.com";
tips[187] = "连续监视内存使用情况";
code[187] = "watch  -d free";
tips[188] = "如何切换到root帐号";
code[188] = "sudo -Hs";
tips[189] = "只读挂载ntfs分区";
code[189] = "sudo mount -t ntfs -o nls=utf8,umask=0 /dev/sdb1 /mnt/c";
tips[190] = "可写挂载ntfs分区";
code[190] = "sudo mount -t ntfs-3g -o locale=zh_CN.utf8,umask=0 /dev/sdb1 /mnt/c";
tips[191] = "挂载fat32分区";
code[191] = "sudo mount -t vfat -o iocharset=utf8,umask=0 /dev/sda1 /mnt/c";
tips[192] = "挂载共享文件";
code[192] = "sudo mount -t smbfs -o  username=xxx,password=xxx,iocharset=utf8 //192.168.1.1/share /mnt/share";
tips[193] = "挂载ISO文件";
code[193] = "sudo mount -t iso9660 -o loop,utf8 xxx.iso /mnt/iso";
tips[194] = "带行号显示文件的内容";
code[194] = "nl 文件名";
tips[195] = "批量将rmvb转为avi";
code[195] = "for i in *; do mencoder -oac mp3lame -lameopts vbr=3 -ovc xvid -xvidencopts fixed_quant=4 -of avi $i -o `echo $i | sed -e 's/rmvb$/avi/'`; done";
tips[196] = "批量将svg转为png";
code[196] = "for i in *; do inkscape $i --export-png=`echo $i | sed -e 's/svg$/png/'`; done";
tips[197] = "批量缩小图片到30%";
code[197] = "for i in *; do convert -resize 30%x30% $1 sm-$1; done";
tips[198] = "批量转换jpg到png";
code[198] = "for i in *; do convert $i `echo $i | sed -e 's/jpg$/png/'`; done";
tips[199] = "获取jpg的扩展信息(Exif)";
code[199] = "identify -verbose xxx.jpg";
tips[200] = "查看当前系统所有的监听端口";
code[200] = "nc -zv localhost 1-65535";
tips[201] = "去掉文件中的^M";
code[201] = "cat filename | tr -d \"^M\" > newfile";
tips[202] = "去掉文件中的^M";
code[202] = "sed -e \"s/^M//g\" filename > newfile";
tips[203] = "转换bin/cue到iso文件";
code[203] = "sudo apt-get install bchunk;bchunk image.bin image.cue image";
tips[204] = "转换目录到iso文件";
code[204] = "mkisofs dirname -o isofile.iso";
tips[205] = "转换CD到iso文件";
code[205] = "dd if=/dev/cdrom of=isofile.iso";
tips[206] = "ape转换为flac";
code[206] = "sudo apt-get install flac shntool;shntool split -t \"%n.%p-%t\" -f example_UTF-8.cue -o flac example.ape -d flacOutputDir";
tips[207] = "ape转换为mp3";
code[207] = "sudo apt-get install flac shntool lame;shntool split -t \"%n.%p-%t\" -f example_UTF-8.cue -o 'cust ext=mp3 lame --r3mix -b 320 --quiet - %f' example.ape -d mp3OutputDir";
tips[208] = "检查本地是否存在安全隐患";
code[208] = "sudo apt-get install rkhunter;rkhunter --checkall";
tips[209] = "如何安装杀毒软件";
code[209] = "sudo apt-get install clamav;clamscan -r ~/";
tips[210] = "查看网络连接状态";
code[210] = "netstat -n | awk '/^tcp/ {++S[$NF]} END {for(a in S) print a, S[a]}'";
tips[211] = "统计程序的内存耗用";
code[211] = "ps -eo fname,rss|awk '{arr[$1]+=$2} END {for (i in arr) {print i,arr[i]}}'|sort -k2 -nr";
tips[212] = "显示当前内存大小";
code[212] = "free -m |grep \"Mem\" | awk '{print $2}'";
tips[213] = "按内存从大到小排列进程";
code[213] = "ps -eo \"%C  : %p : %z : %a\"|sort -k5 -nr";
tips[214] = "按cpu利用率从大到小排列进程";
code[214] = "ps -eo \"%C  : %p : %z : %a\"|sort  -nr";
tips[215] = "统计当前目录下所有jpg文件的尺寸";
code[215] = "find . -name *.jpg -exec wc -c {} \\;|awk '{print $1}'|awk '{a+=$1}END{print a}'";
tips[216] = "清除僵死进程";
code[216] = "ps -eal | awk '{ if ($2 == \"Z\") {print $4}}' | sudo kill -9";
tips[217] = "CD 抓轨为 mp3 (有损)";
code[217] = "sudo apt-get install abcde;abcde -o mp3 -b";
tips[218] = "CD 抓轨为 Flac (无损)";
code[218] = "sudo apt-get install abcde;abcde -o flac -b";
tips[219] = "显示系统安装包的统计信息";
code[219] = "apt-cache stats";
tips[220] = "显示系统全部可用包的名称";
code[220] = "apt-cache pkgnames";
tips[221] = "显示包的信息";
code[221] = "apt-cache show k3b";



index = Math.floor(Math.random() * tips.length);
document.write("&nbsp;"+tips[index]+':&nbsp;&nbsp;<code>'+code[index]+'</code>');

