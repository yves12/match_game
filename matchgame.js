
$(document).ready(function () {
    var yves1 = [];
    var photos = {
      "onepunch1": "http://assets.vg247.com/current//2016/01/one_punch_vault_boy.jpg",
      "op2": "https://images2.alphacoders.com/516/516664.jpg",
      "inazuma2" :"http://animewallp.com/wp-content/uploads/2014/02/Minitokyo.Inazuma.Eleven.558818.jpg",
      "onepunch2" :"http://assets.vg247.com/current//2016/01/one_punch_vault_boy.jpg",
      "inazuma1" :"http://animewallp.com/wp-content/uploads/2014/02/Minitokyo.Inazuma.Eleven.558818.jpg",
      "op1" :"https://images2.alphacoders.com/516/516664.jpg",
      "thug1" :"http://i.imgur.com/CWTMa.jpg",
      "thug2" :"http://i.imgur.com/CWTMa.jpg",
      "gf1" :"http://images.mentalfloss.com/sites/default/files/styles/insert_main_wide_image/public/mabel_8.jpg",
      "gf2" :"http://images.mentalfloss.com/sites/default/files/styles/insert_main_wide_image/public/mabel_8.jpg",
      "amazing1" :"http://designyoutrust.com/wp-content/uploads/2012/08/amazing_landscape_in_china_0796128010241.jpg",
      "amazing2" :"http://designyoutrust.com/wp-content/uploads/2012/08/amazing_landscape_in_china_0796128010241.jpg",
      "sports1" :"http://lorempixel.com/400/400/sports/2/",
      "sports2" :"http://lorempixel.com/400/400/sports/2/",
      "destiny1" :"http://www.reasonforgaming.com/wp-content/uploads/2014/10/Destiny-Game-2.jpg",
      "destiny2" :"http://www.reasonforgaming.com/wp-content/uploads/2014/10/Destiny-Game-2.jpg"
    };
      $("html").css("background", "url('http://media.tumblr.com/tumblr_lgotggqM441qerqcg.jpg')");
      $("html").css("background-repeat", "no-repeat");
      var size1 = $(window).height();
      var size2 = $(window).width();
      $("html").css({ 
     "background-image": "url('http://media.tumblr.com/tumblr_lgotggqM441qerqcg.jpg')", 
     "background-size" :size2.toString() + "px " + size1.toString() + "px" 
});    
   
    
    
    $("#question").click(function() {
     console.log($(this).attr("id"));
       $(this).attr('src',"http://www.publicdomainpictures.net/pictures/40000/nahled/question-mark.jpg");
    });

    
    $("img").click(function() {
        var id = $(this).attr("id");
        console.log(id);
        $(this).attr('src', photos[id]);
       $( this ).css('opacity',1);
          
        yves1.push(this);
        
        if(yves1.length > 1  ){
        
        if(yves1[0].src === yves1[1].src){
           alert("correct"); 
            var audio1 = new Audio('http://www.soundjay.com/button/sounds/button-2.mp3');
           audio1.play();
            yves1 =[];
        }else {  
          
          alert("wrong");
           var audio = new Audio('http://www.soundjay.com/misc/sounds/fail-trombone-03.mp3');
           audio.play();
           $(yves1[0]).attr('src',"http://www.publicdomainpictures.net/pictures/40000/nahled/question-mark.jpg");
           $(yves1[1]).attr('src',"http://www.publicdomainpictures.net/pictures/40000/nahled/question-mark.jpg");
           yves1 = [];
           
        }
        
    }
    
  });
});






  