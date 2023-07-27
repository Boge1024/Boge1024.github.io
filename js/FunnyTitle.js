<!--浏览器搞笑标题-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         // $('[rel="icon"]').attr('href', "/img/trhx2.png");
         document.title = '我已经藏好了~';
         clearTimeout(titleTime);
     }
     else {
         // $('[rel="icon"]').attr('href', "/img/trhx2.png");
         document.title = OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });