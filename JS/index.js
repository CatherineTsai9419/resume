$(document).ready(function(){
    $("#firstimg").fadeIn(1500);
    $('#clickhere').fadeIn(3000);
    $('#clickdot1').fadeIn(3000);
    $('#paperid').css({opacity: 0, display: 'flex'}).animate({
        opacity: 1
    }, 1000);
});

function firstclick(){
    $("#firstimg").fadeOut(1500);
    $("#secondimg").fadeIn(1500);
    $('#clickhere').css({display:'none'});
    $('#clickdot1').css({display:'none'});
    $("#clickhere2").fadeIn("slow");
    $("#clickdot2").fadeIn("slow");
    $('#story1').css({display:'none'});
    $("#story2").fadeIn(1500);

    //flower test
    //$(".petal").velocity(
        //"transition.expandIn", 
                 //{stagger: 25, drag:true, duration:1000}
     //).delay(1000);
    // setTimeout(function(){ $('.decoration1').css({visibility:'unset'}); }, 100);   
     //$('.decoration2').css({visibility:'unset'});
     //$('.decoration3').css({visibility:'unset'});
}

function secondclick(){
    $("#secondimg").fadeOut(1500);
    $("#threeimg").fadeIn(1500);
    $('#clickhere2').css({display:'none'});
    $('#clickdot2').css({display:'none'});
    $("#clickhere3").fadeIn("slow");
    $("#clickdot3").fadeIn("slow");
    $('#story2').css({display:'none'});
    $("#story3").fadeIn(1500);
}

function threeclick(){
    $("#threeimg").fadeOut(1500);
    $("#fourimg").fadeIn(1500);
    $('#clickhere3').css({display:'none'});
    $('#clickdot3').css({display:'none'});
    $("#clickhere4").fadeIn("slow");
    $("#clickdot4").fadeIn("slow");
    $('#story3').css({display:'none'});
    $("#story4").fadeIn(1500);
}

function fourclick(){
    $("#fourimg").fadeOut(1500);
    $("#fiveimg").fadeIn(1500);
    $('#clickhere4').css({display:'none'});
    $('#clickdot4').css({display:'none'});
    $("#clickhere5").fadeIn("slow");
    $("#clickdot5").fadeIn("slow");
    $('#story4').css({display:'none'});
    $("#story5").fadeIn(1500);
}

function fiveclick(){
    $("#fiveimg").fadeOut(1500);
    $("#siximg").fadeIn(1500);
    $('#clickhere5').css({display:'none'});
    $('#clickdot5').css({display:'none'});
    $('#story5').css({display:'none'});
    $("#story6").fadeIn(1500);
//flower test
setTimeout(function(){$(".petal").velocity(
    "transition.expandIn", 
             {stagger: 25, drag:true, duration:1000}
 ).delay(1000);
 setTimeout(function(){ $('.decoration1').css({visibility:'unset'}); }, 100);   
 $('.decoration2').css({visibility:'unset'});
 $('.decoration3').css({visibility:'unset'});    }, 500);   

 setTimeout(function(){ $('#story6').css({display:'none'});
 $("#story7").fadeIn(1500);
    }, 11000);
}

//flower js