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