var http = require('http');

http.createServer(function (request, response) {

	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHead(200, 
		{'Content-Type': 'text/plain; charset=utf-8'});
	
	// 缓存buffer 
    var buf = new Buffer(26);
	for (var i = 0 ; i < 26 ; i++) {
	  buf[i] = i + 97;
	}

	//buffer to string
	console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
	console.log( buf.toString('ascii',0,5));   // 输出: abcde
	console.log( buf.toString('utf8',0,5));    // 输出: abcde
	console.log( buf.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde
	
	
	//buffer to json
	var buf1 = new Buffer('this is buffer!');
	var json = buf1.toJSON(buf1);
	console.log(json);
	
	//buffer concat 合并
	var concat_buf = Buffer.concat([buf,buf1]);
	console.log(concat_buf.toString());

	//buffer compare 比较 
	var result = buf.compare(buf1);
	console.log(result + "-1: buf1 在 buf2之前" + "\n"
	+ "0: buf1 与 buf2相同" + "\n"
	+ "1: buf1 在 buf2之后" + "\n");
	
	//buffer copy 拷贝
	//var buf2 = buf2.copy(buf);
	//console.log(buf2);

	//buffer slice 剪裁
	//var buf3 = buf3.slice(0, 2);
	//console.log(buf2);

	//buffer length 长度
	console.log(buf.length);

	// 发送响应数据 "buffer 缓存"
	response.end('buffer 缓存！\n');
}).listen(10001);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:10001/');



