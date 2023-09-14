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
    data: {query: "1%를 읽는 힘"},
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
    data: {query: "도둑맞은 집중력"},
    // async: false,
    headers: {Authorization: "KakaoAK d6ea9c3bec21e99e300ae669cdaa3d50"}
})
    .done(function(msg){
        $("#ranking li:nth-of-type(4) .rankingimg").append("<img src='" + msg.documents[0].thumbnail + "'>");
        $("#ranking li:nth-of-type(4) .rankingtitle").append("<p>" + msg.documents[0].title + "</p>");
        $("#ranking li:nth-of-type(4) .rankingtitle").append("<p>" + msg.documents[0].authors + "</p>");
        $(".recommendlist:nth-of-type(3)").append("<a href='#'><img src='" + msg.documents[0].thumbnail + "'></a>");
        $(".recommendlist:nth-of-type(3)").append("<a href='#'><p>" + msg.documents[0].title + "</p></a>");
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
        $(".recommendlist:nth-of-type(2)").append("<a href='#'><img src='" + msg.documents[0].thumbnail + "'></a>");
        $(".recommendlist:nth-of-type(2)").append("<a href='#'><p>" + msg.documents[0].title + "</p></a>");
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

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query: "6시 20분의 남자"},
    // async: false,
    headers: {Authorization: "KakaoAK d6ea9c3bec21e99e300ae669cdaa3d50"}
})
    .done(function(msg){
        $(".contents3list:nth-of-type(1) li:nth-of-type(2)").append("<img src='" + msg.documents[0].thumbnail + "'>");
        $(".contents3list:nth-of-type(1) li:nth-of-type(2)").append("<p>스릴러 거장의 새로운 대작</p>");
        $(".contents3list:nth-of-type(1) li:nth-of-type(2)").append("<a href='#'><p>" + msg.documents[0].title + "</p></a>");
        $(".contents3list:nth-of-type(1) li:nth-of-type(2)").append("<p>데이비드 발다치 저/허형은 역</p>");
        $(".contents3list:nth-of-type(1) li:nth-of-type(2)").append("<p>16,020원</p>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query: "살아갈 날들을 위한 공부"},
    // async: false,
    headers: {Authorization: "KakaoAK d6ea9c3bec21e99e300ae669cdaa3d50"}
})
    .done(function(msg){
        $(".contents3list:nth-of-type(1) li:nth-of-type(3)").append("<img src='" + msg.documents[0].thumbnail + "'>");
        $(".contents3list:nth-of-type(1) li:nth-of-type(3)").append("<p>중년에 동양 고전을 권하다</p>");
        $(".contents3list:nth-of-type(1) li:nth-of-type(3)").append("<a href='#'><p>" + msg.documents[0].title + "</p></a>");
        $(".contents3list:nth-of-type(1) li:nth-of-type(3)").append("<p>김범준 저 | 빅피시</p>");
        $(".contents3list:nth-of-type(1) li:nth-of-type(3)").append("<p>15,120원</p>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query: "미국엄마와 함께하는 리얼 엄마표 영어"},
    // async: false,
    headers: {Authorization: "KakaoAK d6ea9c3bec21e99e300ae669cdaa3d50"}
})
    .done(function(msg){
        $(".contents3list:nth-of-type(1) li:nth-of-type(4)").append("<img src='" + msg.documents[0].thumbnail + "'>");
        $(".contents3list:nth-of-type(1) li:nth-of-type(4)").append("<p>일상 속 네이티브 영어</p>");
        $(".contents3list:nth-of-type(1) li:nth-of-type(4)").append("<a href='#'><p>" + msg.documents[0].title + "</p></a>");
        $(".contents3list:nth-of-type(1) li:nth-of-type(4)").append("<p>김캐서린(미국엄마) 저 | 노란우산</p>");
        $(".contents3list:nth-of-type(1) li:nth-of-type(4)").append("<p>17,550원</p>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query: "운동의 뇌과학"},
    // async: false,
    headers: {Authorization: "KakaoAK d6ea9c3bec21e99e300ae669cdaa3d50"}
})
    .done(function(msg){
        $(".contents4list:nth-of-type(1) li:nth-of-type(1)").append("<img src='" + msg.documents[0].thumbnail + "'>");
        $(".contents4list:nth-of-type(1) li:nth-of-type(1)").append("<a href='#'><p>" + msg.documents[0].title + "</p></a>");
        $(".contents4list:nth-of-type(1) li:nth-of-type(1)").append("<p>제니퍼 헤이스 저/이영래 역</p>");
        $(".contents4list:nth-of-type(1) li:nth-of-type(1)").append("<p>16,200원</p>");
    });

$.ajax({
method: "GET",
url: "https://dapi.kakao.com/v3/search/book?target=title",
data: {query: "미래의 나를 구하러 갑니다"},
// async: false,
headers: {Authorization: "KakaoAK d6ea9c3bec21e99e300ae669cdaa3d50"}
})
.done(function(msg){
    $(".contents4list:nth-of-type(1) li:nth-of-type(2)").append("<img src='" + msg.documents[0].thumbnail + "'>");
    $(".contents4list:nth-of-type(1) li:nth-of-type(2)").append("<a href='#'><p>" + msg.documents[0].title + "</p></a>");
    $(".contents4list:nth-of-type(1) li:nth-of-type(2)").append("<p>변지영 저 | 더퀘스트</p>");
    $(".contents4list:nth-of-type(1) li:nth-of-type(2)").append("<p>15,120원</p>");
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query: "완벽이 온다"},
    // async: false,
    headers: {Authorization: "KakaoAK d6ea9c3bec21e99e300ae669cdaa3d50"}
})
    .done(function(msg){
        $(".contents4list:nth-of-type(1) li:nth-of-type(3)").append("<img src='" + msg.documents[0].thumbnail + "'>");
        $(".contents4list:nth-of-type(1) li:nth-of-type(3)").append("<a href='#'><p>" + msg.documents[0].title + "</p></a>");
        $(".contents4list:nth-of-type(1) li:nth-of-type(3)").append("<p>이지애 저 | 창비교육</p>");
        $(".contents4list:nth-of-type(1) li:nth-of-type(3)").append("<p>13,050원</p>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query: "진짜 일 학년 시험을 치다!"},
    // async: false,
    headers: {Authorization: "KakaoAK d6ea9c3bec21e99e300ae669cdaa3d50"}
})
    .done(function(msg){
        $(".contents4list:nth-of-type(1) li:nth-of-type(4)").append("<img src='" + msg.documents[0].thumbnail + "'>");
        $(".contents4list:nth-of-type(1) li:nth-of-type(4)").append("<a href='#'><p>" + msg.documents[0].title + "</p></a>");
        $(".contents4list:nth-of-type(1) li:nth-of-type(4)").append("<p>신순재 글/김이조 그림</p>");
        $(".contents4list:nth-of-type(1) li:nth-of-type(4)").append("<p>11,700원</p>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query: "일이란 무엇인가"},
    // async: false,
    headers: {Authorization: "KakaoAK d6ea9c3bec21e99e300ae669cdaa3d50"}
})
    .done(function(msg){
        $("#contents5recent").append("<a href='#'><img src='" + msg.documents[0].thumbnail + "'></a>");
        $("#contents5recent").append("<a href='#'><p>" + msg.documents[0].title + "</p></a>");
    });

// var search;
// search = ["황의 법칙", "세이노의 가르침", "도둑맞은 집중력", "문과 남자의 과학 공부", "사장학개론"];

// for(i=0; i<search.length; i++){
//     $.ajax({
//         method: "GET",
//         url: "https://dapi.kakao.com/v3/search/book?target=title",
//         data: {query: search[i]},
//         // async: false,
//         headers: {Authorization: "KakaoAK d6ea9c3bec21e99e300ae669cdaa3d50"}
//     })
//         .done(function(msg){
//             var recommendlist = document.getElementsByClassName("recommendlist"+i);

//             for(var j=0; j<recommendlist.length; j++){
//                 $(".recommendlist"+i).eq(j).append("<img src='" + msg.document[j].thumbnail + "'/>");
//             }
//         });
// }

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query: "황의 법칙"},
    // async: false,
    headers: {Authorization: "KakaoAK d6ea9c3bec21e99e300ae669cdaa3d50"}
})
    .done(function(msg){
        $(".recommendlist:nth-of-type(1)").append("<a href='#'><img src='" + msg.documents[0].thumbnail + "'></a>");
        $(".recommendlist:nth-of-type(1)").append("<a href='#'><p>" + msg.documents[0].title + "</p></a>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query: "문과 남자의 과학 공부"},
    // async: false,
    headers: {Authorization: "KakaoAK d6ea9c3bec21e99e300ae669cdaa3d50"}
})
    .done(function(msg){
        $(".recommendlist:nth-of-type(4)").append("<a href='#'><img src='" + msg.documents[0].thumbnail + "'></a>");
        $(".recommendlist:nth-of-type(4)").append("<a href='#'><p>" + msg.documents[0].title + "</p></a>");
    });  

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query: "사장학개론"},
    // async: false,
    headers: {Authorization: "KakaoAK d6ea9c3bec21e99e300ae669cdaa3d50"}
})
    .done(function(msg){
        $(".recommendlist:nth-of-type(5)").append("<a href='#'><img src='" + msg.documents[0].thumbnail + "'></a>");
        $(".recommendlist:nth-of-type(5)").append("<a href='#'><p>" + msg.documents[0].title + "</p></a>");
    });  

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query: "트렌드 코리아 2024"},
    // async: false,
    headers: {Authorization: "KakaoAK d6ea9c3bec21e99e300ae669cdaa3d50"}
})
    .done(function(msg){
        $("#contents6img").append("<a href='#'><img src='" + msg.documents[0].thumbnail + "'></a>");
        $("#contents6text").append("<a href='#'><p>" + msg.documents[0].title + "</p></a>");
        $("#contents6text").append("<p class='author'>" + msg.documents[0].authors + "</p>");
    });  