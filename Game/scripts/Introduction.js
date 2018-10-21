var sound = "off";
 back.play();
function Soundfunc()
{
    if(sound=="on"){sound="off";  back.volume=1.0;  }
    else{
        sound="on"; back.volume=0.0; 
    }
    $("#Sound").val("Sound : "+sound);
}
function NewGamefunc()
{
     $("#menu2").children("*:not(#d)").remove();

    setTimeout(function(){
    $("#d").animate({"left":(window.innerWidth)+"px"},1500,function(){ /// 20000
    moveing=true; 
    $("#menu2").css("border-radius","20px");
    $("#menu2").animate({"width":"0px","height":"0px"},1000,
                       function(){ 
                                 
                       
        
                      
        $("body").remove("#menu2"); $("#input").focus(); 
                                  $("#menu2").css("display","hidden"); $("#pro").animate({"height":"70px"},1000);
                                 
                //***********************************************  Ballon ******************************************************//
                //                                 the flying monster that throw ballons                                        //
                //                                                                                                              //
                //                                                                                                              //
                                                          Balon_monster_Draw(); 
                //
                //                                                                                                              //
                //**************************************************************************************************************//
                                 
                                 
                //**************************** initail position of flying monster of ballon ************************************//
                //                                                                                                              //
                //                                                                                                              //
                //                                                                                                              //
                setTimeout(function(){$("#balon_Monster").animate({"top":"75px","left":"300px"},1000,function(){GenerateBallon();})},1000);
                //                                                                                                              //
                //                                                                                                              //
                //**************************************************************************************************************//                                           
                    menu_open=false;
                     
                                 });
     
   
    
    
    
    });},200);
    
                        
}

function Exitfunc2()
{

    menu_open=false;
    $("#menu2").animate({"width":"0px","height":"0px"},1000,
                       function(){
        
                       $("body").remove("#menu2"); $("#input").focus(); moveing=false;
                        $("#menu2").css("display","hidden");                                             
                        clearInterval(play);
                        var div  = document.createElement("div");
                        div.setAttribute("id","picture");
                        div.style["width"]=(window.innerWidth-5)+"px";
                        div.style["height"]="0px";//
                        div.style["border"]="1px solid silver";
                        div.style["position"]="absolute";
                        div.style["top"]="0px";
                        div.style["z-index"]="100000000000";
                        div.style["background-image"]="url(images/exit.jpg)";
                        div.style["background-repeat"]="no-repeat";
                        div.style["background-size"]="100% 100%";
                        div.style["left"]="0px";
                        div.style["overflow"]="hidden";
                        $("body").append(div);                                            
                        $("#picture").animate({"height":(window.innerHeight-5)+"px"},1000,function(){back.pause();});                                             
                                                                     
                                                                     
                                                                     
                                                                     });
    
                        
}

 
function intro()
{
                        
                        menu_open = true;
                        moveing=false;
//                        ballons.forEach(function(ob){ document.body.removeChild(ob); });
//                        ballons.splice(ballons.indexOf(ballons[0]),ballons.length);
                      //  clearInterval(play);
                        
                        var div  = document.createElement("div");
                        div.setAttribute("id","#menu2");
                        div.style["width"]=(window.innerWidth-5)+"px";
                        div.style["height"]="0px";
                        div.style["border"]="1px solid silver";
                        div.setAttribute("id","menu2");
                        div.style["position"]="absolute";
                        div.style["top"]="0px";
                        div.style["z-index"]="10000000000000000";
                        div.style["background-image"]="url(images/back.jpg)";
                        div.style["background-repeat"]="no-repeat";
                        div.style["background-size"]="100% 100%";
                        div.style["left"]="0px";
                        div.style["overflow"]="hidden";
                          
                        var newgame  = document.createElement("input");
                        newgame.setAttribute("type","button");
                        newgame.setAttribute("id","newgame");
                        newgame.setAttribute("value","New Game");
                        newgame.style["width"]="200px";
                        newgame.style["height"]="50px";
                         newgame.style["z-index"]="100000000000";
                        newgame.style["position"]="absolute";
                        newgame.style["top"]="50px";
                        newgame.style["left"]="600px";
                        newgame.style["cursor"]="pointer";
                         newgame.style["outline"]="none";
                        newgame.style["border-radius"]="20px";
                        newgame.style["font-size"]="20px";
                        newgame.style["font-weight"]="bold";
                        newgame.addEventListener("click",NewGamefunc,true);

                       var Sound  = document.createElement("input");
                        Sound.setAttribute("type","button");
                        Sound.setAttribute("id","Sound");
                        Sound.setAttribute("value","Sound : "+sound);
                        Sound.style["width"]="200px";
                        Sound.style["height"]="50px";
                         Sound.style["z-index"]="100000000000";
                        Sound.style["position"]="absolute";
                        Sound.style["top"]="120px";
                        Sound.style["left"]="600px";
                        Sound.style["cursor"]="pointer";
                         Sound.style["outline"]="none";
                        Sound.style["border-radius"]="20px";
                        Sound.style["font-size"]="20px";
                        Sound.style["font-weight"]="bold";
                        Sound.addEventListener("click",Soundfunc,true);
    
    
                        var Exit  = document.createElement("input");
                        Exit.setAttribute("type","button");
                        Exit.setAttribute("id","Exit2");
                        Exit.setAttribute("value","Exit"); 
                         Exit.style["width"]="200px";
                        Exit.style["height"]="50px";
                         Exit.style["z-index"]="100000000000";
                        Exit.style["border-radius"]="20px";
                        Exit.style["position"]="absolute";
                        Exit.style["top"]="190px";
                        Exit.style["left"]=newgame.style.left;
                       Exit.style["cursor"]="pointer";
                       Exit.style["outline"]="none";
                       Exit.style["font-size"]="20px";
                       Exit.style["font-weight"]="bold";
                       Exit.addEventListener("click",Exitfunc2,true);
    
    
    
    
    
    
    
    
    
                        var babycar  = document.createElement("div");
                        babycar.setAttribute("id","d");
                        babycar.style["width"]="300px";
                        babycar.style["height"]="300px";
                        babycar.style["border"]="1px solid back";
                        babycar.style["position"]="absolute";
                        babycar.style["top"]=(window.innerHeight-500)+"px";
                        babycar.style["z-index"]="10000000000000000";
                        babycar.style["background-image"]="url(images/set.png)";
                        babycar.style["background-repeat"]="no-repeat";
                        babycar.style["background-size"]="100% 100%";
                        babycar.style["left"]="-500px";
                        babycar.style["overflow"]="hidden";
    
                         $("body").append(div);
                        //document.body.appendChild(div);
                          $("#menu2").append(Exit);
                             $("#menu2").append(Sound);
                           $("#menu2").append(newgame);
                            $("#menu2").append(babycar); 
                               
                       setTimeout(function(){ $("#d").animate({"left":"200px"},3000); var  j = new Audio("audio/car.mp3"); j.play();},10);
                        $("#menu2").animate({
                                             "height":(window.innerHeight-5)+"px","top":"0px","left":"0px"},0);
                        
              
}
 
function lose()
{
                         
                         back.pause();
                        
                         var l2 = new Audio("audio/losep.mp3");
                        l2.addEventListener("ended",function(){
                         var l = new Audio("audio/lose.wav");
                         l.play();
                        },false);
                       l2.play();
                         loseopen=true;
                        moveing=false;
                        var div  = document.createElement("div");
                        div.setAttribute("id","lose");
                        div.style["width"]=(window.innerWidth-5)+"px";
                        div.style["height"]="0px";
                        div.style["border"]="1px solid silver";
                        div.style["position"]="absolute";
                       div.style["text-align"]="-webkit-center";
                        div.style["top"]="0px";
                        div.style["z-index"]="10000000000000000";
                        div.style["background-image"]="linear-gradient(to bottom, #D6000B, #00050A)";
                        div.style["background-repeat"]="no-repeat";
                        div.style["background-size"]="100% 100%";
                        div.style["left"]="0px";
                        div.style["overflow"]="hidden";
                         div.style["color"]="green";
                          div.style["font-size"]="50px";
  
                         $("body").append(div);
                          
                         $("#lose").html("</br></br></br></br>YOU LOSE !</br><font size='30px' color='yellow'>Click F5 To Try Again</font>"+$("#lose").html());
                         
                          $("#lose").animate({
                                             "height":(window.innerHeight-5)+"px","top":"0px","left":"0px"},1000);
} 
function win()
{
 
    
                          back.pause();
                         var l = new Audio("audio/win.mp3");
                         l.play();
                       winopen=true;
                        moveing=false;
                        var div  = document.createElement("div");
                        div.setAttribute("id","win");
                        div.style["width"]=(window.innerWidth-5)+"px";
                        div.style["height"]="0px";
                        div.style["border"]="1px solid silver";
                        div.style["position"]="absolute";
                       div.style["text-align"]="-webkit-center";
                        div.style["top"]="0px";
                        div.style["z-index"]="10000000000000000";
                        div.style["background-image"]="linear-gradient(to bottom, #5CC3FF, #0060BF)";  
                        div.style["background-repeat"]="no-repeat";
                        div.style["background-size"]="100% 100%";
                        div.style["left"]="0px";
                        div.style["overflow"]="hidden";
                         div.style["color"]="green";
                          div.style["font-size"]="50px";
  
                         $("body").append(div);
                          
                         $("#win").html("</br></br></br></br>YOU Win </br><font size='30px' color='yellow'>Click F5 To Try Again</font>");
                         
                          $("#win").animate({
                                             "height":(window.innerHeight-5)+"px","top":"0px","left":"0px"},1000);
} 
