//*the walking isn't walking but just the land move and subtract from the left of the baby 
//*notice that the incam is a variable that is speciify to get the next sence of land 
//*notice that  $("#BabyCanvas").css({"left":"-=0.5px"}); > in canvasInit&background.js file is used to 
//*make the baby in his place and prevent him from go right 
//*this permit the camera to get the next sence of land 
//*notice that any thing contains 'Motion' is for breath or movring legs back and forward , up , down
//*notice the fire variable is for visual the peplona without the fire or set it false the original hand back sence will be shown
//*id is renewable variable to make a unique number for ball
//*if the ball's position is larger than the screen then this ball will be disposed 
//*leftstill variable tell me if the left key is still down or not  and also rightstill and jumpstill
//*baby have width , height, X , Y , Direction That will be specified when input key , leg walkmove , state that tell me if the baby play or stop
//*speed-> speed<6  is to delay the move its renewable to 0 
//
// 


//-----------------  Input Control -----------------------------------------------

var balls = [];  // the fire balls
var speed=15.5; // step that specify the speed of walking 
var rightstill=false,leftstill=false,jumpstill,fire=true; // variables to check in the bottom timer if the key is still down or not
                                                          // * fire is equel true initially to fire untill the fire limit reach
//--------------------------------- Move Method ----------------------------
function Move()
{
          setTimeout(function(){
              window.requestAnimationFrame(Move);
            Baby.X = parseInt($("#BabyCanvas").css('left'));
             Baby.Y = parseInt($("#BabyCanvas").css('top'));
         
          // speed needed to reach to 6 or less to start move or walk  
         if(leftstill==true&&rightstill==false)   // left direction 
         {    
       
             Baby.WalkMove=true;
             Baby.state="play";
             if(parseInt($("#BabyCanvas").css('left'))>0)
             {
                  speed=10.23;
                  $("#BabyCanvas").css({'left':'-='+(speed+10)+'px'});
                  Baby.state="stop";
             }

             Baby.Direction="left";
             Baby.headleftopeneyekey = true;
             Baby.headrightopeneyekey = false;
             Baby.flonkaleftkey = true;
             Baby.flonkarightkey = false;
             Baby.leg1leftkey=true;
             Baby.leg1rightkey=false;
             Baby.leg2leftkey=true;
             Baby.leg2rightkey=false;
             Baby.midbodyleftkey=true;
             Baby.midbodyrightkey=false;
         }
         else if(rightstill==true&&leftstill==false)// right direction
         {
             $("#Queen").css("left","-=5px");
             Baby.WalkMove=true;
             Baby.state="play";
             Baby.Direction="right";
             if(parseInt($("#BabyCanvas").css("left"))+100>((parseInt($("#BackgroundMove").css("width"))/2)-100))
             {
                 incCam=true;
                 speed=0;
             }
             else
             {
                 speed=15.23;
             }
             $("#BabyCanvas").css({'left':'+='+(speed)+'px'});
             Baby.headleftopeneyekey = false;
             Baby.headrightopeneyekey = true;
             Baby.flonkaleftkey = false;
             Baby.flonkarightkey = true;
             Baby.leg1leftkey=false;
             Baby.leg1rightkey=true;
             Baby.leg2leftkey=false;
             Baby.leg2rightkey=true;
             Baby.midbodyleftkey=false;
             Baby.midbodyrightkey=true;
         
         }
          },10);
     
}
//----------------- key down handler -------------------------
      var  id =0;
 
     function InputControlD(event) // key down
     {

         // concurrent events 
        if(event.keyCode==39){  rightstill=true; leftstill=false; Baby.Direction="right"; }//right key down and if the left:down>up it to false
        if(event.keyCode==37){ leftstill = true; rightstill=false; Baby.Direction="left";}//left key down and if the right:down>up it to false
        if(event.keyCode==32){ jumpstill=true; var  j = new Audio("audio/jump.mp3"); j.play();            }
        if(event.keyCode==27)
        {if(menu_open==false){if(allow_menu==true) {menu_creation();}}}
                                                            // else it will show the peplona 
           //------------------------- this jump is here because of 
           if(jumpstill==true)   // this tell me the jump button is pressed   
           {
                // don't start another jump unless the jummping is false
                if(Baby.jumping==false)   // if the baby isn't jumping ->jump him this prevent repeation 
                {
                     jump();  // perform jump
                }
           }
     }

    //---------------- key up handler ---------------------------------
     function InputControlU(event)  // key up
     {
      
              
        
         if(event.keyCode==38)
         {
           
            Fire(Baby.Direction);  // make a fire
            if(Fire_Energy<=0) fire=false;  // if the limit reach 50 or larger the fire body sence will be disappeared
           if(Fire_Energy>0){  var  f = new Audio("audio/colision.mp3"); f.play(); }
             
         }
            if(event.keyCode==39){ rightstill=false;  Baby.Direction="right";  }
            if(event.keyCode==37){ leftstill = false; Baby.Direction="left"; }
            if(event.keyCode==32){ jumpstill=false; }

            Baby.state="stop"; // stopped no more move 
            incCam=false; //  i don't need cammera because iamm stopping
            speed=15.5;  // reset the speed to 1 to allow in the next move the delay required  to 6 
            Baby.WalkMove=false; // stop the leg move motion 
          
     }

//   var ang=0.0,len1=0.0,len2=0.0,len3=0.0;
//   function test(e)
//   {
//       
//       
//       len1 = window.innerHeight-e.clientY-(window.innerHeight-parseFloat($("#BabyGun").css("top")));
//       len3 = e.clientX-parseFloat($("#BabyGun").css("left"));
//       len2 = Math.sqrt(Math.pow(len1,2)+Math.pow(len3,2));
//       if(Baby.Direction=="right")
//       ang = Math.floor(-100*Math.asin(len1/len2));  
//       else
//       ang = Math.floor(100*Math.asin(len1/len2));  
//       if(ang<20&&ang>-10)
//       {
//       document.getElementById("BabyGun").style["-webkit-transform"]="rotate(0deg)";
//       document.getElementById("BabyGun").style["-webkit-transform"] = "rotate("+ang+"deg)";
//       }
//       
//   } 
//----------------------------------- fire method-----------------------

   
   function Fire(dirc)
   {
              // increase the fire number limit
             if(Fire_Energy>0)   // if the fire limit reach there won't be any fire   //**********************>
             {
                     
                     Fire_Energy-=5;
                     
                     $("#fp").css({"width":Fire_Energy+"px"});
                     id++;
                     var ele = document.createElement("canvas"); // create canvas for each fire ball
                     ele.width=20;
                     ele.height=10;
                     ele.style["position"]= "fixed"
                     ele.style["z-index"]= "2000000";
                     ele.style["border-radius"]= "20px";
       
            if(dirc=="right")
            {
                ele.style["left"]= ((Baby.X+Baby.width-10))+"px";
                ele.style["top"]= (Baby.Y+15+Baby.height/2)+"px";
            }
            if(dirc=="left")
            {
                ele.style["left"]= ((Baby.X-10))+"px";
                ele.style["top"]= (Baby.Y+20+Baby.height/2)+"px";
            }
            
             //---------------------- set background with gradient-----------------------
            ele.setAttribute("id",id+"fire");
            var context = ele.getContext("2d");
            var grad = context.createLinearGradient(0,5,20,5);
            grad.addColorStop(0,"black");
            grad.addColorStop(1,"red");
            context.fillStyle = grad;
            context.fillRect(0,0,100,100);
            //---------------------------------------------------------------------------
             balls.push(ele);
             $("body").append(ele);
           
           if(dirc=="right")
           {
                // just animate the fire to right end of screen
                $("#"+id+"fire").animate({"left":window.innerWidth+"px"},1200,
                function()
                {
                try
                {
                document.body.removeChild(this);  delete this;  // remove the fire 
                balls.splice(balls.indexOf(this),1); 
                }
                catch(e){}
                });
               
            }
            if(dirc=="left")
            {
                // just animate the fire to left end of screen
                $("#"+id+"fire").animate({"left":-Baby.width+"px"},800,
                    function()
                    { 
                    try
                    {     // because in the check position fire and ballon the fire is deleted in this it will try to deelete deleted element
                    document.body.removeChild(this);  delete this;
                                                  balls.splice(balls.indexOf(this),1);
                    }
                    catch(e){}
                });
            }
         
            }
           else
           {
               fire=false;
           }
}
//-------------------------------- Jump Method------------------------------
    function jump()
    {
      Baby.jumping=true;   //  tell me initially that the baby in now jumping
      
      $("#BabyCanvas").animate({"top":"-=200px" },450,function(){ Baby.jumping= true; /*  tell me baby  still jumping*/})   // -100 top 
                      .animate({"top":"+=200px"},250,function(){ 
         
          
          Baby.jumping= false; incCam=false; /*the jumping is finish*/});// +100 down to the original position
      // let the cam increase due to the baby  get out of the half of the canvas
       
      // this is optional make the legs motion moves 
      Baby.WalkMove=true;
      // set the state of the baby to play state 
      Baby.state="play";
            
                 
    }
