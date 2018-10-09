//Node.js JXcore 打包
//JXcore是一个支持多线程的 Node.js 发行版本，
// 基本不需要对你现有的代码做任何改动就可以直接线程安全地以多线程运行。

//JXcore 安装

//使用jx命令打包以上项目，并指定index.js为Node.js项目的主文件：
$ jx package index.js index

//以上命令执行成功，会生成以下两个文件：
// # index.jxp：这是一个中间件文件，包含了需要编译的完整项目信息。
// # index.jx：这是一个完整包信息的二进制文件，可运行在客户端上。

//Node.js JXcore 官网
http://ww7.jxcore.com/



