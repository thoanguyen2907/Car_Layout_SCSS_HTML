$(document).ready(function(){
    $("#vehicle__list").mCustomScrollbar({
       theme:"dark"}); 
    function move(value){
      $("#vehicle__list").mCustomScrollbar("scrollTo",value,{
        scrollEasing: "easeOut"
      });
    }
    $(".vehicle-nav ul li a").click(function(){
      if($(this).attr("id")==="cars-nav"){
        move("#cars-sedan")
      } 
      if($(this).attr("id")==="suvs-nav"){
        move("#cars-minivan")
      } 
    });
    let count = "";        
    $("#navbar > a").click(function(){
      if(count===""){
        count = $(this).attr("id");
        $(this).addClass("active"); 
        if(count=== "vehicle__nav"){ //cho hiện ra vehicle__list - animation và sau đó xoá animation 
          $("#vehicle").removeClass("hide__vehicle"); 
          $(".vehicle-nav").addClass("animate__animated animate__fadeInDown"); 
          $("#vehicle__list").addClass("animate__animated animate__fadeInUp"); 
          $("#vehicle__close").addClass("animate__animated animate__zoomIn animate__delay-1s")
          setTimeout(()=>{
            $(".vehicle-nav").removeClass("animate__animated animate__fadeInDown"); 
          $("#vehicle__list").removeClass("animate__animated animate__fadeInUp"); 
          $("#vehicle__close").removeClass("animate__animated animate__zoomIn animate__delay-1s")
          }, 3000)
        }
      } else {
        if(count === $(this).attr("id")){ // nếu click lại id active lần nữa 
          $(this).removeClass("active"); //remove class active 
          count=""; // reset lại biến count 
          $(".vehicle-nav").addClass("animate__animated animate__fadeOutUp");  //ẩn vehicle list và nav 
          $("#vehicle__list").addClass("animate__animated animate__fadeOutDown"); 
          setTimeout(function(){
            $("#vehicle").addClass("hide__vehicle"); //add lại hideclass
            $(".vehicle-nav").removeClass("animate__animated animate__fadeOutUp"); //xoá class hiệu ứng fade 
            $("#vehicle__list").removeClass("animate__animated animate__fadeOutDown"); 
          }, 300)                      
        } else { //nếu click vào ô menu li  khác
          $("#navbar > a").removeClass("active"); //xoá toàn bộ class active trong tất cả thẻ a
          $(this).addClass("active"); //add class active đang click 
          count = $(this).attr("id"); //gắn id cho biến count 
          if(count !== "vehicle__nav"){
            $(".vehicle-nav").addClass("animate__animated animate__fadeOutUp"); 
            $("#vehicle__list").addClass("animate__animated animate__fadeOutDown"); 
            setTimeout(function(){
            $("#vehicle").addClass("hide__vehicle"); 
            $(".vehicle-nav").removeClass("animate__animated animate__fadeOutUp"); 
            $("#vehicle__list").removeClass("animate__animated animate__fadeOutDown");                
          }, 300);
          } else if (count === "vehicle__nav"){
            $("#vehicle").removeClass("hide__vehicle"); 
            $(".vehicle-nav").addClass("animate__animated animate__fadeInDown");     
            $("#vehicle__list").addClass("animate__animated animate__fadeInUp");        
          }
        }
      }
    });
    $("#vehicle__close").click(function(){
      $(".vehicle-nav").addClass("animate__animated animate__fadeOutUp"); 
      $("#vehicle__list").addClass("animate__animated animate__fadeOutDown"); 
      setTimeout(function(){
          $("#vehicle").addClass("hide__vehicle"); 
          $(".vehicle-nav").removeClass("animate__animated animate__fadeOutUp"); 
            $("#vehicle__list").removeClass("animate__animated animate__fadeOutDown"); 
          }, 300);
          $("#navbar > a").removeClass("active"); //remove class active 
          count="";  //reset lại biến count 
    });
    $(".vehicle-product").addClass("animate__animated animated fadeInUp"); 
    $(".carousel-indicators-xs").click(function(){
      $(".carousel-indicators-xs ol").slideToggle(); 
      if($(".carousel-indicators-xs i").hasClass("transform-rotate")){
        $(".carousel-indicators-xs i").removeClass("transform-rotate"); 
      } else {
        $(".carousel-indicators-xs i").addClass("transform-rotate"); 
      }
    }); 

    $(".carousel-indicators-xs ol li").click(function(){
      $('.carousel-indicators-xs-title span').html($(this).html());        
    });

    let counting = 0; 
    $(".carousel-control-prev").click(function(){
      $(".carousel-indicators-config li").removeClass("active"); 
      if(counting== 0){
        counting = 4; 
      } else {
        counting--; 
      }
      $(".carousel-indicators-config li").each(function(i){
        if(i == counting){
           $(this).addClass("active");  
        }
      })
    });
    $(".carousel-control-next").click(function(){
      $(".carousel-indicators-config li").removeClass("active"); 
      if(counting== 4){
        counting = 0; 
      } else {
        counting++; 
      }
      $(".carousel-indicators-config li").each(function(i){
        if(i == counting){
           $(this).addClass("active");  
           $('.carousel-indicators-xs-title span').html($(this).html());   
        }
      });     
    });
    $(".back-to-top").click(function(){
        $("body, html").animate({scrollTop: 0}, 1000)
      }); 
      function collapse(){
        let width = $(window).width(); 
      if(width >= 768){
        $(".collapse-ul").removeClass("collapse"); 
      } else {
        $(".collapse-ul").addClass("collapse"); 
      }
      }
    $(window).resize(function(){
      collapse(); 
    });
    collapse(); 

    $('.slick-item').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        draggable: true,
        touchMove: true, 
      });
});
new WOW().init();
let carouselOl = document.querySelector(".carousel-indicators-config")
let listOfLi = Array.from(carouselOl.getElementsByTagName("li")); 

listOfLi.forEach((liEl, index )=>{
  liEl.addEventListener("click", ()=>{
    let currentLi = document.querySelector(".carousel-indicators-config li.active"); 
    currentLi.className = currentLi.className.replace("active", ""); 
    liEl.className += "active"; 
  })
});