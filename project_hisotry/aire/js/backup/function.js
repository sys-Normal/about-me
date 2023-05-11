// $(function(){

//     let value = [];


//     var pageTop = function(evt){
//         value[0] = $("header").offset().top;
//         value[1] = $("#about").offset().top;
//         value[2] = $("#service").offset().top;
//         value[3] = $("#number").offset().top;
//         value[4] = $("#news").offset().top;
//         value[5] = $("#contact").offset().top;

//         return value;
//     };

//     $(window).on("load", function(){
//         pageTop();

//     });

//     $(window).on("resize", _.debounce(function(){
//         pageTop();
//         console.log(pageTop());
//     },400));

// });