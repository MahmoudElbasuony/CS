var img = new Image();
img.src="images/S.png";

var ballons = []; // white ballon

function Ballon(id,mx,my) //  monster x , monster y
{ 
             if(moveing==true){
                var vx = 10.5;
                var vy=8;
                var ele = document.createElement("canvas"); // create canvas for each fire ball
                ele.width=100;
                ele.height=100;
                ele.style["top"]= my+"px";
                ele.style["left"]= mx+"px";
                ele.style["position"]= "fixed";
                ele.style["z-index"]= "1000000000000000000";
                ele.style["border-radius"]= "20px";
                ele.setAttribute("id",id+"ballon");
                ballons.push(ele);
                this.context = ele.getContext("2d");
                var grd = context.createRadialGradient(30,30,1,50,50,100);
                grd.addColorStop(0,'white');
                grd.addColorStop(1,'rgba(225,0,0,0.025)');
                this.context.arc(50,50,50,0,2*Math.PI,true);
                this.context.fillStyle=grd;
                this.context.fill();

                $("body").append(ele);
                //------------------------ ggenerate from mouth -------------------------
                $("#"+id+"ballon").animate({"width":"0px"},0)  // return ballon to zero width and height 
                // transform ballon to 100 width 
                .animate({"width":"100px","left":"+=5px"},1000) ;

                function spin_ballon_everywhere()
                {
                    window.requestAnimationFrame(spin_ballon_everywhere)
                    if(moveing==true)
                    {
                    var x1 =parseFloat($("#"+id+"ballon").css("left"));
                    var y1 =parseFloat($("#"+id+"ballon").css("top"));
                    var x2 =parseFloat($("#"+id+"ballon").css("left"))+parseFloat($("#"+id+"ballon").css("width"));
                    var y2 =parseFloat($("#"+id+"ballon").css("top"))+parseFloat($("#"+id+"ballon").css("height"));
                    if (x1<0||x2>Graphics.canvas.width) 
                    {
                            vx = -vx;
                            
                    }
                    if (y1<75||y2>(Graphics.canvas.height-70))
                    {
                            vy = -vy;
                          
                    }
                    $("#"+id+"ballon").css({"left":"+="+vx+"px","top":"+="+vy+"px"});
                    }
                }
                  spin_ballon_everywhere();
    
            //   -------------------------Draw inside ballon----------------------------
//          if(EnymiesArr.length<=1)
//          {
//             this.draw=function()
//             {
//              // 1460,0,90,128,20,20,50,50
//            // 1460,130,90,128,20,20,50,50
//            // 1550,130,90,128,20,20,50,50  
//                // 1550,0,90,128,20,20,50,50
//               this.context.drawImage(img,1550,0,90,128,25,20,50,50);
//                 
//             }
//             img.onload= function()
//             {
//                    this.draw();
//             }
//             this.draw();  
//          }
//             function repeat()
//             {
//                         $("#"+id+"ballon").animate({"left":(window.innerWidth-100)+"px","top":"+=100px"}
//                                                    ,100, //this animation callback  animation to walk in sides of window
//                         function()
//                         { 
//
//                                $("#"+id+"ballon").animate({"top":(Graphics.canvas.height-170)+"px","top":"+=100px"},1000,
//                                function()
//                                { 
//
//                                     $("#"+id+"ballon").animate({"left":(-1*parseFloat($("#"+id+"ballon").css("width"))+"px")},5000,
//                                     function()
//                                     { 
//                                                   repeat();
//
//
//                                     });
//                               });             
//                         });
//             }
             }
}


//---------------------- check positon between fire and ballon----------------
function checkPositonFire_Balon(check)
{
    
    if(moveing==true)
    if(check==true)
    {
        var ba=null;
        var bal = null;
        
        ballons.forEach(function(obj1){ if(obj1.tagName==="CANVAS"){ 
        bal = obj1; 
        balls.forEach(function(obj2){ if(obj2.tagName==="CANVAS")
        { 
            ba = obj2;            
            var fx2 = (parseFloat(ba.style["left"])+ba.style.width);
            var fx1 = (parseFloat(ba.style["left"]));
            var fy2 = (parseFloat(ba.style["top"])+ba.height);
            var fy1 = (parseFloat(ba.style["top"]));
            
            
            var blnx1 = (parseFloat(bal.style["left"]));
            var blny1 = (parseFloat(bal.style["top"]));
            var blnx2 = (parseFloat(bal.style["left"])+bal.width);
            var blny2 = (parseFloat(bal.style["top"])+bal.height);
        
            if(((fx2>=blnx1&&fx2<=blnx2)||(fx1<=blnx2&&fx1>=blnx1))&&((fy1>=blny1&&fy1<=blny2)))
            {
            
                 var canv = document.createElement("canvas");
                 canv.setAttribute("class","f");
                 canv.width=100;
                 canv.height =100;
                 canv.style["position"]="fixed";
                canv.style["z-index"]="501";
                canv.style["left"]=obj1.style["left"];
                canv.style["top"]=obj1.style["top"];
                $("body").append(canv);
                 var con = canv.getContext("2d");
                 
                con.drawImage(img,3385,100,120,300,0,0,100,100);
                $(".f").animate({"width":"100px","height":"100px"},200,function(){ 
                $(".f").animate({"width":"0px","height":"0px"},200);
                });
                //----------------------- removeing --------------------
               try{
                document.body.removeChild(obj2);  delete obj2; 
                document.body.removeChild(obj1);  delete obj1;              
               }catch(e){} 
                ballons.splice(ballons.indexOf(obj1),1); 
                balls.splice(balls.indexOf(obj2),1);
                //--------------------- update energy -----
                if(Baby_Energy+5>0&&Baby_Energy+5<700)
                     Baby_Energy+=5;
                     $("#hp").css({"width":Baby_Energy+"px"});
                
                setTimeout(function(){
                    try{
                    document.body.removeChild(canv);
                delete canv;}catch(e){}}
                    ,90);
                
            }
                
        }  });
        }  });
         // inside check block ------------------
        
    }


}

var perm=true;
function check_baby_ballon_position(check)
{
    
                
                if(moveing==true)
                ballons.forEach(function(el)
                {
                    
                        if(el.tagName==="CANVAS")
                        {
                            
                                        var ob = el;
                                        var Bx2 = (parseFloat($("#BabyCanvas").css("left"))+parseFloat($("#BabyCanvas").css("width")))-15;
                                        var Bx1 = (parseFloat($("#BabyCanvas").css("left")))+30;
                                        var By2 = (parseFloat($("#BabyCanvas").css("top"))+parseFloat($("#BabyCanvas").css("height")))-10;
                                        var By1 = (parseFloat($("#BabyCanvas").css("top")))+20;

                                        var blnx1 = (parseFloat(ob.style["left"]));
                                        var blny1 = (parseFloat(ob.style["top"]));
                                        var blnx2 = (parseFloat(ob.style["left"])+ob.width)-25;
                                        var blny2 = (parseFloat(ob.style["top"])+ob.height);

                                        if(((Bx2>=blnx1&&Bx2<=blnx2)&&(blny1>=By1&&blny1<=By2))||
                                           (((Bx1<=blnx2&&Bx1>=blnx1)&&(blny2>=By1&&blny1<=By2))))
                                        {   
                                          $("#BabyCanvas").css({"box-shadow":"0px 0px 50px red inset,0px 0px 50px  red "},100);
                                           setTimeout(function(){
                                               var c = new Audio("audio/Fire2.mp3");
                                               c.play();
                                               $("#BabyCanvas").css({"box-shadow":"none","border":"none"},100);},200);
                                            
                                            //------------------------ Bomb ------------------------------
                                            var canv = document.createElement("canvas");
                                             canv.setAttribute("class","f"); // the bomb when baby touch ball 
                                             canv.width=100;
                                             canv.height =100;
                                             canv.style["position"]="fixed";
                                            canv.style["z-index"]="1000000000000000000";
                                            if(Baby.Direction=="right"){
                                            canv.style["left"]=(parseFloat(ob.style["left"])-70)+"px";
                                            canv.style["top"]=(parseFloat(ob.style["top"]))+"px";
                                            }
                                            else{
                                                canv.style["left"]=(parseFloat(ob.style["left"])+50)+"px";
                                            canv.style["top"]=(parseFloat(ob.style["top"]))+"px";
                                            }
                                            $("body").append(canv);
                                             var con = canv.getContext("2d");

                                            con.drawImage(img,4090,100,120,300,0,0,90,100);
                                            
                                            //----------------------- removeing --------------------
                                            document.body.removeChild(ob);
                                            ballons.splice(ballons.indexOf(el),1); delete el; 
                                            
                                            //--------------- update energy -----------------
                                            
                                             Baby_Energy-=30;
                                             $("#hp").animate({"width":Baby_Energy+"px"},400);
                
                                            
                                            
                                            setTimeout(function(){
                                                try
                                                {document.body.removeChild(canv);
                                            delete canv;
                                                }catch(e){}},100);
                                        }
                        }
    
               });
              
    
    
    
    
}
                 
//***************************** food ****************************************
var foods_pic= [[],[]];
var foods= [];
var food_id1=0, food_id2=0;

function food(id,t)
{
    if(moveing==true){
    this.x= Math.round(((Math.random()*window.innerWidth)));
    this.y=-100;
    this.drop_finish=false;
    var ele = document.createElement("canvas"); // create canvas for each fire ball
    ele.width=60;
    ele.height=60;
    ele.style["top"]= this.y+"px";
    ele.style["left"]= this.x+"px";
    ele.style["position"]= "fixed";
    ele.style["z-index"]= "1000000000000000000";
    ele.style["border-radius"]= "20px";
    if(t==1)
    ele.setAttribute("id","1food"+id);
    else if(t==2)
    ele.setAttribute("id","2food"+id);
    foods.push(ele);
    this.context = ele.getContext("2d");
//    var grd = context.createRadialGradient(30,30,1,50,50,100);
//    grd.addColorStop(0,'black');
//    grd.addColorStop(1,'rgba(225,0,0,0.025)');
//    this.context.arc(50,50,50,0,2*Math.PI,true);
//    this.context.fillStyle=grd;
//    this.context.fill(); 
    if(t==1)
    {
    this.context.drawImage(img,3259,182,120,80,0,0,60,60);   // apple
    }
    else if(t==2)
    {
        this.context.drawImage(img,3259,100,120,80,0,0,60,60);   // peprona
    }
    $("body").append(ele);
    if(t==1)
    {
        $("#1food"+id).animate({"top":((Graphics.canvas.height-170))+"px"},Math.round(((Math.random()*10)*100))+1000);
    }
    else if(t==2)
    {
        $("#2food"+id).animate({"top":((Graphics.canvas.height-170))+"px"},Math.round(((Math.random()*10)*100))+1000);
    }
    }
    
    
}

var BallonId=0; 
function createBallons(mx,my)    // will create instance to be saved in ballons array
{
    BallonId++; // idetfying entities
    var  ballonob = new Ballon(BallonId,mx,my); // create object and thrown into array
   
}
var speed_generation_ballon=500;

var Monster_Positions=[[parseInt(window.innerWidth)-400,85],// -*
                       [parseInt(window.innerWidth/2)+50,85] //   ----_,
                       ,[500,85]
                       
                      ];
var setTimeout_permit_to_allow_monster_move=true;
var ballon_num=4;
function GenerateBallon(mx,my)
{
    
    setInterval(function(){ if(moveing==true)
    {
                   // generate balls from the position of the monster
                          var  count = 0;
                          ballons.forEach(function(e){
                              
                              if(e.tagName==="CANVAS")
                              {
                                  count++;
                              } 
                          })
                          if(count<ballon_num) // only three and then generate another three
                          createBallons(parseInt($("#balon_Monster").css("left"))+50,parseInt($("#balon_Monster").css("top"))+45);         
                           
                          
                         // --------------------------  create foods --------------------
                              
                                  setTimeout(function(){
                                      if(foods.length<3){
                                          var food_type1 = new food(++food_id1,1) ; // id and type of food 
                                          var food_type2 = new food(++food_id2,2) ;// id and type of food 
                                      }},10000);
                              
                              
                              
                              
                        
                           
                           
                           
        
        
        
        
        
        
        
        
    }
                          },speed_generation_ballon);
}
 
var drop_finish=false;
var Fire_Energy=100,Baby_Energy=700;

function check_food_position()
{
    window.requestAnimationFrame(check_food_position);
    if(moveing==true)
    {
    
        foods.forEach(function(ob){
            
        var Bx2 = (parseFloat($("#BabyCanvas").css("left"))+parseFloat($("#BabyCanvas").css("width")))-30;
        var Bx1 = (parseFloat($("#BabyCanvas").css("left")))+30;
        var By2 = (parseFloat($("#BabyCanvas").css("top"))+parseFloat($("#BabyCanvas").css("height")))-10;
        var By1 = (parseFloat($("#BabyCanvas").css("top")))+30;
            //--------------------------------------------------
        var fx1 = (parseFloat(ob.style["left"]))-10;
        var fy1 = (parseFloat(ob.style["top"]))+10;
        var fx2 = (parseFloat(ob.style["left"])+ob.width)-10;
        var fy2 = (parseFloat(ob.style["top"])+ob.height)-5;
        if(((fx1>=Bx1&&fx1<=Bx2)&&(fy1>=By1&&fy1<=By2))||((fx2>=Bx1&&fx2<=Bx2)&&(fy2>=By1&&fy2<=By2)))
        {
            if(ob.getAttribute("id").indexOf("1food")>-1)
            {
                if(Baby_Energy+5>0&&Baby_Energy+5<700)
                  Baby_Energy+=10;
                  $("#hp").animate({"width":Baby_Energy+"px"},200);
                
            }
            else if(ob.getAttribute("id").indexOf("2food")>-1)
            {
                if(parseFloat($("#fp").css("width"))<700)
                {
                Fire_Energy+=10;
                     $("#fp").stop(false,true);
                $("#fp").animate({"width":(Fire_Energy)+"px"},200);
                }
            }
             $("#"+ob.id-"").css({"width":"+=5px"});
            $("#fp").text(Fire_Energy);
            $("#hp").text(Baby_Energy);
            //********************
            var eat = new Audio("audio/eat.mp3");
            eat.pause();
            eat.play();
            document.body.removeChild(ob);
            foods.splice(foods.indexOf(ob),1);
            
        }
        if(parseFloat(ob.style["top"])>=(Graphics.canvas.height-170))
        {
         
            $("#"+ob.getAttribute("id")).css("left","-=10px");
            if(parseFloat(ob.style["left"])<=0)
            {
                document.body.removeChild(ob);
                foods.splice(foods.indexOf(ob),1);
                
            }
        }
            
        
        
    });
    }
}
function Balon_monster_Draw() // flyer 
{
    if(moveing==true){
    var Top_Monster = document.createElement("canvas");
    Top_Monster.setAttribute("width","100px");
    Top_Monster.setAttribute("height","200px");
    Top_Monster.style["position"]="fixed";
    Top_Monster.style["left"]=(window.outerWidth)+"px";
    Top_Monster.style["top"]=(window.outerHeight+100)+"px";
    Top_Monster.style["z-index"]="1000000000000000000";
    Top_Monster.setAttribute("id","balon_Monster");
    var con = Top_Monster.getContext("2d");
    document.body.appendChild(Top_Monster);
    var tail_turn=[[3689,105,185,300,0,0,100,200],[3877,105,185,300,0,0,100,200],[3506,105,185,300,0,0,100,200]];//,
    var turn  = 0;
    var loaded=true;
    repeat = function(t)
    {
    
        con.clearRect(0,0,100,200);
        con.drawImage(img,tail_turn[t][0],tail_turn[t][1],tail_turn[t][2],tail_turn[t][3]
                          ,tail_turn[t][4],tail_turn[t][5],tail_turn[t][6],tail_turn[t][7]);
    
    setTimeout(function()
                       { 
                         turn++;
                         repeat(turn%tail_turn.length); 
    
                      },300);
    }
    repeat(turn);
    }
}

function move_monster_to_random_position()
{
    
    setTimeout(function(){
         window.requestAnimationFrame(move_monster_to_random_position);
   if(moveing==true)
    {
        
       var index = ((Math.round(Math.random()*10))%3);
       if(setTimeout_permit_to_allow_monster_move==true)
       {
        
        setTimeout(function()
        {
        
         $("#balon_Monster").animate({"left":Monster_Positions[index][0]+"px","top":Monster_Positions[index][1]+"px"},500);  
                         
        setTimeout_permit_to_allow_monster_move=true; // this flag tell me you can now set another settimeout
        },3000);
        
        }
       setTimeout_permit_to_allow_monster_move=false; // this allow no more than one settimeout to be set
    }},100);
    
    
}

function Check_position_fire_monsters()
{
           if(moveing==true){
            balls.forEach(function(obj2){ 
                if(obj2.tagName==="CANVAS")
            { 
            ba = obj2;
            var fx2 = (parseFloat(ba.style["left"])+ba.style.width);
            var fx1 = (parseFloat(ba.style["left"]));
            var fy2 = (parseFloat(ba.style["top"])+ba.height);
            var fy1 = (parseFloat(ba.style["top"]));
                 for (var i = 0; i < EnymiesArr.length; i++) {
                    var ex1 = (parseFloat(EnymiesArr[i].getCanv().style["left"]));
                    var ey1 = (parseFloat(EnymiesArr[i].getCanv().style["top"]));
                    var ex2 = (parseFloat(EnymiesArr[i].getCanv().style["left"])+EnymiesArr[i].getCanv().width);
                    var ey2 = (parseFloat(EnymiesArr[i].getCanv().style["top"])+EnymiesArr[i].getCanv().height);
                     //- ------- check position of baby ------------------------
                    if(((fx2>=ex1&&fx2<=ex2)||(fx1<=ex2&&fx1>=ex1))&&((fy1>=ey1&&fy1<=ey2)))
                     {
                      
                         try{
                         document.body.removeChild(EnymiesArr[i].getCanv());
                         document.body.removeChild(obj2);
                         balls.splice(balls.indexOf(obj2),1);
                         EnymiesArr.splice(EnymiesArr[i].indexOf(EnymiesArr[i]),1);
                             
                                   // ---------------- update energy ----------------
                                                if(Baby_Energy+10>0&&Baby_Energy+10<700)
                                                Baby_Energy+=10;
                                                $("#hp").css({"width":Baby_Energy+"px"});
                             
                          //$("#BabyCanvas").css({"box-shadow":"0px 0px 50px  green"},100);
                          //setTimeout(function(){$("#BabyCanvas").css({"box-shadow":"none","border":"none"},100);},200);
                             }catch(e){}
                     }
                     
                     if(parseFloat($("#blue"+(i+1)).css("left"))<-500)
                     {
                         try{
                              document.body.removeChild(EnymiesArr[i].getCanv()); delete EnymiesArr[i].getCanv();
                              document.body.removeChild(obj2);  delete obj2; 
                              balls.splice(balls.indexOf(obj2),1);
                         }catch(e){}
                     }
                 }
                
                
                
                
            for (var i = 0; i < GreenMonstersArr.length; i++) {
                     
                     
                     var ex1 = (parseFloat(GreenMonstersArr[i].getCanv().style["left"]));
                    var ey1 = (parseFloat(GreenMonstersArr[i].getCanv().style["top"]));
                    var ex2 = (parseFloat(GreenMonstersArr[i].getCanv().style["left"])+GreenMonstersArr[i].getCanv().width);
                    var ey2 = (parseFloat(GreenMonstersArr[i].getCanv().style["top"])+GreenMonstersArr[i].getCanv().height);
                     //- ------- check position of baby ------------------------
                    if(((fx2>=ex1&&fx2<=ex2)||(fx1<=ex2&&fx1>=ex1))&&((fy1>=ey1&&fy1<=ey2)))
                     {
                         try{
                           
                             
                             
                              document.body.removeChild(GreenMonstersArr[i].getCanv());  
                             document.body.removeChild(obj2);
                              balls.splice(balls.indexOf(ba),1);
                              GreenMonstersArr.splice(GreenMonstersArr[i].indexOf(GreenMonstersArr[i]),1);  
                             
                             //-------------------- update energy ---------------
                              if(Baby_Energy+10>0&&Baby_Energy+10<700)
                                                Baby_Energy+=10;
                                                $("#hp").css({"width":Baby_Energy+"px"});
                             
                             
                          //$("#BabyCanvas").css({"box-shadow":"0px 0px 50px  yellow"},100);
                          //setTimeout(function(){$("#BabyCanvas").css({"box-shadow":"none","border":"none"},100);},200);
                             }catch(e){}
                     }
                     
                     
                     
                     if(parseFloat($("#green"+(i+1)).css("left"))+125<0)
                     {
                         try{
                      document.body.removeChild(GreenMonstersArr[i].getCanv());delete GreenMonstersArr[i].getCanv();
                             document.body.removeChild(obj2);  delete obj2; 
                              balls.splice(balls.indexOf(obj2),1);
                             }catch(e){}
                     }
                 }
                 //move the dragons with the background
                 for (var i = 0; i < DragonMonstersArr.length; i++) {
                     
                     var ex1 = (parseFloat(DragonMonstersArr[i].getCanv().style["left"]));
                    var ey1 = (parseFloat(DragonMonstersArr[i].getCanv().style["top"]));
                    var ex2 = (parseFloat(DragonMonstersArr[i].getCanv().style["left"])+DragonMonstersArr[i].getCanv().width);
                    var ey2 = (parseFloat(DragonMonstersArr[i].getCanv().style["top"])+DragonMonstersArr[i].getCanv().height);
                     //- ------- check position of baby ------------------------
                   if(((fx2>=ex1&&fx2<=ex2)||(fx1<=ex2&&fx1>=ex1))&&((fy1>=ey1&&fy1<=ey2)))
                     {
                         try{
                         document.body.removeChild(DragonMonstersArr[i].getCanv());
                          DragonMonstersArr.splice(DragonMonstersArr[i].indexOf(DragonMonstersArr[i]),1);
                              document.body.removeChild(obj2);  delete obj2; 
                              balls.splice(balls.indexOf(obj2),1);
                             
                             
                                //-------------------- update energy ---------------
                              if(Baby_Energy+10>0&&Baby_Energy+10<700)
                                                Baby_Energy+=10;
                                                $("#hp").css({"width":Baby_Energy+"px"});
                             
                             
                             
                          //$("#BabyCanvas").css({"box-shadow":"0px 0px 50px  aqua"},100);
                          //setTimeout(function(){$("#BabyCanvas").css({"box-shadow":"none","border":"none"},100);},200);
                             }catch(e){}
                     }
                     
                     
                     
                     if(parseFloat($("#dragon"+(i+1)).css("left"))+125<0)
                     {
                         try{
                      document.body.removeChild(DragonMonstersArr[i].getCanv());
                             }catch(e){}
                     }
                 } 
            }
            });
           }
}
























