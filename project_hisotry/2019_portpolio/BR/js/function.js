$(function(){

    var $main_mnu = $("header>.gnb>.outbox>.m_mnu>li")
    var $sub_window = $("header>.m_gnb");
    var $sub_mnu = $("header>.m_gnb>.wrapbox>.container");
    var $ice_ad1 = $("header>.m_gnb>.wrapbox>.container>.ice_pong>li");
    var stack = 0;

    //상단 메뉴바
    $main_mnu.on("mouseenter", function(){
        stack++;
        $sub_window.stop().slideDown(330);
        $sub_mnu.stop().fadeIn(450);
        $ice_ad1.stop().delay(300).fadeIn(200);
        console.log("stack =", stack);
        $("#ad1>.ijp_ad").stop().animate({
            marginTop : $sub_window.height
        });
    });

    $("header>.main>.container").on("mouseenter", function(){
        stack--;
        // console.log("stack =", stack);
    });

    $main_mnu.on("mouseleave", function(){
        stack--;
        // console.log("stack =", stack);
    });


    $sub_window.on("mouseleave", function(){
        stack--;
        // console.log("stack =", stack);
    });

    $("section").on("mouseover", function(){
        stack--;
        // console.log("stack =", stack);
    });
    setInterval(function(){
        if(stack<=-1){
            $sub_mnu.stop().fadeOut(330);
            $sub_window.stop().slideUp(400);
            $ice_ad1.stop().fadeOut(400);
            stack=0;
        }
    });

    var $pos = $("#ad1>.ijp_ad");
    var gap = $pos.offset().top;
    // console.log("gap =", gap);
    var height = 0;

    //광고 배너 슬라이드업
    $(window).on("scroll", function(){
        
        height = $(window).scrollTop();
        // console.log("height = ", height);

        if(height>gap){
            $("#ad1>.ijp_bnr").stop().slideUp(450);
        }
    });

});

//메인 슬라이드
$(function(){
    
    var $slide = $("#evt_slides");
    var $slides = $slide.find(".slides-wraper");
    var $indicator = $slide.find(".slides-indicator");
    var $move = $slide.find(".slides-move");

    var $scrn = $slides.find("li");
    var $btn = $indicator.find("li");
    var $prev = $move.find(".slides-prev>a");
    var $next = $move.find(".slides-next>a");

    var nowIdx = 0;
    var oldIdx;
    var action = false;

    $scrn.eq(nowIdx).siblings().css({
        opacity:0
    });

    var show = function(){

        action = true;

        if(oldIdx<nowIdx){
            $scrn.eq(oldIdx).stop().animate({
                left: -45.15 + "%" ,
                opacity:0
            });
        }else{
            $scrn.eq(oldIdx).stop().animate({
                left: 45.15 + "%" ,
                opacity:0
            });
        }

        if(nowIdx==0 && oldIdx==8){

        }

        $scrn.eq(nowIdx).stop().animate({
            left:0,
            opacity:1
        },function(){
            action = false;
        });
    }

    var up = function(){
        oldIdx = nowIdx;

        if(nowIdx<8){
            nowIdx++;
        }else{
            nowIdx=0;
        }

        show();
    };

    var down = function(){
        oldIdx = nowIdx;

        if(nowIdx>0){
            nowIdx--;
        }else{
            nowIdx=8;
        }

        console.log("!",nowIdx);

        show();
    };

    var dotMove = function(){
        $btn.eq(nowIdx).addClass("on").siblings().removeClass("on");

    };

    $btn.on("click", function(evt){
        evt.preventDefault();
        oldIdx = nowIdx;
        nowIdx = $btn.index(this);

        if(action==false){
            show();
        }
        dotMove();
        console.log("nowIdx =", nowIdx);
    });

    $prev.on("click", function(evt){
        evt.preventDefault();
        
        if(action==false){
            down();
            console.log("now = ",nowIdx);
            console.log("old = ",oldIdx);
            dotMove();
        }
    });

    $next.on("click", function(evt){
        evt.preventDefault();
        
        if(action==false){
        up();
        console.log("now = ",nowIdx);
        console.log("old = ",oldIdx);
        dotMove();


        }
    });
});

//이벤트 슬라이드
$(function(){
    
    var $evtSlide = $("#br_evt_slides");
    var $evtSlides = $evtSlide.find(".evt_screen");
    var $evtIndigator = $evtSlide.find(".evt_slides_indigator");

    var $page = $evtSlides.find("ul");
    var $evtBtn = $evtIndigator.find("li");

    var nowIdx = 0;

    $evtBtn.on("click", function(evt){
        evt.preventDefault();
        
        nowIdx = $evtBtn.index(this);
        console.log("nowIdx = ", nowIdx);

        $evtBtn.eq(nowIdx).addClass("on").siblings().removeClass("on");

        $page.stop().animate({
            left : -nowIdx * 1200
        },250);
    });

});

//기프트카드 팝업창

$(function(){
    var $bg = $("#br_menu>.container");
    var $touch = $bg.find(".gift");

    var $popBox = $bg.children(".gift_box"); 
    var $shadow = $bg.children(".shadow");

    var $clse = $popBox.find(".clse_btn");


    $touch.on("click", function(evt){
        evt.preventDefault();

        $shadow.stop().show();
        $popBox.stop().fadeIn();
    });

    $clse.on("click", function(evt){
        evt.preventDefault();

        $popBox.stop().hide();
        $shadow.stop().hide();
    });

    $shadow.on("click", function(evt){
        evt.preventDefault();

        $popBox.stop().hide();
        $shadow.stop().hide();
    });
});

//인스타그램 호버
$(function(){
    var $sns = $("#sns");
    var $con1 = $sns.find(".strShake");
    var $con2 = $sns.find(".minticecream");
    var $con3 = $sns.find(".icecreamcake");
    var $con4 = $sns.find(".icepong");

    $con1.on("mouseover", function(){
        $con1.children("a").css({
            display : "block"
        });
    });

    $con1.on("mouseleave", function(){
        $con1.children("a").css({
            display : "none"
        });
    });

    $con2.on("mouseover", function(){
        $con2.children("a").css({
            display : "block"
        });
    });

    $con2.on("mouseleave", function(){
        $con2.children("a").css({
            display : "none"
        });
    });

    $con3.on("mouseover", function(){
        $con3.children("a").css({
            display : "block"
        });
    });

    $con3.on("mouseleave", function(){
        $con3.children("a").css({
            display : "none"
        });
    });

    $con4.on("mouseover", function(){
        $con4.children("a").css({
            display : "block"
        });
    });

    $con4.on("mouseleave", function(){
        $con4.children("a").css({
            display : "none"
        });
    });


});

//패밀리사이트
$(function(){
    var $family = $(".more_lst");
    var $touch = $family.children("p");
    var $lnkList = $family.children("ul");

    $touch.on("click", function(evt){
        evt.preventDefault();

        if($touch.hasClass("clse")){
            $touch.removeClass("clse");
            $lnkList.stop().hide();
        }else{
            $touch.addClass("clse");
            $lnkList.stop().show();
        }
    });

});