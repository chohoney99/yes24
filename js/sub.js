$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query: "시간과 장의사"},
    headers: {Authorization: "KakaoAK d6ea9c3bec21e99e300ae669cdaa3d50"}
})
    .done(function(msg){
        $("#thumbnail").append("<img src='" + msg.documents[0].thumbnail + "'>");
        $("#thumbnail").append("<button>사이즈비교</button>");
        $("#thumbnail").append("<button>공유하기</button>");
        $("").append("<p>" + msg.documents[0].contents + "</p>")
        $(".book1:nth-of-type(3) .book1img").append("<img src='" + msg.documents[0].thumbnail + "'>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query: "적색편이"},
    headers: {Authorization: "KakaoAK d6ea9c3bec21e99e300ae669cdaa3d50"}
})
    .done(function(msg){
        $(".book1:nth-of-type(1) .book1img").append("<img src='" + msg.documents[0].thumbnail + "'>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query: "블루 노트"},
    headers: {Authorization: "KakaoAK d6ea9c3bec21e99e300ae669cdaa3d50"}
})
    .done(function(msg){
        $(".book1:nth-of-type(2) .book1img").append("<img src='" + msg.documents[1].thumbnail + "'>");
    });


$("#bookcontents2 .open").click(function(){
    $(this).hide();
    $("#bookcontents2").css("height", "2410px");
});

$("#bookcontents2 .close").click(function(e){
    $("#bookcontents2 .open").show();
    $("#bookcontents2").css("height", "710px");
});

$(".rvtext1 .open").click(function(){
    $(this).hide();
    $(".rvtext1").css("height", "780px");
});

$(".rvtext1 .close").click(function(){
    $(".rvtext1 .open").show();
    $(".rvtext1").css("height", "240px");
});

$(".rvtext2 .open").click(function(){
    $(this).hide();
    $(".rvtext2").css("height", "440px");
});

$(".rvtext2 .close").click(function(){
    $(".rvtext2 .open").show();
    $(".rvtext2").css("height", "185px");
});

$(".rvtext3 .open").click(function(){
    $(this).hide();
    $(".rvtext3").css("height", "770px");
});

$(".rvtext3 .close").click(function(){
    $(".rvtext3 .open").show();
    $(".rvtext3").css("height", "250px");
});

var nav = $("#nav ul li");
var contents = $("#contentswrap > div");

nav.click(function(){
    var target = $(this);
    var index = target.index();
    var section = centents.eq(index);
    var offset = section.offset().top;

    $("html, body").animate({scrollTop: offset}, 400);
});

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    for (i=0; i<nav.length; i++){
        if(wScroll >= contents.eq(i).offset().top){
            nav.removeClass("active");
            nav.eq(i).addClass("active");
        }
    }
});

var navoffset = $("#navwrap").offset();

$(window).scroll(function(){
    if($(window).scrollTop() > navoffset.top){
        $("#navwrap").addClass("fixed");
    }else{
        $("#navwrap").removeClass("fixed");
    }
});