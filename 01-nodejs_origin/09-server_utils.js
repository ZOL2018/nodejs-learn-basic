//常用工具util

//util.inherits 继承的函数 # 仅仅 继承函数内属性变量
//# util.inherits(constructor, superConstructor)

//# 01
// var util = require('util');
// function Base() {
//     this.name = 'base';
//     this.base = 1991;
//     this.sayHello = function() {
//         console.log('Hello ' + this.name);
//     };
// }
// Base.prototype.showName = function() {
//     console.log(this.name);
// };
// function Sub() {
//     this.name = 'sub';
//     this.base = 1992;
// }
// util.inherits(Sub, Base);
// var objBase = new Base();
// objBase.showName();
// objBase.sayHello();
// console.log(objBase);
// var objSub = new Sub();
// objSub.showName();
// //objSub.sayHello();
// console.log(objSub);

//util.inspect 将任意对象转换为字符串 # 至少1个obj对象
//# util.inspect(object,[showHidden],[depth],[colors])
//# showHidden是一个可选参数，如果值为true，将会输出更多隐藏信息。
//# depth表示最大递归的层数...
//# 02
// var util = require('util');
// function Person() {
//     this.name = 'byvoid';
//     this.toString = function() {
//         return this.name;
//     };
// }
// var obj = new Person();
// console.log(util.inspect(obj));
// console.log(util.inspect(obj, true));

//util.isArray(object)
//# 如果给定的参数 "object" 是一个数组返回true，否则返回false。
//# 03
// var util = require('util');
//
// util.isArray([])
// // true
// util.isArray(new Array)
// // true
// util.isArray({})
// // false

//util.isDate(object)
//# 如果给定的参数 "object" 是一个日期返回true，否则返回false。
//# 04
// var util = require('util');
//
// util.isDate(new Date())
// // true
// util.isDate(Date())
// // false (without 'new' returns a String)
// util.isDate({})
// // false

//util.isError(object)
//# 如果给定的参数 "object" 是一个错误对象返回true，否则返回false。
//# 05
// var util = require('util');
//
// util.isError(new Error())
// // true
// util.isError(new TypeError())
// // true
// util.isError({ name: 'Error', message: 'an error occurred' })
// // false