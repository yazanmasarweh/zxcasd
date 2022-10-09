$(".btn-toggle-side").click(function () { 
    if(!$(this).hasClass("active")){
        $(this).addClass("active").parent().css("width", "calc(100% - var(--widthAside)").css("margin-right" , "var(--widthAside)"); 
        animatedLaunch();
    }else{
        $(this).removeClass("active").parent().css("width", "100% ").css("margin-right" , "0px"); 
        animatedShowdown();
    }
});

// function animate header in aside 
function animatedLaunch(){
    $(".offcanvas-header > span").addClass("showAnimate"); 
    $(".circle-hide").addClass("showCircal"); 
    $(".offcanvas-title").addClass("showCircal"); 
}
function animatedShowdown(){
    $(".offcanvas-header > span").removeClass("showAnimate"); 
    $(".circle-hide").removeClass("showCircal"); 
    $(".offcanvas-title").removeClass("showCircal"); 
}
// function hover to body menu
$(".menu li").hover(function () {     
       $(this).addClass("active").parent().addClass("showBg");  
    }, function () {
       $(this).removeClass("active").parent().removeClass("showBg");
    }
);
//put bg-img to .main-content
$(document).ready(function(){
    $(".main-content").css("background-image" , "url("+ $(".main-content").data('img') + " )");
});
//launch animate home
addEventListener("load" , function(){
    this.setTimeout(launchanimate , 2000);
    function launchanimate(){
       $(".body-content").addClass("active"); 
    }
    
})