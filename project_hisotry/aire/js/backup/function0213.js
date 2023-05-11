// header
$(function(){

    var nowIdx = 0;
    var value = [];

    // 1~6 offset top 값 배열 초기화 , 사이즈 조정시마다 오차 발생하여 철회
    // var pageTop = function(){
    //     for(i=0; i<7; i++){
    //         value[i] = $("#wrap").children().eq(i).offset().top;
    //         console.log("value = ",value);
    //     }
    // };

    var $wrap = $("#wrap");
    var pageTop = function(){
        value[0] = $wrap.find("header").offset().top;
        value[1] = $wrap.find("#about").offset().top; 
        value[2] = $wrap.find("#service").offset().top;
        // value[3] = $wrap.find("#number").offset().top;
        value[3] = $wrap.find("#news").offset().top;
        value[4] = $wrap.find("#contact").offset().top;
    };

    $(window).on("load", function(){
        pageTop();
    });
    
    // 창 크기 조절시 1초마다 이벤트 작동 - _.debounce 미작동으로 취소
    $(window).on('resize', _.debounce(function() {
        var check = $(this).scrollTop;
        // console.log("check = ", check);

        pageTop();
      },400));

    

    var $main_home = $("header");
    var $topMnu = $main_home.find(".navMnu>ul>li");
    var $shadow = $main_home.children(".shadow");
    var $guide = $shadow.siblings(".guide");

    $shadow.on("mousemove",function(evt){
        
        var x = evt.pageX;
        var y = evt.pageY;

        $guide.stop().animate({
            left : x,
            top : y
        });
        

    });

    $shadow.on("mouseover",function(evt){
        $guide.css({
            opacity : 1
        });
    });

    $shadow.on("mouseleave", function(){
        $guide.css({
            opacity : 0
        });
    });

    var idxMov = function(){
        $topMnu.eq(nowIdx).addClass("on").siblings().removeClass("on");
        $subList.eq(nowIdx).children("a").addClass("on").parent("li").siblings().children("a").removeClass("on");
        
    };

    // 메뉴 클릭 시 효과 이동
    $topMnu.on("click", function(evt){
        evt.preventDefault();

        nowIdx = $topMnu.index(this);
        idxMov();
        $("html,body").stop().animate({
            scrollTop : value[nowIdx] -69
        },1000);

        // console.log("nowIdx = ", nowIdx);
    });

    var $mnuBar = $main_home.find(".mnuBar");
    var $subMnu = $main_home.find(".sub-wdMnu");
    var $subList = $subMnu.find(".container>ol>li");
    var $mnuExit = $main_home.find(".exit");
    var $shadow = $main_home.find(".shadow");

    // 서브메뉴열기
    $mnuBar.on("click", function(evt){
        evt.stopPropagation();
        $("body, html").addClass("stop");
        $shadow.show();
        $subMnu.addClass("open");
    });
    //서브메뉴 닫기, 그림자 제거
    var subMnu_close = function(){
        $subMnu.removeClass("open");
        $shadow.hide();
        $("body, html").removeClass("stop");
    }
    // 서브메뉴 닫기를 눌렀을 때
    $mnuExit.on("click", function(){
        subMnu_close();
    });
    // 그림자를 눌렀을 때
    $shadow.on("click", function(){
        subMnu_close();
    });

    //키 입력 이벤트
    $(document).keydown(function(evt){
        // esc를 눌렀을 때
        if(evt.keyCode == '27'){
            subMnu_close();
        }
    });

    //서브메뉴 클릭시 효과 이동
    $subList.on("click", function(evt){
        evt.preventDefault();
        
        nowIdx = $subList.index(this);
        idxMov();
        subMnu_close();
        $("html,body").stop().animate({
            scrollTop : value[nowIdx]
        },1000);

    });

    //scroll down 버튼 클릭시
    $main_home.find(".scroll").on("click", function(){
        $("html,body").stop().animate({
            scrollTop : value[1]
        },1000);
    });

    var $Menu = $main_home.find(".mnuWrap");
    var $mnuOpen = $main_home.find(".mnuOpen");

    // 스크롤 이벤트, 탑메뉴 fixed
    $(window).on("scroll",function(){
        var scrollTop = $(this).scrollTop();

        if(scrollTop>$Menu.height()){
            $Menu.children("h1").addClass("effect");
            $Menu.children(".navMnu").addClass("effect");
            $mnuOpen.addClass("effect");
        }else if(scrollTop==0){
            $Menu.children("h1").removeClass("effect");
            $Menu.children(".navMnu").removeClass("effect");
            $mnuOpen.removeClass("effect");
            }
    

        if(scrollTop>=$main_home.height() - $main_home.height()/2 - 70){
            $Menu.children("h1").removeClass("effect");
            $Menu.children(".navMnu").removeClass("effect");
            $mnuOpen.removeClass("effect");
            $Menu.addClass("n-fixed");
            $mnuOpen.addClass("n-fixed");
        }else{
            // $Menu.css({marginTop : 0});
            
            $Menu.removeClass("n-fixed");
            $mnuOpen.removeClass("n-fixed");
        }
        
        var contactEvt = (scrollTop + $(window).height()) - $("footer").offset().top;
        var scrollHeight = $("aside").prop('scrollHeight');
        var height = $("body").height();

        // 스크롤 높이에 따른 클래스 지정
        if(scrollTop>$("#about").offset().top - 71 && scrollTop<$("#service").offset().top - 69) {
            nowIdx=1;
            idxMov();
        }else if(scrollTop>$("#service").offset().top - 71 && scrollTop<$("#news").offset().top - 69){
            nowIdx=2;
            idxMov();
        }else if(scrollTop>$("#news").offset().top -71){
            nowIdx=3;
            idxMov();
        }else{
            nowIdx=0;
            idxMov();
        }

        if($(window).scrollTop()==$(document).height() - $(window).height()){
            nowIdx=4;
            idxMov();   
        }
    });

}) // end of header

// about , service
$(function(){
    
    // auto infinite slides
    var $about = $("#about");
    var $slides = $about.find(".auto-slides");
    var $slideBar = $slides.children("ul");

    let stopAni = false;
    let intervalKey;
    
    var runAni = function(){

        
        intervalKey = setInterval(function(){
            if($(window).width()>360){
                $slideBar.stop().animate({
                    left : -440
                },1000, function(){
                    $slideBar.children("li").eq(0).appendTo($slideBar); 
                    $slideBar.css({left:-220});
                });
            }else{
                $slideBar.stop().animate({
                    left : -720
                },1000, function(){
                    $slideBar.children("li").eq(0).appendTo($slideBar);
                    $slideBar.css({left:-360});
                })
            }
        },1900);
        
    };

    $(window).on("resize, load", function(){
        runAni();
        
    });

    $slides.on("mouseenter", function(){
        clearInterval(intervalKey);
    });
    $slides.on("mouseleave", function(){
        runAni();
    });

    

    var $service = $("#service");
    var $scrnLock = $service.find(".lock");

    var lock = 0;
    var check = false;

    var movEnd = function(){
        check = false;
    }

    // 스크린 잠금 & 해제                               
    $scrnLock.on("click", function(){
        if(check==false){
            check = true;
            if(lock>=1){
                $service.find(".scrn").stop().fadeIn(500);
                lock--;
            }else{
                lock++;
                $service.find(".scrn").stop().fadeOut(500);
            }
           
            check=false;
        }
    });

    // 사이드 탑 버튼
    var $aside = $("aside");

    $(window).on("scroll", function(){
        var scrollTop = $(this).scrollTop();
        
        if(scrollTop>=$about.offset().top){
            $aside.children("p").addClass("on");
        }else{
            $aside.children("p").removeClass("on");
        }
    });

    $aside.children("p").on("click", function(){
        let nowIdx = 0;

        $(".navMnu>ul>li").eq(nowIdx).addClass("on").siblings().removeClass("on");
        $(".sub-wdMnu>.container>ol>li").eq(nowIdx).children("a").addClass("on").parent("li").siblings().removeClass("on");
        
        $("html, body").stop().animate({
            scrollTop : 0
        });
    });

});

// number
$(function(){
    // var $service = $("#service");
    var $number = $("#number");
    var $countNum = $number.find(".block");

    $number.on("inview", function(){
        // 스크롤 최하단 고정포커스
        // var $point = $(document).scrollTop($(document).height());

            $countNum.find("span").each(function(){
                var $this = $(this),
                countTo = $this.attr("data-count");

                $({ countNum : $this.text()}).animate({
                    countNum: countTo
                },
                {
                    duration : 1600,
                    easing : 'linear',
                    step : function(){
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function(){
                        $this.text(this.countNum);
                    }
                })
            });
    }); 

    $(window).on("mousemove", function(evt){
        w = $(this).width();
        h = $(this).height();

        var x = 20 * (Math.ceil((evt.pageX/w)*100)/100);
        var y = 20 * (Math.ceil((evt.pagey/h)*100)/100);

        // $number.css({
        //     "background-position-x" : x ,
        //     "background-position-y" : y + 20
        // })

        // $number.css({
        //     backgroundPositionX : -x, 
        //     backgroundPositionY : -y
        // });
    });
    

});

// 스크롤 이벤트, 탑메뉴 fixed
// $("html body").on("scroll", function(){
//     var scrollTop = $(this).scrollTop();

//     if(scrollTop>=$main_home.find(".title").offset().top){
//         $main_home.find(".mnuBg").slideDown();
        
//         $main_home.find(".mnuWrap").addClass("n-fixed");
//         $main_home.find(".n-fixed").css({
//             marginTop : 0
//         });
//         $main_home.find(".mnuOpen").addClass("n-fixed");
//         $("about").css({
//             marginTop : $main_home.height()
//         });
//     }else{
//         $main_home.find(".mnuWrap").removeClass("n-fixed");
//         $main_home.find("mnuWrap").css({
//             marginTop : -70
//         });
//         $main_home.find(".mnuOpen").removeClass("n-fixed");
//         $main_home.find(".mnuBg").hide();
//     }
// });

// let body = document.createElement("body");

// body.onscroll = function(){
//     let scrollTop = $(this).scrollTop();
    
//     let mnuBg = document.getElementsByClassName(".mnuBg");
//     let mnuWrap = document.getElementsByClassName(".mnuWrap");
//     let mnuOpen = document.getElementsByClassName(".mnuOpen");

//     let title = document.getElementsByClassName(".title");
//     let header = document.createElement("header");

//     const about = document.createElement("about");

//     console.log("작동확인");

//     if(scrollTop>=title.pageYOffset + element.getBoundingClientRect().top){
//         mnuBg.slideDown();
        
//         console.log("조건문 확인");
//         mnuWrap.addClass("n-fixde");
//         mnuOpen.addClass("n-fixed");
        
        
        
//     }
// };









var slides = document.getElementsByClassName("auto-slides");


