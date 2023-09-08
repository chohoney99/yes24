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
    data: {query: "고통에 관하여"},
    async: false,
    headers: {Authorization: "KakaoAK d6ea9c3bec21e99e300ae669cdaa3d50"}
})
    .done(function(msg){
        $("#contents2mainbox").append("<img src='" + msg.documents[0].thumbnail + "'>");
    });