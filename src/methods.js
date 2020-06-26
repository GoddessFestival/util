// 获取计算属性 
// 伪元素不是DOM内容，获取不到
export function getstyle(ele, attr) {
    return ele.currentStyle     //兼容IE8，其他undefined
        ? ele.currentStyle[attr]
        : window.getComputedStyle(ele)[attr];
}


// 重写bind方法 ECMAscript 5.1出现
// 第0个参数 fn； 第1个参数 obj-执行代码的对象环境； 第三个形参 
function bind(fn, _this, ...arg1) {
    return function (...arg2) {
        fn.call(_this, ...arg1, ...arg2)
    }
}