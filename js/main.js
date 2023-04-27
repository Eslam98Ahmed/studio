$(window).scroll(function(){
    let wScroll = $(window).scrollTop()
    if(wScroll >= 80){
        $("#main-nav").css("backgroundColor" , "rgba(33, 37, 41, 0.95)")  ;    
    }else{
        $("#main-nav").css("backgroundColor" , "transparent");
    }
})