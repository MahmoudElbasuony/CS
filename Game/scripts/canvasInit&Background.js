function InitCanvas(id,wh,ht) // canvas initiation full screen 
{
    
    var can = document.getElementById(id);
    can.width= wh-10;
    can.height = ht-15;
    context = can.getContext("2d");

    
    return context;     
}
function Check_colision()
{
    if(moveing==true){
                                var Bx2 = (parseFloat($("#BabyCanvas").css("left"))+parseFloat($("#BabyCanvas").css("width")))-30;
                                if(Baby.Direction=="right")
                                {
                                var Bx1 = (parseFloat($("#BabyCanvas").css("left")))+60;
                                var By2 = (parseFloat($("#BabyCanvas").css("top"))+parseFloat($("#BabyCanvas").css("height")))-20;
                                }
                                else 
                                {
                                var Bx1 = (parseFloat($("#BabyCanvas").css("left")));
                                var By2 = (parseFloat($("#BabyCanvas").css("top"))+parseFloat($("#BabyCanvas").css("height")))-50;
                                }
                                
                                var By1 = (parseFloat($("#BabyCanvas").css("top"))+10);                      
                                        
                                         //to make Blue monsters move when moving forward
                     for (var i = 0; i < EnymiesArr.length; i++) 
                     {
                                 if(incCam)
                                 {
                                 EnymiesArr[i].limit -= 3;//3
                                 EnymiesArr[i].init -= 3;//3
                                 }


                                 var ex1 = (parseFloat(EnymiesArr[i].getCanv().style["left"]))-20;
                                 var ey1 = (parseFloat(EnymiesArr[i].getCanv().style["top"]));
                                 var ex2 = (parseFloat(EnymiesArr[i].getCanv().style["left"])+EnymiesArr[i].getCanv().width)-20;
                                 var ey2 = (parseFloat(EnymiesArr[i].getCanv().style["top"])+EnymiesArr[i].getCanv().height);
                                 //- ------- check position of baby ------------------------
                                 if(((Bx1>=ex1&&Bx1<=ex2)||(Bx2>=ex1&&Bx2<=ex2))&&((By1>=ey1&&By1<=ey2)||(By2>=ey1&&By2<=ey2)))
                                 {
                                     try
                                     {
                                             
                                          document.body.removeChild(EnymiesArr[i].getCanv());
                                          $("#BabyCanvas").css({"box-shadow":"0px 0px 50px  green"},100);
                                         
                                          // ---------------- update energy ----------------
                                          
                                             Baby_Energy-=50;
                                             $("#hp").css({"width":Baby_Energy+"px"});
                
                                         
                                         
                                          setTimeout(function(){
                                              
                                              var c = new Audio("audio/Fire2.mp3");
                                               c.play();
                                              
                                              $("#BabyCanvas").css({"box-shadow":"none","border":"none"},100);},200);
                                         
                                     }
                                     catch(e){}
                                 }

                                 if(parseFloat($("#blue"+(i+1)).css("left"))<-500)
                                 {
                                     
                                     try{
                                         
                                  document.body.removeChild(EnymiesArr[i].getCanv());
                                     }catch(e){}
                                 }
                     
                    }

                 //move green monsters whith the background
                 for (var i = 0; i < GreenMonstersArr.length; i++) 
                 {
                     
                     
                                 var ex1 = (parseFloat(GreenMonstersArr[i].getCanv().style["left"]))+20;
                                 var ey1 = (parseFloat(GreenMonstersArr[i].getCanv().style["top"]));
                                 var ex2 = (parseFloat(GreenMonstersArr[i].getCanv().style["left"])+GreenMonstersArr[i].getCanv().width)-20;
                                 var ey2 = (parseFloat(GreenMonstersArr[i].getCanv().style["top"])+GreenMonstersArr[i].getCanv().height);
                                 //- ------- check position of baby ------------------------
                                 if(((Bx1>=ex1&&Bx1<=ex2)||(Bx2>=ex1&&Bx2<=ex2))&&(ey1>=By1&&ey1<=By2))
                                 {

                                     try
                                     {
                                         
                                              document.body.removeChild(GreenMonstersArr[i].getCanv());
                                              $("#BabyCanvas").css({"box-shadow":"0px 0px 50px  yellow"},100);
                                              // ---------------- update energy ----------------
                                                
                                                Baby_Energy-=40;
                                                $("#hp").css({"width":Baby_Energy+"px"});
                                              setTimeout(function(){
                                                  var c = new Audio("audio/Fire2.mp3");
                                                  c.play();
                                                  
                                                  $("#BabyCanvas").css({"box-shadow":"none","border":"none"},100);},200);
                                     }
                                     catch(e){}
                                     }
                                 

                                 if(incCam)
                                 {
                                               $("#" + GreenMonstersArr[i].CanvasId + "").css({ "left": "-=11px" });//3
                                 }
                                 if(parseFloat($("#green"+(i+1)).css("left"))+125<0)
                                 {
                                     try
                                     {
                                               
                                                document.body.removeChild(GreenMonstersArr[i].getCanv());
                                     }
                                     catch(e){}
                                 }
                     
                 }

                    //move the dragons with the background
                    for (var i = 0; i < DragonMonstersArr.length; i++) 
                    {
                     
                    var ex1 = (parseFloat(DragonMonstersArr[i].getCanv().style["left"]));
                    var ey1 = (parseFloat(DragonMonstersArr[i].getCanv().style["top"]));
                    var ex2 = (parseFloat(DragonMonstersArr[i].getCanv().style["left"])+DragonMonstersArr[i].getCanv().width);
                    var ey2 = (parseFloat(DragonMonstersArr[i].getCanv().style["top"])+DragonMonstersArr[i].getCanv().height);
                    //- ------- check position of baby ------------------------
                    if(((Bx1>=ex1&&Bx1<=ex2)||(Bx2>=ex1&&Bx2<=ex2))&&((By1>=ey1&&By1<=ey2)||(By2>=ey1&&By2<=ey2)))
                    {
                             try
                             {
                                
                             document.body.removeChild(DragonMonstersArr[i].getCanv());

                              $("#BabyCanvas").css({"box-shadow":"0px 0px 50px  aqua"},100);
                                 
                                  // ---------------- update energy ----------------
                                                
                                                Baby_Energy-=20;
                                                $("#hp").css({"width":Baby_Energy+"px"});
                                 
                                 
                              setTimeout(function(){
                                  var c = new Audio("audio/Fire2.mp3");
                                         c.play();
                                  $("#BabyCanvas").css({"box-shadow":"none","border":"none"},100);},200);
                             }
                             catch(e){}
                    }
                     if(incCam)
                     {
                         $("#" + DragonMonstersArr[i].CanvasId + "").css({ "left": "-=11px" });//3
                     }
                     if(parseFloat($("#dragon"+(i+1)).css("left"))+125<0)
                     {
                         
                         try
                         {
                          
                           document.body.removeChild(DragonMonstersArr[i].getCanv());
                         }
                         catch(e){}
                     }
                 } 
    }
}
//----------------------  ****  Global Variables  ***** ---------------------------
     var backgstep = 0,  //  the background Step
         landstep = 0;  // the land Step
 var backpic = new Image(); // background image
            backpic.src="images/back.png"; 
var landpic = new Image(); // land image
            landpic.src = "images/land.png";
var l1 = false; var l2=false;
function DrawBackground(Graphics) 
{
    window.requestAnimationFrame(function(){DrawBackground(Graphics);});
              if(moveing===true )
              {

            if(Baby.state=="play"&&Baby.Direction=="right")   backgstep-=5.5;   
                  
              }
            document.body.style['background-position']=backgstep+'px 0px'; // this moves the back ground
            
            backpic.onload = function(){l1=true;}
            if(l1==true)
            {
                if(backgstep<0){backgstep%=Graphics.canvas.width;}
                Graphics.drawImage(backpic,backgstep,0,Graphics.canvas.width,Graphics.canvas.height-80); // first frame 
                Graphics.drawImage(backpic, backgstep + Graphics.canvas.width, 0, Graphics.canvas.width, Graphics.canvas.height-80);// second frame 
            }
            
            landpic.onload = function (){l2=true;}
            if(l2==true){ if (landstep < 0){ landstep %= Graphics.canvas.width;}
            Graphics.drawImage(landpic, landstep, Graphics.canvas.height - 80, Graphics.canvas.width, 100);
            Graphics.drawImage(landpic, landstep + Graphics.canvas.width, Graphics.canvas.height - 80, Graphics.canvas.width, 100);
            if (incCam) 
            {
                    if(Baby.state=="play")
                    {
                       landstep-=15.5;    
                        
                    }
            }
                         if(moveing==true){
            Check_colision();
            Check_position_fire_monsters();
            
             check_baby_ballon_position();
                         }
    }
                         
}
           






