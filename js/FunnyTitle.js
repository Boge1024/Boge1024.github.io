<!--浏览器搞笑标题-->
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/funny.ico");
        document.title = '我已经藏好了~';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = '你终于找到我了！' + ' | ' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 300);
    }
});