var http = require('http');
var fs = require("fs");

http.createServer(function (request, response) {

	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHead(200, 
		{'Content-Type': 'text/plain; charset=utf-8'});
    // 阻塞 代码
	var data = fs.readFileSync('input.txt');
	console.log("阻塞" + data.toString());
	//非阻塞 代码
	fs.readFile('input.txt', function (err, data) {
		if (err) return console.error(err);
		console.log("非阻塞" + data.toString());
	});
	

	// 发送响应数据 "阻塞 非阻塞 回调函数"
	response.end('阻塞 非阻塞 回调函数\n');
}).listen(10001);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:10001/');