//author:caibaojian
//website:http://caibaojian.com
//weibo:http:weibo.com/kujian
//这段js的最后面有两个参数记得要设置，一个为设计稿实际宽度，一个为制作稿最大宽度，例如设计稿为750，最大宽度为750，则为(750,750)
!function(e,t){function n(){var n=l.getBoundingClientRect().width;t=t||540,n>t&&(n=t);var i=100*n/e;r.innerHTML="html{font-size:"+i+"px;}"}var i,d=document,o=window,l=d.documentElement,r=document.createElement("style");if(l.firstElementChild)l.firstElementChild.appendChild(r);else{var a=d.createElement("div");a.appendChild(r),d.write(a.innerHTML),a=null}n(),o.addEventListener("resize",function(){clearTimeout(i),i=setTimeout(n,300)},!1),o.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(i),i=setTimeout(n,300))},!1),"complete"===d.readyState?d.body.style.fontSize="16px":d.addEventListener("DOMContentLoaded",function(e){d.body.style.fontSize="16px"},!1)}(750,750);
function b64DecodeUnicode(str) {
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}
function player(playurl){
　　var tag96kaifa='youku';
　　if(playurl.indexOf(tag96kaifa)!=-1){
		var u96kaifa=playurl.substring(playurl.indexOf("id_")+1,playurl.indexOf(".html"));
		re=new RegExp("d_","g");
		var newstart96kaifa=u96kaifa.replace(re,"");
　　}else{
		var u96kaifa=b64DecodeUnicode(playurl).substring(b64DecodeUnicode(playurl).indexOf("id_")+1,b64DecodeUnicode(playurl).indexOf(".html"));
		re=new RegExp("d_","g");
		var newstart96kaifa=u96kaifa.replace(re,"");
	}
document.writeln("<iframe class=\"ifra\" frameborder=\"0\"  allowfullscreen=\"true\"   width=\"100%\" height=\"320\" scrolling=\"no\" src=\"http://player.youku.com/embed/"+newstart96kaifa+"\"></iframe>");
}






