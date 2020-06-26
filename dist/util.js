(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.Util = factory());
}(this, (function () { 'use strict';

    // 获取计算属性 
    // 伪元素不是DOM内容，获取不到
    function getstyle(ele, attr) {
      return ele.currentStyle //兼容IE8，其他undefined
      ? ele.currentStyle[attr] : window.getComputedStyle(ele)[attr];
    } // 重写bind方法 ECMAscript 5.1出现

    // // 获取计算属性
    var utils = {
      getstyle: getstyle
    };

    return utils;

})));
//# sourceMappingURL=util.js.map
