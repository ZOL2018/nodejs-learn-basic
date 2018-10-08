//Node.js 路由

// http
// var http = require("http");
// var url = require("url");
//
// function start() {
//     function onRequest(request, response) {
//         var pathname = url.parse(request.url).pathname;
//         console.log("Request for " + pathname + " received.");
//         response.writeHead(200, {"Content-Type": "text/plain"});
//         response.write("Hello World");
//         response.end();
//     }
//
//     http.createServer(onRequest).listen(10001);
//     console.log("Server has started.");
// }
//
// exports.start = start;

//使用路由自定义
//router.js
function route(pathname) {
    console.log("About to route a request for " + pathname);
}
exports.route = route;

////组合 router.js http 扩展
//server.js
var http = require("http");
var url = require("url");

function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        route(pathname);
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }
    http.createServer(onRequest).listen(10001);
    console.log("Server has started.");
}
exports.start = start;

//扩展index.js
var server = require("./server");
var router = require("./router");
server.start(router.route);
