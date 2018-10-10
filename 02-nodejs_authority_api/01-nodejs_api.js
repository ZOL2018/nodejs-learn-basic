// /Node.js 断言测试
// # 单元测试，通过 require('assert') 可以使用这个模块


// /Node.js 事件
// # Node里很多对象会分发事件：
// 每次有连接的时候net.Server会分发事件，
// 当文件打开的时候fs.readStream会分发事件。
// 所有能分发事件的对象都是 events.EventEmitter的实例。
// 通过require("events");能访问这个模块

// /Node.js Punycode
// #主要用于把域名从地方语言所采用的Unicode编码转换成为可用于DNS系统的编码
// 使用require('punycode')来访问。
// (要在其他Node.js版本中访问，先用npm来punycode安装)

// /Node.js Buffer
// #

// /Node.js 文件系统
// # Node.js文件系统模块是一个封装了标准的POSIX文件I/O操作的集合。
// 通过require('fs')使用这个模块，其中所有的方法都有同步和异步两种模式
// # 异步方法最后一个参数都是回调函数
// # 同步操作的时候，任意的异常都立即抛出，可以用try/catch来处理异常

// /Node.js Query Strings
// #const querystring = require('querystring');

//querystring.stringify(obj[, sep][, eq][, options])
//将一个对象序列化化为一个query string

// /querystring.parse(str[, sep][, eq][, options])
//该方法可以将query string反序列化为对象。

// /querystring.escape
// escape函数供querystring.stringify使用，必要时，可以重写

// /querystring.unescape
// unescape函数供querystring.parse使用。必要时，可以重写。
// 首先会尝试用decodeURIComponent，如果失败，会回退，不会抛出格式不正确的URLs。

// /Node.js C/C++ 插件
// # 难！！！

// /Node.js 逐行读取
// # 通过 require('readline')，你可以使用这个模块。
// 逐行读取（Readline）可以逐行读取流（比如process.stdin）。

...

//  /子进程：
// # Node.js是基于单线程模型架构的，它能够拥有高效的CPU利用率，
// 却限制了多个核心CPU的使用，为此，Node.js提供了child_process 模块
// 以通过多线程来实现对多核CPU的使用。

// /Node.js REPL
// # REPL即Node自带的交互式解释器，它可以实现如下的任务：
// 读取（Read）- 可以读取用户的输入，解析输入的Javascript数据结构并存储在内存中。
// 执行（Eval）- 可以执行输入的Javascript数据结构。
// 打印（Print）- 打印输出结果。
// 循环（Loop）- 对上述的步骤进行循环，如果需要退出，则用户需要两次按下ctrl-c按钮。

// /Node.js HTTP
// # 如果要在Node.js中使用HTTP服务器或客户端功能，则必须调用require('http')。

// /Node.js 集群
// # 单个Node.js实例在单线程中运行，在某些情况下，它可能出现负载，
// 因此为了能够更好的利用多核系统的能力，
// 你可以使用Node.js内置的集群（cluster）功能来处理负载。
// 在集群模块里很容易就能创建一个共享所有服务器接口的进程。
var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    // Fork workers.
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', function(worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
    });
} else {
    // Workers can share any TCP connection
    // In this case its a HTTP server
    http.createServer(function(req, res) {
        res.writeHead(200);
        res.end("hello world\n");
    }).listen(8000);
}

// /Node.js Smalloc
// # 通过简单的内存分配器（处理扩展原始内存的分配）支持的缓存

// /Node.js HTTPS
// # HTTPS是什么？HTTPS是基于TLS/SSL的HTTP协议，
// 在Node.js里它可以作为单独的模块来实现

// /Node.js 控制台
// # Node.js的console模块提供了一个简单的调试控制台。
// Node.js控制台的作用是可以将输出字符打印到stdout（标准输出）
// 和stderr（标准错误）。
// 类似于大部分浏览器提供的console对象函数，Node也是输出到stdout和 stderr。
// 如果输出目标是终端或文件的时候，
// console函数是同步的（这是为了防止意外的退出而导致数据丢失），
// 输出是管道的时候是异步的（防止阻塞时间太长）。
// # stdout是非阻塞的，而stderr是阻塞的

// /Node.js 模块
// #Node.js有简单的模块加载系统。
// 在Node.js模块系统中，每个文件都可以被当作单独的模块

// /Node.js 加密
// # Node.js加密模块通过使用require('crypto')来访问。
// Node.js加密模块提供了HTTP或HTTPS连接过程中封装安全凭证的方法。
// Node.js加密模块还提供了OpenSSL的哈希，hmac、加密（cipher）、
// 解密（decipher）、签名（sign）和验证（verify）方法的封装。


// /Node.js 流
// #面向流消费者的API
// 流可以是可读（Readable），可写（Writable），
// 或者是可读可写的（Duplex，双工）。
// 所有的流都是事件分发器（EventEmitters），
// 但是也有自己的方法和属性，这取决于他它们是可读（Readable），
// 可写（Writable），或者兼具两者（Duplex，双工）的。

// /Node.js 网络
// # net模块提供了异步网络封装，
// 该Node.js模块包含了创建服务器/客户端的方法（调用 streams），
// 你可以通过调用 require('net') 包含这个模块，

// /Node.js 调试器
// #V8提供了强大的调试工具，
// 可以通过TCP protocol从外部访问。
// Node内置这个调试工具客户端。
// 使用这个调试器的方法是，
// 以debug参数启动Node.js，
// 将会出现提示，指示调试器成功启动

// /Node.js 字符串解码器
// #Node.js字符串解码器（string_decoder）模块的使用是
// 通过require('string_decoder')实现的。
// Node.js字符串解码器（string_decoder）用于将缓存（buffer）解码为字符串。
// 这是buffer.toString()的简单接口，提供了utf8支持

// /Node.js 系统
// #Node.js系统（OS）模块提供一些与基本的操作系统有关的函数。
// 使用require('os')访问这个模块

// /Node.js DNS
// #通过调用require('dns')来访问DNS模块

// /Node.js 定时器
// #Node.js定时器模块提供了全局API，用于在以后的某个时间段调用函数。
// 所有的定时器函数都是全局的。不需要通过require()就可以访问。

// /Node.js 路径
// #Node.js路径（path）模块包含一系列用于处理和转换文件路径的工具集。
// 基本所有的反复都仅对字符串转换。文件系统不会检查路径是否有效。
// 你可以通过require('path')来访问这个模块

// /Node.js 域
// #Node.js域包含了能把不同的IO操作看成单独组的方法。
// 如果任何一个注册到域的事件或者回调触发error事件，
// 或者抛出一个异常，则域就会接收到通知，
// 而不是在process.on('uncaughtException')处理程序中丢失错误的上下文，
// 也不会使程序立即以错误代码退出

// /Node.js TLS/SSL
// #Node.js可以使用require('tls')来访问TLS/SSL模块

// /Node.js 进程
// #

// /Node.js TTY
// #Node.js的tty模块包含tty.ReadStream和tty.WriteStream类，
// 多数情况下，你不必直接使用这个模块

// /Node.js UDP/Datagram
// #Node.js的dgram模块提供了UDP数据报套接字的实现。
// 使用数据报文sockets(Datagram sockets)的方式是调用require('dgram')

// /Node.js URL
// #Node.js的URL模块提供了用于分析和解析URL的实用程序。
// 可以调用require('url')来访问

// /Node.js 实用工具
// #本节介绍Node.js的'util'模块中的函数的使用，
// 通过require('util')访问该模块

// /Node.js 虚拟机
// #Node.js的虚拟机（VM）模块，
// 该模块提供了用于在V8虚拟机上下文中编译和运行代码的API。
// 可以通过以下方法访问该模块：
// var vm = require('vm');

// /Node.js ZLIB
// #ZLIB模块的使用，你可以通过以下方式访问这个模块：
// var zlib = require('zlib');
// 这个模块提供了对Gzip/Gunzip, Deflate/Inflate,
// 和 DeflateRaw/InflateRaw类的绑定。
// 每个类都有相同的参数和可读/写的流。

// /
// #

// /
// #

// /
// #

// /
// #


