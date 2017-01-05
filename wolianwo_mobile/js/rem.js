/**
 * rem 适配函数 页面引入即可
 */
setRem();
window.addEventListener('orientationchange',setRem);/*orientationchange监听手机屏幕横竖屏显示*/
window.addEventListener("resize", setRem);/*这种方法保证浏览器上也支持横竖屏切换*/
function setRem(){
    var html = document.querySelector('html');
    var width = html.getBoundingClientRect().width;
    html.style.fontSize = width / 16 +'px';
}