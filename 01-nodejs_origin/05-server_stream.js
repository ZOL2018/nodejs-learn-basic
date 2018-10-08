var http = require('http');
var fs = require('fs')
var zlib = require('zlib');

http.createServer(function (request, response) {

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200,
        {'Content-Type': 'text/plain; charset=utf-8'});

    var data = "";

    // 创建可读流
    var readerStream = fs.createReadStream('input.txt');

// 设置编码为 utf8。
    readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
    readerStream.on('data', function(chunk) {
        data += chunk;
    });

    readerStream.on('end',function(){
        console.log(data);
    });

    readerStream.on('error', function(err){
        console.log(err.stack);
    });

    var data = "basic-node-js";

    // 创建一个可以写入的流，写入到文件 output.txt 中
    var writerStream = fs.createWriteStream('output.txt');

// 使用 utf8 编码写入数据
    writerStream.write(data,'UTF8');

// 标记文件末尾
    writerStream.end();

// 处理流事件 --> data, end, and error
    writerStream.on('finish', function() {
        console.log("complete!");
    });

    writerStream.on('error', function(err){
        console.log(err.stack);
    });

    /**
     * pip 管道流
     */
    // 创建一个可读流
    var readerStream = fs.createReadStream('input.txt');

    // 创建一个可写流
    var writerStream = fs.createWriteStream('output.txt');

    // 管道读写操作
    // 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
    readerStream.pipe(writerStream);
    /**
     * 链式流 压缩 解压缩 # 测试错误！
     */
    // 压缩 input.txt 文件为 input.txt.gz
    // fs.createReadStream('input.txt')
    //     .pipe(zlib.createGzip())
    //     .pipe(fs.createWriteStream('input.txt.gz'));
    // 解压 input.txt.gz 文件为 input.txt
    // fs.createReadStream('input.txt.gz')
    //     .pipe(zlib.createGunzip())
    //     .pipe(fs.createWriteStream('input.txt'));

    // 发送响应数据 "buffer 缓存"
    response.end('stream 流！\n');

}).listen(10001);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:10001/');



