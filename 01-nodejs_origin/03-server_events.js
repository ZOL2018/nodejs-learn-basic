var http = require('http');
var fs = require("fs");
var events = require('events');

http.createServer(function (request, response) {

	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHead(200,
		{'Content-Type': 'text/plain; charset=utf-8'});
	
	// 创建 eventEmitter 对象
	var eventEmitter = new events.EventEmitter();
	// 创建事件处理程序
	var connectHandler = function connected() {
	   console.log('连接成功。');
	   // 触发 data_received 事件 
	   eventEmitter.emit('data_received');
	}
	// 绑定 connection 事件处理程序
	eventEmitter.on('connection', connectHandler);
	// 使用匿名函数绑定 data_received 事件
	eventEmitter.on('data_received', function(){
	   console.log('数据接收成功。');
	});
	// 触发 connection 事件 
	eventEmitter.emit('connection');
	//原理 
	console.log("创建  new events.EventEmitter()" + "\n" 
		+ "注册1 eventEmitter.on('events_name',var_function_name)" + "\n" 
		+ "注册2 eventEmitter.on('events_name',function(){})" + "\n" 
		+ "触发  eventEmitter.emit('events_name')" + "\n" 
		+ "");
	// eventEmitter.on 
	console.log("eventEmitter.on('events_name',function(){}) 注册可执行多次的事件函数");
	// eventEmitter.once
	console.log("eventEmitter.once('events_name',function(){}) 注册只执行1次的事件函数");
	// 移除已注册 事件
	console.log("eventEmitter.removeListener('events_name', function(){}) 移除已注册事件函数");
	//
	//
	// 发送响应数据 "事件循环"
	response.end('事件循环\n');
}).listen(10001);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:10001/');