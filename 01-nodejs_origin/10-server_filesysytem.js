//Node.js 文件系统

// fs 异步的fs.readFile()
// fs 同步的fs.readFileSync()

//# fs.readFile(filename,[encoding],[callback(err,data)])
// var fs = require('fs');
// fs.readFile('content.txt', 'utf-8', function(err, data) {
//     if(err) {
//         console.error(err);
//     } else{
//         console.log(data);
//     }
// });

//fs.readFileSync(filename, [encoding])

//fs.open(path, flags, [mode], [callback(err, fd)])
//flags:
// r ：以读取模式打开文件。
// r+ ：以读写模式打开文件。
// w ：以写入模式打开文件，如果文件不存在则创建。
// w+ ：以读写模式打开文件，如果文件不存在则创建。
// a ：以追加模式打开文件，如果文件不存在则创建。
// a+ ：以读取追加模式打开文件，如果文件不存在则创建

//fs.read(fd, buffer, offset, length, position, [callback(err, bytesRead, buffer)])
// fd: 读取数据并写入buffer指向的缓冲区对象。
// offset: 是buffer的写入偏移量。
// length: 是要从文件中读取的字节数。
// position: 是文件读取的起始位置，如果position的值为null，则会从当前文件指针的位置读取。
// callback:回调函数传递bytesRead和buffer，分别表示读取的字节数和缓冲区对象。
var fs = require('fs');
fs.open('content.txt', 'r', function(err, fd) {
    if(err) {
        console.error(err);
        return;
    }
    var buf = new Buffer(8);
    fs.read(fd, buf, 0, 8, null, function(err, bytesRead, buffer) {
        if(err) {
            console.error(err);
            return;
        }
        console.log('bytesRead: ' + bytesRead);
        console.log(buffer);
    })
});



