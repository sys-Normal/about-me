$(function(){

    var $main_mnu = $("header>.main_mnu>.container>ul>li");
    var $sub_mnu= $("header>.main_mnu>.container>ul>li>ol>li");
    var Idx = 0;
    
    //메인 메뉴
    $main_mnu.on("mouseenter", function(){
        Idx = $main_mnu.index(this);
        
        $sub_mnu.eq(Idx).stop().slideDown();
    });

    $main_mnu.on("mouseleave", function(){
        
        $sub_mnu.eq(Idx).stop().slideUp();
    });
    
    $sub_mnu.children().on("mouseenter", function(){
        $(this).addClass("on");

    });

    $sub_mnu.children().on("mouseout", function(){
        $(this).removeClass("on");

    });

    var $srch_form = $("header>.search>.container>form");
    var $srch_tel = $("header>.search>.container>p");
    var $top_mnu = $("#top_mnu");
    var $main_frame = $(".pc_mnu");

    //탑 메뉴 반응형
    /*
    setInterval(function(){
        if($(window).width()<768){
            $top_mnu.stop().hide();
            $main_frame.stop().hide();
            $srch_tel.stop().hide();
            $srch_form.stop().hide();

            // $("header>.search>.container").css({
            //     "width" : "100%"
            // });

            // $("header>.search>.container>h1").css({
            //     "left" : "50%",
            //     "top" : 0,
            //     marginTop : 16,
            //     marginLeft : -94
            // });        
            
            // $(".main_mnu").css({

            // });

        }else{
            $top_mnu.stop().show();
            $main_frame.stop().show();
            $srch_tel.stop().show();
            $srch_form.stop().show();

            // $("header>.search>.container").css({
            //     "width" : 1100
            // });

            // $("header>.search>.container>h1").css({
            //     "left" : 0,
            //     "top" : "50%",
            //     marginTop : -16,
            //     marginLeft : 0
            // });   
        }
    });
    */
        // 메인 스크린

        var $main_scrn = $("#main_scrn");

        var $cont_lnk = $main_scrn.find(".contbox1");

        var $mnu1 = $main_scrn.find(".contbox2>h2:nth-child(1)");
        var $mnu2 = $main_scrn.find("h2:nth-child(2)");
        var $mnu3 = $main_scrn.find("h2:nth-child(3)");

        var $scrn_info1 = $main_scrn.find(".upbox1");
        var $scrn_frm = $main_scrn.find(".upbox2");
        var $scrn_info2 = $scrn_frm.find(".box");
        var $scrn_warn = $scrn_frm.find(".word");
        var $scrn_info3 = $main_scrn.find(".upbox3");

        var $mnu1_exit = $scrn_info1.find(".exit");
        var $mnu2_next = $scrn_warn.find(".next");
        var $mnu2_exit = $scrn_info2.find(".exit");
        var $mnu3_exit = $scrn_info3.find(".exit");
        
        $cont_lnk.on("click", function(){
            window.open("https://www.i-sh.co.kr/app/index.do","_self");
        });

        

        $mnu1.on("click", function(){
            if($(window).width()>768){
            $scrn_info1.stop().fadeIn();
            console.log("클릭확인-페이드인");
            }
        });

        $mnu2.on("click", function(){
            $scrn_frm.stop().show();
            $scrn_warn.stop().fadeIn();
            $scrn_info2.stop().delay(250).fadeIn();
            console.log("클릭확인-페이드인");
        });
        
        $mnu3.on("click", function(){
            $scrn_info3.stop().fadeIn();
            console.log("클릭확인-페이드인");
        });

        $mnu1_exit.on("click", function(evt){
            evt.preventDefault();
            $scrn_info1.stop().fadeOut();
            console.log("클릭확인-페이드아웃");
        });

        $mnu2_next.on("click", function(evt){
            evt.preventDefault();
            $scrn_warn.stop().fadeOut();

        });


        $mnu2_exit.on("click", function(evt){
            evt.preventDefault();
            $scrn_info2.stop().fadeOut();
            $scrn_frm.stop().hide();
            console.log("클릭확인-페이드아웃");
        });

        $mnu3_exit.on("click", function(evt){
            evt.preventDefault();
            $scrn_info3.stop().fadeOut();
            console.log("클릭확인-페이드아웃");
        });


        var $scrn_size = $main_scrn.find(".container>.word");
        //메인스크린 반응형
        /*
        $("body, html").on("resize", function(){

            if($(window).width()<=768){
                $scrn_size.css({
                    left : "50%",
                    marginLeft : -5
                });
            }
        });

        //.container 직계에 있는 .word 에 left:50% 를 적용시켜 중앙으로 정렬시키고
        //가로값을 구해 margin-left로 적용시켜 화면의 중앙에서 고정하도록 구성

        */
});

//con1 part1,2
$(function(){
    var $con1 = $("#con1");
    var $container = $con1.find(".container");
    var $part1 = $container.find(".part1");
    
    var $list = $part1.find("li");
    var $cont = $part1.find(".select");

    var lstNum = 0;
    var oldNum;

    $list.on("click", function(evt){
        evt.preventDefault();
        oldNum = lstNum;
        lstNum = $list.index(this);

        $list.eq(lstNum).addClass("on").siblings().removeClass("on");
        console.log("lstNum = ", lstNum);

        $cont.eq(oldNum).removeClass("on");
        $cont.eq(lstNum).addClass("on");
    });


    var $part2 = $container.find(".part2");
    var $slides = $part2.find(".slides");
    
    var $scrn = $slides.find(".slides-screen");
    var $navi = $slides.find(".slides-pagination");
    var $auto = $slides.find(".auto");

    var nowIdx = 0,
    oldIdx;


    var spin = function(){
        $scrn.children("li").eq(nowIdx).addClass("on").siblings().removeClass("on");
        $navi.children("li").eq(nowIdx).addClass("on").siblings().removeClass("on");
    };

    var circle = function(){

        $scrn.children("li").eq(oldIdx).stop().animate({
            opacity : 0
        },function(){
            $scrn.children("li").eq(oldIdx).css({
                left : 540
            });
        });
        console.log("oldIdx = ", oldIdx);
        $scrn.children("li").eq(nowIdx).stop().animate({
            opacity : 1,
            left: 0
        });
        
        
        console.log("circle 작동");
    }
    // 초기화
    $scrn.children("li").eq(nowIdx).siblings().css({
        display : "block",
        opacity : 0,
        left : 540
    });

    $navi.children("li").on("click", function(evt){
        evt.preventDefault();

        oldIdx = nowIdx;
        nowIdx = $navi.children("li").index(this);
        console.log("nowIdx = ", nowIdx);

        spin();
        circle();
    });

    var autoplay = function(){
        intervalKey = setInterval(function(){
        oldIdx = nowIdx;

        if(nowIdx<6){
            nowIdx++;
        }else{
            nowIdx=0;
        }
        console.log("nowIdx = ", nowIdx);
        spin();
        circle();
    },3000);

    };
    

    $auto.on("click", function(evt){
        evt.preventDefault();

        if($(this).hasClass("pause")){
            $(this).removeClass("pause");
            clearInterval(intervalKey);

            console.log("자동재생 중단");
        }else{
            $(this).addClass("pause");
            autoplay();

            console.log("자동재생 실행");
        }
    });
});

//테이블 반응형
$(function(){

   
});

//푸터- 패밀리 사이트
    $(function(){
        $fam = $("#family>.container>ol>li>a");
        $window = $fam.parent().children("ul");
        timer = 0;
        move = false;

        var setTime = function(){
            if(timer==0){
                $window.stop().hide();
                console.log("시간만료",timer);
            }
        };

        var decrease = setInterval(function(){
            if(move==false){
                if(timer>0){
                    timer--;
                    console.log(timer + "초");
                }
                setTime();
                
            }
        },1000);
        
        $fam.on("click", function(evt){
            evt.preventDefault();

            if(timer>1){
                timer=0;
                $window.stop().hide();
                console.log("수동숨김");
            }else{

                timer = timer+5;
                $window.stop().show();
                console.log(timer + "초");
            }
        });

        $window.on("mouseover", function(){
            move =true;
        });

        $window.on("mouseout", function(){
            move=false;
        });


    });

    