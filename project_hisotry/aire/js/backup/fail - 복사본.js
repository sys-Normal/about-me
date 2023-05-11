// header
$(function(){
    // 창 크기 조절시 1초마다 이벤트 작동 - _.debounce 미작동으로 취소
    $(window).on('resize', _.debounce(function() {
        var check = $(this).scrollTop;
        console.log("check = ", check);

            pageTop();
        console.log(pageTop());
      },400));

    

    var $main_home = $("header");
    var $topMnu = $main_home.find(".navMnu>ul>li");

    var idxMov = function(){
        $topMnu.eq(nowIdx).addClass("on").siblings().removeClass("on");
        $subList.eq(nowIdx).addClass("on").siblings().removeClass("on");
    };

    // 메뉴 클릭 시 효과 이동
    $topMnu.on("click", function(evt){
        evt.preventDefault();

        nowIdx = $topMnu.index(this);
        idxMov();
        $("html,body").stop().animate({
            scrollTop : value[nowIdx]
        },1000);

        console.log("nowIdx = ", nowIdx);
    });

    $mnuBar = $main_home.find(".mnuBar");
    $subMnu = $main_home.find(".sub-wdMnu");
    $subList = $subMnu.find(".container>ol>li");
    $mnuExit = $main_home.find(".exit");
    $shadow = $main_home.find(".shadow");

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
        });
    });

    // 스크롤 이벤트, 탑메뉴 fixed
    $("html body").on("scroll", function(){
        var scrollTop = $(this).scrollTop();

        var cur = 1;
        // if(cur==1){console.log("작동")};

        if(scrollTop>=$main_home.height() - $main_home.height()/2){
            $main_home.find(".mnuBg").slideDown();
            
            $main_home.find(".mnuWrap").addClass("n-fixed");
            $main_home.find(".n-fixed").css({
                marginTop : 0
            });
            $main_home.find(".mnuOpen").addClass("n-fixed");
            $("about").css({
                marginTop : $main_home.height()
            });
        }else{
            $main_home.find(".mnuWrap").removeClass("n-fixed");
            $main_home.find("mnuWrap").css({
                marginTop : -70
            });
            $main_home.find(".mnuOpen").removeClass("n-fixed");
            $main_home.find(".mnuBg").hide();
        }

        // 스크롤 높이에 따른 클래스 지정
        // if(scrollTop>=$("header").offset().top){
        //     nowIdx=0;
        //     console.log("작동0");
        //     if(nowIdx==0){
        //         idxMov();
        //     }

        if(scrollTop>=$("header").offset().top){
            newIdx=1;
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

    InterverKey = setInterval(function(){
        $slideBar.stop().animate({
            left : -440
        },1000, function(){
            $slideBar.children("li").eq(0).appendTo($slideBar);
            $slideBar.css({left:-220});
        });
        
    },3000);

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

    $("html, body").on("scroll", function(){
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
        $(".sub-wdMnu>.container>ol>li").eq(nowIdx).addClass("on").siblings().removeClass("on");
        
        $("html, body").stop().animate({
            scrollTop : 0
        });
    });

});

// number
$(function(){
    var $number = $("#number");
    var $countNum = $number.find(".block");

    $("html, body").on("scroll", function(){
        var $point = $(this).scrollTop();
        
        if($point>=$number.offset().top){

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
                
        }
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


