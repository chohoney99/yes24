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
        $("#ranking li:nth-of-type(1)").append("<img src='" + msg.documents[0].thumbnail + "'>");
        $("#ranking li:nth-of-type(1)").append("<p>" + msg.documents[0].title + "</p>");
        $("#ranking li:nth-of-type(1)").append("<p>" + msg.documents[0].authors + "</p>");
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