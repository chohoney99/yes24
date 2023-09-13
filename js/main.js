$(".contents1box1 ul li:nth-of-type(1)").hover(function(){
    $(".contents1box1 img:not(:nth-of-type(1))").hide();
    $(".contents1box1 img:nth-of-type(1)").show();
});
$(".contents1box1 ul li:nth-of-type(2)").hover(function(){
    $(".contents1box1 img:not(:nth-of-type(2))").hide();
    $(".contents1box1 img:nth-of-type(2)").show();
});
$(".contents1box1 ul li:nth-of-type(3)").hover(function(){
    $(".contents1box1 img:not(:nth-of-type(3))").hide();
    $(".contents1box1 img:nth-of-type(3)").show();
});
$(".contents1box1 ul li:nth-of-type(4)").hover(function(){
    $(".contents1box1 img:not(:nth-of-type(4))").hide();
    $(".contents1box1 img:nth-of-type(4)").show();
});

$(".contents1box2 ul:nth-of-type(2) li:nth-of-type(1)").hover(function(){
    $(".contents1box2 img:not(:nth-of-type(1))").hide();
    $(".contents1box2 img:nth-of-type(1)").show();
});
$(".contents1box2 ul:nth-of-type(2) li:nth-of-type(2)").hover(function(){
    $(".contents1box2img img:not(:nth-of-type(2))").hide();
    $(".contents1box2img img:nth-of-type(2)").show();
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query: "도시와 그 불확실한 벽"},
    async: false,
    headers: {Authorization: "KakaoAK d6ea9c3bec21e99e300ae669cdaa3d50"}
})
    .done(function(msg){
        $("#contents2mainboxthumb").append("<img src='" + msg.documents[0].thumbnail + "'>");
        $("#contents2mainboxtext p:nth-of-type(2)").append(msg.documents[0].title);
        $("#contents2mainboxpre").append("<img src='" + msg.documents[0].thumbnail + "'>");
        $("#ranking li:nth-of-type(1) .rankingimg").append("<img src='" + msg.documents[0].thumbnail + "'>");
        $("#ranking li:nth-of-type(1) .rankingtitle").append("<p>" + msg.documents[0].title + "</p>");
        $("#ranking li:nth-of-type(1) .rankingtitle").append("<p>" + msg.documents[0].authors + "</p>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query: "최민준의 아들코칭 백과"},
    async: false,
    headers: {Authorization: "KakaoAK d6ea9c3bec21e99e300ae669cdaa3d50"}
})
    .done(function(msg){
        $("#contents2mainboxpre").append("<img src='" + msg.documents[0].thumbnail + "'>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query: "멘탈을 회복하는 연습"},
    async: false,
    headers: {Authorization: "KakaoAK d6ea9c3bec21e99e300ae669cdaa3d50"}
})
    .done(function(msg){
        $("#contents2mainboxpre").append("<img src='" + msg.documents[0].thumbnail + "'>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query: "삶은 예술로 빛난다"},
    async: false,
    headers: {Authorization: "KakaoAK d6ea9c3bec21e99e300ae669cdaa3d50"}
})
    .done(function(msg){
        $("#contents2mainboxpre").append("<img src='" + msg.documents[0].thumbnail + "'>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query: "퓨처 셀프"},
    // async: false,
    headers: {Authorization: "KakaoAK d6ea9c3bec21e99e300ae669cdaa3d50"}
})
    .done(function(msg){
        $("#ranking li:nth-of-type(2) .rankingimg").append("<img src='" + msg.documents[0].thumbnail + "'>");
        $("#ranking li:nth-of-type(2) .rankingtitle").append("<p>" + msg.documents[0].title + "</p>");
        $("#ranking li:nth-of-type(2) .rankingtitle").append("<p>" + msg.documents[0].authors + "</p>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query: "내 집을"},
    // async: false,
    headers: {Authorization: "KakaoAK d6ea9c3bec21e99e300ae669cdaa3d50"}
})
    .done(function(msg){
        console.log(msg);
        $("#ranking li:nth-of-type(3) .rankingimg").append("<img src='" + msg.documents[0].thumbnail + "'>");
        $("#ranking li:nth-of-type(3) .rankingtitle").append("<p>" + msg.documents[0].title + "</p>");
        $("#ranking li:nth-of-type(3) .rankingtitle").append("<p>" + msg.documents[0].authors + "</p>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query: "푸바오, 매일매일 행복해"},
    // async: false,
    headers: {Authorization: "KakaoAK d6ea9c3bec21e99e300ae669cdaa3d50"}
})
    .done(function(msg){
        $("#ranking li:nth-of-type(4) .rankingimg").append("<img src='" + msg.documents[0].thumbnail + "'>");
        $("#ranking li:nth-of-type(4) .rankingtitle").append("<p>" + msg.documents[0].title + "</p>");
        $("#ranking li:nth-of-type(4) .rankingtitle").append("<p>" + msg.documents[0].authors + "</p>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query: "세이노의 가르침"},
    // async: false,
    headers: {Authorization: "KakaoAK d6ea9c3bec21e99e300ae669cdaa3d50"}
})
    .done(function(msg){
        $("#ranking li:nth-of-type(5) .rankingimg").append("<img src='" + msg.documents[0].thumbnail + "'>");
        $("#ranking li:nth-of-type(5) .rankingtitle").append("<p>" + msg.documents[0].title + "</p>");
        $("#ranking li:nth-of-type(5) .rankingtitle").append("<p>" + msg.documents[0].authors + "</p>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query: "리그 오브 레전드"},
    // async: false,
    headers: {Authorization: "KakaoAK d6ea9c3bec21e99e300ae669cdaa3d50"}
})
    .done(function(msg){
        $(".contents3list:nth-of-type(1) li:nth-of-type(1)").append("<img src='" + msg.documents[0].thumbnail + "'>");
        $(".contents3list:nth-of-type(1) li:nth-of-type(1)").append("<p>1위 기업의 성공비결</p>");
        $(".contents3list:nth-of-type(1) li:nth-of-type(1)").append("<a href='#'><p>" + msg.documents[0].title + "</p></a>");
        $(".contents3list:nth-of-type(1) li:nth-of-type(1)").append("<p>오진호 저 | 골든래빗</p>");
        $(".contents3list:nth-of-type(1) li:nth-of-type(1)").append("<p>18,000원</p>");
    });