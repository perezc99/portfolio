$(".ibm-sme").click(function(){
    var index = 0;
    $(".ibm-sme.top").each(function(){
        $head = $(this);
        $content = $head.next();

        $content.slideToggle(100, function(){
            index++;
            if(index === 6) {
                if($head.next().is(":visible")) {
                    $(".ibm-sme.top.top-cent").children("img").attr("src", "../svg files/caret-up-fill.svg");
                } else {
                    $(".ibm-sme.top.top-cent").children("img").attr("src", "../svg files/caret-down-fill.svg");
                }
            } 
        });
    });
});

$(".ibm-int").click(function(){
    var index = 0;
    $(".ibm-int.top").each(function(){
        $head = $(this);
        $content = $head.next();
        $content.slideToggle(100, function(){
            index++;
            if(index === 6) {
                if($head.next().is(":visible")) {
                    $(".ibm-int.top.top-cent").children("img").attr("src", "../svg files/caret-up-fill.svg");
                } else {
                    $(".ibm-int.top.top-cent").children("img").attr("src", "../svg files/caret-down-fill.svg");
                }
            } 
        });
    });
});

$(".rpi-sa").click(function(){
    var index = 0;
    $(".rpi-sa.top").each(function(){
        $head = $(this);
        $content = $head.next();
        $content.slideToggle(100, function(){
            index++;
            if(index === 6) {
                if($head.next().is(":visible")) {
                    $(".rpi-sa.top.top-cent").children("img").attr("src", "../svg files/caret-up-fill.svg");
                } else {
                    $(".rpi-sa.top.top-cent").children("img").attr("src", "../svg files/caret-down-fill.svg");
                }
            } 
        });
    });
});

$(".st-ment").click(function(){
    var index = 0;
    $(".st-ment.top").each(function(){
        $head = $(this);
        $content = $head.next();
        $content.slideToggle(100, function(){
            index++;
            if(index === 6) {
                if($head.next().is(":visible")) {
                    $(".st-ment.top.top-cent").children("img").attr("src", "../svg files/caret-up-fill.svg");
                } else {
                    $(".st-ment.top.top-cent").children("img").attr("src", "../svg files/caret-down-fill.svg");
                }
            } 
        });
    });
});

$(".left-eye").hover
    (function(){
        $eye = $(this);
        $eye.addClass("tmp-eye");
        $eye.html('<div class="hover-eye email"> <img src="../svg files/svg contact/envelope.svg" alt="envelope symbol" class="imger-contact"> <h4>bus.ces.per@gmail.com</h4> </div>');
    }, function(){ 
        $eye = $(this);
        $eye.removeClass("tmp-eye");
        $eye.html('<img src="../svg files/svg contact/envelope.svg" alt="envelope symbol" class="imger-contact">')
    }
);

$(".left-eye").click(function(){
    var copyText = "bus.ces.per@gmail.com";
    navigator.clipboard.writeText(copyText);
    alert("Copied text: " + copyText);
});

$(".right-eye").hover
    (function(){
        $eye = $(this);
        $eye.addClass("tmp-eye");
        $eye.html('<div class="hover-eye phone"> <img src="../svg files/svg contact/telephone.svg" alt="telephone symbol" class="imger-contact"> <h4>323-365-4926</h4> </div>');
    }, function(){ 
        $eye = $(this);
        $eye.removeClass("tmp-eye");
        $eye.html('<img src="../svg files/svg contact/telephone.svg" alt="telephone symbol" class="imger-contact">')
    }
);

$(".right-eye").click(function(){
    var copyText = "323-365-4926";
    navigator.clipboard.writeText(copyText);
    alert("Copied text: " + copyText);
});



// Just For Fun. Enjoy finding new constellations ;-)

$(function($){
  
    function generateStar(canvas, ctx, starRadius){
              ctx.beginPath();
              ctx.arc(starRadius + (Math.random() * canvas.width), starRadius + (Math.random() * canvas.height), starRadius*Math.random(), 0, Math.PI*2, false);
        //ctx.arc(100, 30, starRadius, 0, Math.PI*2, false);
      
        var rand = Math.random();
        // if(rand <= 0.5){
                    ctx.fillStyle = "rgba(255, 255, 255, 1)";
                    ctx.shadowColor = "rgba(255, 255, 255, 0.5)";
                    ctx.shadowBlur = 3;
            //   }
            //   else if(rand > 0.75){
            //         ctx.fillStyle = "rgba(255, 254, 196, 1)";
            //         ctx.shadowColor = "rgba(255, 254, 196, 0.5)";
            //         ctx.shadowBlur = 4; 
            //   }
            //   else{
            //         ctx.fillStyle = "rgba(192, 247, 255, 1)";
            //         ctx.shadowColor = "rgba(192, 247, 255, 0.5)";
            //         ctx.shadowBlur = 7;
            //   }
              ctx.fill();
      }
    
    $(function(){
      
          var canvas = document.getElementById("space");
          var context = canvas.getContext("2d");
      
      onresize = function(){
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
      }
      onresize();
          
      interval = setInterval(
        function(interval){
          generateStar(canvas, context, 3);
        }
        , 24);
  
      setTimeout( // Stop sreating stars after 10s
        function(){ clearInterval(interval); }
        ,10000
      );
      
      });
  });