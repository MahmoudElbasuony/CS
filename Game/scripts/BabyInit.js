function resumefunc()
{
    menu_open=false;
    $("#menu").animate({"width":"0px","height":"0px"},1000,
                       function(){$("body").remove("#menu"); $("#input").focus(); moveing=true;  $("#menu").css("display","hidden");        });
    
                        
}

function Exitfunc()
{
    menu_open=false;
    $("#menu").animate({"width":"0px","height":"0px"},1000,
                       function(){$("body").remove("#menu"); $("#input").focus(); moveing=false;
                        $("#menu").css("display","hidden");                                             
                        clearInterval(play);
                        var div  = document.createElement("div");
                        div.setAttribute("id","picture");
                        div.style["width"]=(window.innerWidth-5)+"px";
                        div.style["height"]="0px";//
                        div.style["border"]="1px solid silver";
                        div.setAttribute("id","picture");
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

var menu_open=false;
function menu_creation()
{
                        menu_open=true;
                        moveing=false;
//                        ballons.forEach(function(ob){ document.body.removeChild(ob); });
//                        ballons.splice(ballons.indexOf(ballons[0]),ballons.length);
                      //  clearInterval(play);
                        
                        var div  = document.createElement("div");
                        div.setAttribute("id","#menu");
                        div.style["width"]=0;
                        div.style["height"]=0;
                        div.style["border-radius"]="50px";
                        div.style["border"]="1px solid silver";
                        div.setAttribute("id","menu");
                        div.style["position"]="absolute";
                        div.style["top"]="100px";
                        div.style["z-index"]="100000000000";
                        div.style["background-image"]="url(images/back.jpg)";
                        div.style["background-repeat"]="no-repeat";
                        div.style["background-size"]="100% 100%";
                        div.style["left"]="100px";
                        div.style["overflow"]="hidden";
                          
                        var resume  = document.createElement("input");
                        resume.setAttribute("type","button");
                        resume.setAttribute("id","resume");
                        resume.setAttribute("value","Resume");
                        resume.style["width"]="200px";
                        resume.style["height"]="50px";
                         resume.style["z-index"]="100000000000";
                        resume.style["position"]="absolute";
                        resume.style["top"]="50px";
                        resume.style["left"]="500px";
                        resume.style["cursor"]="pointer";
                         resume.style["outline"]="none";
                        resume.style["border-radius"]="20px";
                        resume.style["font-size"]="20px";
                        resume.style["font-weight"]="bold";
                        resume.addEventListener("click",resumefunc,true);


    
    
                        var Exit  = document.createElement("input");
                        Exit.setAttribute("type","button");
                        Exit.setAttribute("id","Exit");
                        Exit.setAttribute("value","Exit"); 
                         Exit.style["width"]="200px";
                        Exit.style["height"]="50px";
                         Exit.style["z-index"]="100000000000";
                        Exit.style["border-radius"]="20px";
                        Exit.style["position"]="absolute";
                        Exit.style["top"]="120px";
                        Exit.style["left"]=resume.style.left;
                       Exit.style["cursor"]="pointer";
                        Exit.style["outline"]="none";
                      Exit.style["font-size"]="20px";
                     Exit.style["font-weight"]="bold";
                       Exit.addEventListener("click",Exitfunc,true);
    
    
    
    
    
    
    
                       
    
    
    
    
    
    
    
    
    
    
                        document.body.appendChild(div);
                          $("#menu").append(Exit);
                           $("#menu").append(resume);
                             
                               
    
    
                        $("#menu").animate({"width":(window.innerWidth-100)+"px",
                                             "height":(window.innerHeight-200)+"px","top":"50px","left":"50px"},500);
                        
              
}
























// vertical
function Motion(arr,step,owner)
{
    var res;
    if(owner == "head")
    {
   if(arr[5]>=20){ Baby.MotionHeadDirection=-step; }
    else if (arr[5]<=15){ Baby.MotionHeadDirection=step;  }
     arr[5]+=Baby.MotionHeadDirection;
    res =arr[5];
    }
    else if(owner=="leg1")
    {
        if(arr[5]>140){ Baby.MotionLeg1Direction=-step; }
    else if (arr[5]<138){ Baby.MotionLeg1Direction=step;  }
     arr[5]+=Baby.MotionLeg1Direction;
    res =arr[5];
    }
    else if(owner=="leg2")
    {
        if(arr[5]>145){ Baby.MotionLeg2Direction=-step; }
    else if (arr[5]<143){ Baby.MotionLeg2Direction=step;  }
     arr[5]+=Baby.MotionLeg2Direction;
    res =arr[5];
    }
    else if(owner=="body")
    {
    if(arr[5]>97){ Baby.MotionBodyDirection=-step; }
    else if (arr[5]<93){ Baby.MotionBodyDirection=step;  }
    arr[5]+=Baby.MotionBodyDirection;
    res =arr[5];
    }
    else if(owner=="flonka")
    {
    if(arr[5]>20){ Baby.MotionFlonkaDirection=-step; }
    else if (arr[5]<16){ Baby.MotionFlonkaDirection=step;  }
     arr[5]+=Baby.MotionFlonkaDirection;
    res =arr[5];
    }
    return arr[5];
}
// Horiznental
function WalkLeg(arr,step,owner)
{
    var res;
    if(Baby.WalkMove) 
    {
    if(owner == "leg1right") // leg 1 right
    {
    if(arr[4]>=55){ Baby.MotionLeg1rightHorz=-step; }
    else if (arr[4]<=35){ Baby.MotionLeg1rightHorz=step;  }
    arr[4]+=Baby.MotionLeg1rightHorz;
    res =arr[4];
    }
    else if(owner=="leg2left")
    {
        if(arr[4]>=40){ Baby.MotionLeg2leftHorz=-step; }
        else if (arr[4]<=15){ Baby.MotionLeg2leftHorz=step;  }
        arr[4]+=Baby.MotionLeg2leftHorz;
        res = arr[4];
    }
    else if(owner=="leg1left")
    {
        if(arr[4]>=40){ Baby.MotionLeg1leftHorz=-step; }
        else if (arr[4]<=15){ Baby.MotionLeg1leftHorz=step;  }
        arr[4]+=Baby.MotionLeg1leftHorz;
        res = arr[4];
    }
    else if(owner=="leg2right")  // leg2 right 
    {
        if(arr[4]>=55){ Baby.MotionLeg2rightHorz=-step; }
        else if (arr[4]<=35){ Baby.MotionLeg2rightHorz=step;  }
        arr[4]+=Baby.MotionLeg2rightHorz;
        res = arr[4];
    }
    }
    return arr[4];
}

var Baby = 
     {

        width: 0,
        height: 0,
        state:"stop",  // the currunt state is stopped  stop/play
        WalkMove:false,  // make the baby's leg move 
        jumping:false,
        //------------------------- direction --------------------------
        Direction:"right",
        X:0,
        Y:0,
        // --------------- vertical Motion------------------------
        MotionBodyDirection:0.03,
        //----------leg steps --------------
        MotionLeg1Direction:0.03,
        MotionLeg2Direction:0.03,
        MotionLeg1rightHorz:0.03, 
        MotionLeg2rightHorz:0.03,
        MotionLeg1leftHorz:0.03,
        MotionLeg2leftHorz:0.03,
        //-----------------------------------
        MotionHeadDirection:0.03,
        MotionFlonkaDirection:0.03,
        snapshot :  new Image(),
        //--------  head ---------------------------
        headleftopeneye : [0,0,270,290,6,15,100,100], headleftopeneyekey:false,  // initially left move
        headleftcloseeye : [275,0,275,290,6,15,100,100],  headleftcloseeyekey:false, //    |
        headrightopeneye : [755,0,278,290,6,15,100,100],    headrightopeneyekey:true,//   |   
        headrightcloseeye : [1033,0,278,290,6,15,100,100],  headrightcloseeyekey:false,//  |
        //--------- flonka  ------------------------
        flonkaleft :  [690, 0 ,70,125,48,20,22,20],   flonkaleftkey:false,   // initially left move with head direction
        flonkaright : [690,130,60,125,41,20,22,20],  flonkarightkey:true,
        //--------- leg ----------------------------
        leg1left : [547,123,105,129,45,140,50,40],  leg1leftkey:false, // initially left move with head direction
        leg1right : [1310,120,115,129,55,140,50,40],  leg1rightkey:true,
        //----------leg2---------------------------
        leg2left : [547,123,105,129,10,145,50,40],  leg2leftkey:false, // initially left move with head direction
        leg2right : [1310,120,115,129,35,145,50,40],  leg2rightkey:true,
        //----------- mid body ---------------------
        midbodyleft : [2940,110,160,120,10,95,70,70],  midbodyleftkey:false, // initially left move with head direction
        midbodyright : [3095,110,160,120,35,93,70,70],  midbodyrightkey:true,


         //------------------------------------------
          DrawBaby:function(BabyCanvas)
          {
             
            this.width=  parseInt($("#BabyCanvas").css("width"));
            this.height= parseInt($("#BabyCanvas").css("height")),
                // ------------------------------------- gun --------------------------
                     
              setInterval(function()    // open the eye and close it
              {
                  
 
                    Baby.headrightopeneyekey=false;
                    Baby.headrightcloseeye[5]= Baby.headrightopeneye[5];// to make the y position 
                    Baby.headrightcloseeye[4]= Baby.headrightopeneye[4];// to make the x position 
                    Baby.headrightcloseeyekey=true;  

                    setTimeout(function()
                    {
                                Baby.headrightcloseeye[5]= Baby.headrightopeneye[5]; // to make the y position 
                                Baby.headrightcloseeye[4]= Baby.headrightopeneye[4]; // to make the x position 
                                Baby.headrightopeneyekey=true;

                                Baby.headrightcloseeyekey=false;  

                    },100);
                  
              },2000); 
              this.snapshot.src= "images/S.png";
              //  load the image only once 
              this.snapshot.onload= function() 
              { 
                 setInterval(function()
                 { 
                     
                  BabyCanvas.clearRect(0,0,120,225);
                    // peprona.clearRect(0,0,peprona.canvas.width,peprona.canvas.height);
                    // -------------------------- flonka --------------------
                  if(Baby.flonkaleftkey==true)
                  {
                                           BabyCanvas.drawImage(Baby.snapshot,
                                           Baby.flonkaleft[0],Baby.flonkaleft[1],Baby.flonkaleft[2],Baby.flonkaleft[3],
                                           Baby.flonkaleft[4],Motion(Baby.flonkaleft,0.2,"flonka"),Baby.flonkaleft[6],Baby.flonkaleft[7]);
                  }
                  else if(Baby.flonkarightkey==true)
                  {
                                         BabyCanvas.drawImage(Baby.snapshot,
                                         Baby.flonkaright[0],Baby.flonkaright[1],Baby.flonkaright[2],Baby.flonkaright[3],
                                         Baby.flonkaright[4],Motion(Baby.flonkaright,0.2,"flonka"),Baby.flonkaright[6],Baby.flonkaright[7]);

                  }
                  //------------------------------------  leg1 -------------------
                  if(Baby.leg1leftkey==true)
                  {

                                          BabyCanvas.drawImage(Baby.snapshot,
                                          Baby.leg1left[0],Baby.leg1left[1],Baby.leg1left[2],Baby.leg1left[3],
                                          WalkLeg(Baby.leg1left,3,"leg1left"),
                                          Baby.leg1left[5],Baby.leg1left[6],Baby.leg1left[7]);
                  }
                  else if(Baby.leg1rightkey==true)
                  {
                                         BabyCanvas.drawImage(Baby.snapshot,
                                         Baby.leg1right[0],Baby.leg1right[1],Baby.leg1right[2],Baby.leg1right[3],
                                         WalkLeg(Baby.leg1right,3,"leg1right"),
                                         Baby.leg1right[5],Baby.leg1right[6],Baby.leg1right[7]);
                  }

                  //------------------------------------  mid body without fire -------------------

                  if(Baby.midbodyleftkey==true)
                  {

                                         BabyCanvas.drawImage(Baby.snapshot,
                                         Baby.midbodyleft[0],Baby.midbodyleft[1],Baby.midbodyleft[2],Baby.midbodyleft[3],
                                         Baby.midbodyleft[4],Motion(Baby.midbodyleft,0.08,"body"),Baby.midbodyleft[6],Baby.midbodyleft[7]);
                  }
                  else if(Baby.midbodyrightkey==true)
                  {
                                         BabyCanvas.drawImage(Baby.snapshot,
                                         Baby.midbodyright[0],Baby.midbodyright[1],Baby.midbodyright[2],Baby.midbodyright[3],
                                         Baby.midbodyright[4],Motion(Baby.midbodyright,0.08,"body"),Baby.midbodyright[6],Baby.midbodyright[7]);
                  }

                  //------------------------------------  leg2 -------------------
                  if(Baby.leg2leftkey==true)
                  {
                                    BabyCanvas.drawImage(Baby.snapshot,
                                    Baby.leg1left[0],Baby.leg1left[1],Baby.leg1left[2],Baby.leg1left[3],
                                    WalkLeg(Baby.leg2left,3,"leg2left"),Baby.leg2left[5],Baby.leg1left[6],Baby.leg1left[7]);
                  }
                  else if(Baby.leg2rightkey==true)
                  {
                                    BabyCanvas.drawImage(Baby.snapshot,
                                    Baby.leg2right[0],Baby.leg2right[1],Baby.leg2right[2],Baby.leg2right[3],
                                    WalkLeg(Baby.leg2right,3,"leg2right"),Baby.leg2right[5] ,Baby.leg2right[6],Baby.leg2right[7]);
                  }
                  //----------------------------- head ---------------------------------
                  if(Baby.headleftopeneyekey==true)
                  {
                        BabyCanvas.drawImage(Baby.snapshot,
                        Baby.headleftopeneye[0],Baby.headleftopeneye[1],Baby.headleftopeneye[2],Baby.headleftopeneye[3],
                        Baby.headleftopeneye[4], Motion(Baby.headleftopeneye,0.1,"head"),Baby.headleftopeneye[6],Baby.headleftopeneye[7]);

                  }
                  else if(Baby.headleftcloseeyekey==true)
                  {
                        BabyCanvas.drawImage(Baby.snapshot,
                        Baby.headleftcloseeye[0],Baby.headleftcloseeye[1],Baby.headleftcloseeye[2],Baby.headleftcloseeye[3],
                        Baby.headleftcloseeye[4],Baby.Motion(Baby.headleftcloseeye,0.2,"head"),Baby.headleftcloseeye[6],Baby.headleftcloseeye[7]);

                  }
                  else if(Baby.headrightopeneyekey==true)
                  {
                       BabyCanvas.drawImage(Baby.snapshot,
                       Baby.headrightopeneye[0],Baby.headrightopeneye[1],Baby.headrightopeneye[2],Baby.headrightopeneye[3],
                       Baby.headrightopeneye[4], Motion(Baby.headrightopeneye,0.2,"head"),Baby.headrightopeneye[6],Baby.headrightopeneye[7]);

                  }
                  else if(Baby.headrightcloseeyekey==true)
                  {
                       BabyCanvas.drawImage(Baby.snapshot,Baby.headrightcloseeye[0],
                       Baby.headrightcloseeye[1],Baby.headrightcloseeye[2],Baby.headrightcloseeye[3],
                       Baby.headrightcloseeye[4],Motion(Baby.headrightcloseeye,0.2,"head"),Baby.headrightcloseeye[6],Baby.headrightcloseeye[7]);
                  }
                     },1);

              }; 
              
          }
          
         
     }