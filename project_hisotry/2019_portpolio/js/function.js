//시작화면
$(function(){
    
    var $start = $("#start");
    var $title_1 = $start.find(".title");
    var $title_2 = $start.find("h1");
    var $click = $start.find(".click");
    var $block_1 = $title_1.find("span");
    var $block_2 = $title_2.find("span");

    var clickEvt;
    var ready = 0;

    var circle = function(){
        
        clickEvt = setInterval(function(){
            $click.toggle();
            // console.log("작동중");
        },650);

    };

    var wait = setTimeout(function(){
        circle();
        ready++;
        // console.log(ready);
        $start.css({
            cursor : "pointer"
        });
    },2000);

    $title_1.css({
        marginLeft : - $title_1.width() / 2
    });
    
    $title_2.css({
        marginLeft : - $title_2.width() / 2
    });

    $(window).on("load resize", function(){
        
        $start.css({
            width : $(window).width(),
            height : $(window).height()
        });

        $title_1.css({
            marginLeft : - $title_1.width() / 2
        });
        
        $title_2.css({
            marginLeft : - $title_2.width() / 2
        });

        $click.css({
            marginLeft : - $click.width() / 2
        });

        $block_1.css({
            width: $title_1.width()
        });
        $block_2.css({
            width: $title_2.width()
        });

        $click.css({
            marginLeft : - $click.width() / 2
        });
        
        // console.log("width = ", $title_2.width());
    });
    
    // console.log($(window).width());
    // console.log($(window).height());


        $start.on("click", function(){
            if(ready>0){
                ready--;
                $start.stop().fadeOut();
                clearInterval(clickEvt);
                clearTimeout(wait);
                
                // console.log("클릭");
            }
        });
    


    //animate plug-in
    new WOW().init();
});

//메인 화면
$(function(){

    var $header = $("header");
    var $container = $header.children(".container");
    var $btn = $container.find("h3");
    var $cont = $header.find(".cont");
    var $con1 = $header.find(".con1");
    var $con2 = $header.find(".con2");
    var $con3 = $header.find(".con3");
    var $con4 = $header.find(".con4");

    var $who = $header.find("#whoAmI");
    
    var $mnu = $("header>#whoAmI>section");
    var $about = $("header>#whoAmI>.about");
    var $skill = $("header>#whoAmI>.skill");
    var $portfolio = $("header>#whoAmI>.portfolio");
    var $epilogue = $("header>#whoAmI>.epilogue");

    var $chart = $skill.find(".chart");
    var $gage = $skill.find(".gage");
    var $title = $skill.find("title");

    var $item = $portfolio.find(".item");
    var $info = $portfolio.find(".info");
    var $move = $portfolio.find(".move");
    var $zoom = $portfolio.find(".zoom");

    var $popBox = $(".popup_box");
    var $pop = $(".popup_box .pop");

    var $slides = $epilogue.find(".slides");
    var $slideMove = $epilogue.find(".slide-move");
    var $prev = $slideMove.children(".prev");
    var $next = $slideMove.children(".next");

    var move = [];
    var nowIdx = 0;
    var count = 0; /* .zoom 카운팅 */
    var pageCount = 0;
    var oldCount;
    var moving = false;

    //스크롤바의 너비 자동계산 함수
	function scrollBarWidth() {
        document.body.style.overflow = 'hidden'; 
        var width = document.body.clientWidth;
        
        document.body.style.overflow = 'scroll'; 
        width -= document.body.clientWidth; 
        
        if(!width) {
           width=document.body.offsetWidth - document.body.clientWidth;
        }
        
        document.body.style.overflow = ''; 
        return width; 
    } 

    var hidePop = function(){
        $pop.eq(count).hide();
        $popBox.hide();

        $("body").css({
            // "overflow-y" : "Scroll",
            "margin-left" : 0
        });
        
    };

    $mnu.eq(nowIdx).show().siblings().hide();
    $move.hide();
    
    $slides.css({
        width : $who.width() / 1.5,
        height : 360,
        marginLeft : - $slides.width() / 2
    });

    $(window).on("load resize", function(){

        if($(window).width()<1290){
            $who.removeClass("on");
        }else{
            $who.addClass("on");
        }

        if($(window).width()>=768){
            $header.css({
                width : $(window).width()-100,
                height : $(window).height()
            });

            $container.css({
                width : $header.width(),
                height : 80

            });

            $who.css({
                width : $header.width(),
                height : 500
            });

            $about.css({
                width : $who.width(),
                height : 480
            });

            $skill.css({
                width : $who.width(),
                height : 480
            });

            $portfolio.css({
                width : $who.width(),
                height : 480
            });

            $epilogue.css({
                width : $who.width(),
                height : 480
            });

            $slides.css({
                width : $who.width() / 1.5,
                height : 360,
                margin : "0 auto"
            });

            
            $slides.children("li").css({
                width : $who.width() / 1.5,
                height : 360
            });
            
            $slideMove.css({
                width : $who.width(),
                height: 480
            });    

            $("header>#whoAmI>.skill>.circle-bar").show();
        }else{

            $header.css({
                width : $(window).width()-30,
                height : $(window).height() -30
            });
    
            $container.css({
                width : $(window).width()-30,
                height : $(window).height()-250    
            });

            $who.css({
                width : $(window).width(),
                height : $(window).height()
            });

            $about.css({
                width : $(window).width()-65,
                height : $(window).height()-60
            });

            $skill.css({
                width : $(window).width()-65,
                height : $(window).height()-60
            });

            $portfolio.css({
                width : $(window).width()-65,
                height : $(window).height()-60
            });

            $epilogue.css({
                width : $(window).width()-65,
                height : $(window).height()-60
            });

            $slides.css({
                width : $(window).width() / 1.7,
                height : 360,
                margin : "0 auto",
            });

            $slides.children("li").css({
                width : $(window).width() / 1.7,
                height : 360,
            });

            $slideMove.css({
                width : $who.width(),
                height: 480
            });  

            $("header>#whoAmI>.skill>.circle-bar").hide();
        }

        $("header>.container>.cont").css({
            lineHeight : $cont.height() + "px"
        });

        console.log("마진", $slides.css("marginLeft"));
    });
    
    // 메뉴선택
    $btn.on("click", function(){
        nowIdx = $btn.index(this);
        $(this).addClass("on").siblings().removeClass("on");
        $mnu.eq(nowIdx).fadeIn(300).siblings().hide();
        // console.log("작동", nowIdx);
       
        if(nowIdx==1){
        
            $("header>#whoAmI>.skill>.width-bar").show();

            $("header>#whoAmI>.skill>.width-bar").on("inview", function(evt, visible){
                if(visible==true){
                    for(x=0;x<=5;x++){
                        var $bar = $(this).find(".bar").eq(x);
                        $bar.css({
                            width : $bar.parent().attr("data-bar") + "%"
                        });
                    }
                }
            })

            $("header>#whoAmI>.skill>.circle-bar").show();

            $("header>#whoAmI>.skill>.width-bar").on("inview", function(evt, visible){
                if(visible==true){
                    $(".chart").easyPieChart({
                        easing: 'easeInOutCubic',
                        delay: 3000,
                        barColor:'#02cffe',
                        trackColor:'rgba(255,255,255,0.2)',
                        scaleColor: false,
                        lineWidth: 12,
                        size: 120,
                        animate: 2000,
                        onStep: function(from, to, percent) {
                        this.el.children[0].innerHTML = Math.round(percent);
                        }
                    });
                }
            });

            if($(window).width()<768){
                $("header>#whoAmI>.skill>.circle-bar").hide();
            }
        }
    });

    $item.on("mouseenter", function(){
        count = $item.index(this);

        $item.eq(count).children(".move").show();

    });

    $item.on("mouseleave", function(){

        $item.eq(count).children(".move").hide();

    });
    
    $zoom.on("click", function(evt){
        count = $zoom.index(this);
        evt.preventDefault();

        if($pop.eq(count).length>0){
            if($("body").css("overflow-y")=="scroll"){
                $("body").css({
                    overflow : "hidden",
                    marginLeft : -scrollBarWidth() / 2
                });
            }
            
            $pop.eq(count).css({
                "overflow-y" : "scroll"
            }).show();
            $popBox.show();
        }

    });

    $popBox.on("click", function(){
        hidePop();
    });

    $(document).on("keyup", function(evt){
        if(evt.which == "27"){
            hidePop();
        }
    });

    $prev.on("click", function(){
        if(moving==false){
            moving = true;

            $slides.children("li").eq(pageCount).siblings().css({
                opacity : 0,
                left : - $slides.children("li").width()
            });

            if(pageCount>0){
                oldCount = pageCount;
                pageCount--;

                $slides.children("li").eq(oldCount).css({
                    opacity : 0,
                    left : - $slides.children("li").width()
                });
                $slides.children("li").eq(pageCount).stop().animate({
                    opacity : 1,
                    left : 0
                }).siblings().animate({
                    opacity : 0,
                    left : - $slides.children("li").width()
                },function(){
                    moving = false;
                });
                // console.log("nowCount = ", pageCount);
            }else{
                pageCount = 3;

                $slides.children("li").eq(pageCount).stop().animate({
                    opacity : 1,
                    left : 0
                },function(){
                    moving = false;
                }).siblings().stop().css({
                    opacity : 0,
                    left : - $slides.children("li").width()
                });
            }
        }

    });
    
    $next.on("click", function(){
        if(moving==false){
            moving = true;

            $slides.children("li").eq(pageCount).siblings().css({
                opacity : 0,
                left : $slides.children("li").width()
            });

            if(pageCount<3){
                oldCount = pageCount;
                pageCount++;
                
                
                $slides.children("li").eq(pageCount).stop().animate({
                    opacity : 1,
                    left : 0
                },function(){
                    moving = false;
                }).siblings().stop().css({
                    opacity : 0,
                    left : $slides.children("li").width()
                });
            }else{
                pageCount=0;
                
                $slides.children("li").eq(pageCount).stop().animate({
                    opacity : 1,
                    left : 0
                },function(){
                    moving = false;
                }).siblings().stop().css({
                    opacity : 0,
                    left : $slides.children("li").width()
                });
            }
        }
    });

    // console.log("height", $(window).height());
    // console.log($(window).width() -100);
    // console.log($(window).height() -100);
});