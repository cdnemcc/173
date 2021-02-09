//--------------------------------------------------------------------------------
// 文件描述：返回顶部脚本 
// 文件作者：zhangqs
// 创建日期：2017-5-19 11:11:43
// 修改记录： 
//--------------------------------------------------------------------------------
window.onload = function () {
 
    //样式控制
    writecss("#_goTop{position: fixed;bottom: 20px;right: 20px;cursor: pointer;}");
 
    //创建元素
    var div = document.createElement("div");
    div.id = "_goTop";
    div.innerHTML = "<img src='https://cdn.jsdelivr.net/gh/cdnemcc/173@292/173/picture/top1808.png'/>";
    document.body.appendChild(div);
 
    //控制显示和隐藏
    var top = document.getElementById("_goTop");
    top.style.display = "none";
    window.onscroll = function () {
        var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrolltop > 300) {
            top.style.display = "block";
        } else {
            top.style.display = "none";
        }
    };
 
    //点击返回顶部
    top.onclick = function () {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    };
};
 
//写入css样式
function writecss(cssText) {
    var style = document.createElement('style'), head = document.head || document.getElementsByTagName('head')[0];
    style.type = 'text/css';
    if (style.styleSheet) {
        var func = function () {
            try {
                style.styleSheet.cssText = cssText;
            } catch (e) {
 
            }
        };
        if (style.styleSheet.disabled) {
            setTimeout(func, 10);
        } else {
            func();
        }
    } else {
        var textNode = document.createTextNode(cssText);
        style.appendChild(textNode);
    }
    head.appendChild(style);
} 