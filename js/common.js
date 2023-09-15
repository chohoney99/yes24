$(".searchbar").focusin(function(){
    $(this).val("");
}).focusout(function(){
    $(this).val(`삼프로 김동환 "부의 새 물줄기를 설명한 책"`);
});


$(".mypage").mouseover(function(){
    $(".mypagebox").show();
});
$(".mypagebox").mouseout(function(){
    $(this).hide();
});

$("#quick").mouseover(function(){
    $("#mainlist").show();
});
$("#mainlist").mouseout(function(){
    $(this).hide();
});
$("#quick").mouseout(function(){
    $("#mainlist").hide();
});

$("#mainlist li").mouseover(function(){
    $(this).children(".mainlistbox").show();
});
$("#mainlist li").mouseout(function(){
    $(this).children(".mainlistbox").hide();
});

let i=0;
function next(){
    i++;
    if(i > $("#bannerlist li:last").index()){
        i=0;
    }
    $("#bannerlist li").eq(i).show();
    $("#bannerlist li").eq(i-1).hide();
}
$("#buttonbox .next").click(function(){
    next();
});

let j=5;
function prev(){
    j--;
    if(j < 0){
        j=5;
    }
    $("#bannerlist li").eq(j).stop().show();
    $("#bannerlist li").eq(j-4).stop().hide();
}
$("#buttonbox .prev").click(function(){
    prev();
});

$("#contents1nav li:nth-of-type(1)").mouseover(function(){
    $(".contents1box1").show();
    $(".contents1box2").hide();
});
$("#contents1nav li:nth-of-type(2)").mouseover(function(){
    $(".contents1box2").show();
    $(".contents1box1").hide();
});