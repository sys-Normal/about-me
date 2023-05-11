$(function(){
    var $nav = $("section>.slides>.slides-navigation>ul>li");
    var $screen = $("section>.slides>.slides-container");
    var $prev = $("section>.slides>.movement>.prev");
    var $next = $("section>.slides>.movement>.next");
    var $auto = $("section>.slides>.movement>.auto");
    var $more = $("footer>.container>.languege>.more");
    var $clse = $("footer>.container>.more_lanbox>.outline>.end_lan>.clse");
    var $shadow = $("footer>.container>.shadow");
    var $lightbox = $("footer>.container>.more_lanbox");
    var IntervalKey;

    var nowIdx = 0;

    // 스크린 교체 이벤트 함수
    var circle = function(){

        $screen.stop().animate({
            "left" : -860 * nowIdx 
        });

        $nav.eq(nowIdx).addClass("on").siblings().removeClass("on");
    };

    // 스크린 교체 이벤트 함수 + 인덱스 증가 이벤트 함수
    var spin = function(){

        if(nowIdx<4){
            nowIdx++;
        }else{
            nowIdx=0;
        }
        circle();

    };
    
    // 슬라이드 배너 관련 이벤트    

    $nav.on("click", function(evt){
        evt.preventDefault();
        
        nowIdx = $nav.index(this);
        console.log("nowIdx = ", nowIdx);

        circle();

    });
    
    $prev.on("click", function(evt){
        evt.preventDefault();
        
        if(nowIdx>0){
            nowIdx--;
        }else{
            nowIdx=4;
        }
        circle();
    });

    $next.on("click", function(evt){
        evt.preventDefault();
        
        spin();
    });

    $auto.on("click", function(evt){
        evt.preventDefault();
        clearInterval(IntervalKey);

        if($(this).hasClass("pause")==true){
            clearInterval(IntervalKey);
            $(this).removeClass("pause");
        }else{
        
        IntervalKey = setInterval(function(){
            spin();

        },2000);
        $(this).addClass("pause");
        }
    });


    // 언어 , 라이트박스 이벤트

    $more.on("click", function(evt){
        evt.preventDefault();
        $shadow.show();
        $lightbox.show();
    });

    $clse.on("click", function(evt){
        evt.preventDefault();
        $lightbox.stop().fadeOut(200);
        $shadow.stop().fadeOut(200);
    });

    $shadow.on("click", function(evt){
        evt.preventDefault();
        $lightbox.stop().fadeOut(200);
        $(this).stop().fadeOut(200);
    });

    $(document).on("keyup", function(evt){
    
        if(evt.which == 27){
            $lightbox.stop().fadeOut(200).prev().stop().fadeOut(200);
        }
    })
});