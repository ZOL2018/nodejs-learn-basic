//Node.js 多进程

//node.js 提供进程
// # exec - child_process.exec使用子进程执行命令，缓存子进程的输出，并将子进程的输出以回调函数参数的形式返回。
// # spawn - child_process.spawn使用指定的命令行参数创建新进程。
// # fork - child_process.fork是spawn()的特殊形式，用于在子进程中运行的模块，如fork('./son.js')相当于spawn('node', ['./son.js']) 。与spawn方法不同的是，fork会在父进程与子进程之间，建立一个通信管道，用于进程之间的通信。

// exec() 方法
//child_process.exec(command[, options], callback)
//child_process.exec使用子进程执行命令，缓存子进程的输出，
// 并将子进程的输出以回调函数参数的形式返回。
//实例：
support.js文件代码
console.log("进程 " + process.argv[2] + " 执行。" );

master.js文件代码
const fs = require('fs');
const child_process = require('child_process');

for(var i=0; i<3; i++) {
    var workerProcess = child_process.exec('node support.js '+i,
        function (error, stdout, stderr) {
            if (error) {
                console.log(error.stack);
                console.log('Error code: '+error.code);
                console.log('Signal received: '+error.signal);
            }
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
        });

    workerProcess.on('exit', function (code) {
        console.log('子进程已退出，退出码 '+code);
    });
}

//spawn() 方法
//child_process.spawn(command[, args][, options])
// # child_process.spawn使用指定的命令行参数创建新进程，语法格式如下：
//示例:
support.js文件代码
console.log("进程 " + process.argv[2] + " 执行。" );

master.js文件代码
const fs = require('fs');
const child_process = require('child_process');

for(var i=0; i<3; i++) {
    var workerProcess = child_process.spawn('node', ['support.js', i]);

    workerProcess.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
    });

    workerProcess.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
    });

    workerProcess.on('close', function (code) {
        console.log('子进程已退出，退出码 '+code);
    });
}

//fork 方法
//child_process.fork(modulePath[, args][, options])
// #child_process.fork是spawn()方法的特殊形式，用于创建进程，语法格式如下：
//示例：
support.js文件代码如下所示
console.log("进程 " + process.argv[2] + " 执行。" );

master.js文件代码如下所示
const fs = require('fs');
const child_process = require('child_process');

for(var i=0; i<3; i++) {
    var worker_process = child_process.fork("support.js", [i]);

    worker_process.on('close', function (code) {
        console.log('子进程已退出，退出码 ' + code);
    });
}



