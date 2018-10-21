
//-----------------------------------------          Drawing level one                    -----------------------
     
var EnymiesArr = [];
     //**********blue monster**************
var monst1 = new Monst("blue1", 120, 120, window.innerHeight - 120 - 400, window.innerWidth - 120 - 200, 500, "fixed", "none", [0, 0, 120, 120], [0, 60, 100, 118, 0, 0, 120, 200], [0, 60, 100, 118, 0, 0, 120, 200], [0, 0, 100, 59, 0, 0, 110, 95], window.innerWidth - 120 - 200, 500, window.innerWidth - 120 - 200);

var monst2 = new Monst("blue2", 120, 120, window.innerHeight - 120 - 200, window.innerWidth - 120 + 500, 500, "fixed", "none", [0, 0, 120, 120], [0, 60, 100, 118, 0, 0, 120, 200], [0, 60, 100, 118, 0, 0, 120, 200], [0, 0, 100, 59, 0, 0, 110, 95], window.innerWidth - 120 + 500, 500, window.innerWidth - 120 + 500);
var monst3 = new Monst("blue3", 120, 120, window.innerHeight - 120 - 200, window.innerWidth - 120 + 900, 500, "fixed", "none", [0, 0, 120, 120], [0, 60, 100, 118, 0, 0, 120, 200], [0, 60, 100, 118, 0, 0, 120, 200], [0, 0, 100, 59, 0, 0, 110, 95], window.innerWidth - 120 + 900, 250, window.innerWidth - 120 + 900);
var monst4 = new Monst("blue4", 120, 120, window.innerHeight - 120 - 250, window.innerWidth - 120 + 1500, 500, "fixed", "none", [0, 0, 120, 120], [0, 60, 100, 118, 0, 0, 120, 200], [0, 60, 100, 118, 0, 0, 120, 200], [0, 0, 100, 59, 0, 0, 110, 95], window.innerWidth - 120 + 1500, 300, window.innerWidth - 120 + 1500);
var monst5 = new Monst("blue5", 120, 120, window.innerHeight - 120 - 350, window.innerWidth - 120 + 3000, 500, "fixed", "none", [0, 0, 120, 120], [0, 60, 100, 118, 0, 0, 120, 200], [0, 60, 100, 118, 0, 0, 120, 200], [0, 0, 100, 59, 0, 0, 110, 95], window.innerWidth - 120 + 3000, 400, window.innerWidth - 120 + 3000);
var monst6 = new Monst("blue6", 120, 120, window.innerHeight - 120 - 300, window.innerWidth - 120 + 3700, 500, "fixed", "none", [0, 0, 120, 120], [0, 60, 100, 118, 0, 0, 120, 200], [0, 60, 100, 118, 0, 0, 120, 200], [0, 0, 100, 59, 0, 0, 110, 95], window.innerWidth - 120 + 3700, 300, window.innerWidth - 120 + 3700);
var monst7 = new Monst("blue7", 120, 120, window.innerHeight - 120 - 200, window.innerWidth - 120 + 4400, 500, "fixed", "none", [0, 0, 120, 120], [0, 60, 100, 118, 0, 0, 120, 200], [0, 60, 100, 118, 0, 0, 120, 200], [0, 0, 100, 59, 0, 0, 110, 95], window.innerWidth - 120 + 4400, 500, window.innerWidth - 120 + 4400);
var monst8 = new Monst("blue8", 120, 120, window.innerHeight - 120 - 200, window.innerWidth - 120 + 5500, 500, "fixed", "none", [0, 0, 120, 120], [0, 60, 100, 118, 0, 0, 120, 200], [0, 60, 100, 118, 0, 0, 120, 200], [0, 0, 100, 59, 0, 0, 110, 95], window.innerWidth - 120 + 5500, 300, window.innerWidth - 120 + 5500);
var monst9 = new Monst("blue9", 120, 120, window.innerHeight - 120 - 300, window.innerWidth - 120 + 6100, 500, "fixed", "none", [0, 0, 120, 120], [0, 60, 100, 118, 0, 0, 120, 200], [0, 60, 100, 118, 0, 0, 120, 200], [0, 0, 100, 59, 0, 0, 110, 95], window.innerWidth - 120 + 6100, 400, window.innerWidth - 120 + 6100);
var monst10 = new Monst("blue10", 120, 120, window.innerHeight - 120 - 300, window.innerWidth - 120 + 7200, 500, "fixed", "none", [0, 0, 120, 120], [0, 60, 100, 118, 0, 0, 120, 200], [0, 60, 100, 118, 0, 0, 120, 200], [0, 0, 100, 59, 0, 0, 110, 95], window.innerWidth - 120 + 7200, 400, window.innerWidth - 120 + 7200);
var monst11 = new Monst("blue11", 120, 120, window.innerHeight - 120 - 250, window.innerWidth - 120 + 8400, 500, "fixed", "none", [0, 0, 120, 120], [0, 60, 100, 118, 0, 0, 120, 200], [0, 60, 100, 118, 0, 0, 120, 200], [0, 0, 100, 59, 0, 0, 110, 95], window.innerWidth - 120 + 8400, 300, window.innerWidth - 120 + 8400);
var monst12 = new Monst("blue12", 120, 120, window.innerHeight - 120 - 450, window.innerWidth - 120 + 8400, 500, "fixed", "none", [0, 0, 120, 120], [0, 60, 100, 118, 0, 0, 120, 200], [0, 60, 100, 118, 0, 0, 120, 200], [0, 0, 100, 59, 0, 0, 110, 95], window.innerWidth - 120 + 8400, 200, window.innerWidth - 120 + 8400);
var monst13 = new Monst("blue13", 120, 120, window.innerHeight - 120 - 250, window.innerWidth - 120 + 9650, 500, "fixed", "none", [0, 0, 120, 120], [0, 60, 100, 118, 0, 0, 120, 200], [0, 60, 100, 118, 0, 0, 120, 200], [0, 0, 100, 59, 0, 0, 110, 95], window.innerWidth - 120 + 9650, 500, window.innerWidth - 120 + 9650);
var monst14 = new Monst("blue14", 120, 120, window.innerHeight - 120 - 300, window.innerWidth - 120 + 10200, 500, "fixed", "none", [0, 0, 120, 120], [0, 60, 100, 118, 0, 0, 120, 200], [0, 60, 100, 118, 0, 0, 120, 200], [0, 0, 100, 59, 0, 0, 110, 95], window.innerWidth - 120 + 10200, 400, window.innerWidth - 120 + 10200);
var monst15 = new Monst("blue15", 120, 120, window.innerHeight - 120 - 350, window.innerWidth - 120 + 10730, 500, "fixed", "none", [0, 0, 120, 120], [0, 60, 100, 118, 0, 0, 120, 200], [0, 60, 100, 118, 0, 0, 120, 200], [0, 0, 100, 59, 0, 0, 110, 95], window.innerWidth - 120 + 10730, 80, window.innerWidth - 120 + 10730);
var monst16 = new Monst("blue16", 120, 120, window.innerHeight - 120 - 350, window.innerWidth - 120 + 12000, 500, "fixed", "none", [0, 0, 120, 120], [0, 60, 100, 118, 0, 0, 120, 200], [0, 60, 100, 118, 0, 0, 120, 200], [0, 0, 100, 59, 0, 0, 110, 95], window.innerWidth - 120 + 12000, 200, window.innerWidth - 120 + 12000);

     //******************Green Monster******************
var GreenMonstersArr = [];
var greenOne1 = new GreenMonster("green1", 100, 100, window.innerHeight-100-70,window.innerWidth-100-500, 500, "fixed", "none", [0, 0, 100, 100], [0, 0, 53, 64, 0, 0, 100, 100], [54, 10, 54, 54, 0, 0, 100, 100], [109, 0, 50, 64, 0, 0, 100, 100]);
var greenOne2 = new GreenMonster("green2", 100, 100, window.innerHeight - 100 - 70, window.innerWidth - 100, 500, "fixed", "none", [0, 0, 100, 100], [0, 0, 53, 64, 0, 0, 100, 100], [54, 10, 54, 54, 0, 0, 100, 100], [109, 0, 50, 64, 0, 0, 100, 100]);
var greenOne3 = new GreenMonster("green3", 100, 100, window.innerHeight - 100 - 70, window.innerWidth - 100 + 300, 500, "fixed", "none", [0, 0, 100, 100], [0, 0, 53, 64, 0, 0, 100, 100], [54, 10, 54, 54, 0, 0, 100, 100], [109, 0, 50, 64, 0, 0, 100, 100]);
var greenOne4 = new GreenMonster("green4", 100, 100, window.innerHeight - 100 - 70, window.innerWidth - 100 + 1400, 500, "fixed", "none", [0, 0, 100, 100], [0, 0, 53, 64, 0, 0, 100, 100], [54, 10, 54, 54, 0, 0, 100, 100], [109, 0, 50, 64, 0, 0, 100, 100]);
var greenOne5 = new GreenMonster("green5", 100, 100, window.innerHeight - 100 - 70, window.innerWidth - 100 + 1800, 500, "fixed", "none", [0, 0, 100, 100], [0, 0, 53, 64, 0, 0, 100, 100], [54, 10, 54, 54, 0, 0, 100, 100], [109, 0, 50, 64, 0, 0, 100, 100]);
var greenOne6 = new GreenMonster("green6", 100, 100, window.innerHeight - 100 - 70, window.innerWidth - 100 + 2800, 500, "fixed", "none", [0, 0, 100, 100], [0, 0, 53, 64, 0, 0, 100, 100], [54, 10, 54, 54, 0, 0, 100, 100], [109, 0, 50, 64, 0, 0, 100, 100]);
var greenOne7 = new GreenMonster("green7", 100, 100, window.innerHeight - 100 - 70, window.innerWidth - 100 + 3500, 500, "fixed", "none", [0, 0, 100, 100], [0, 0, 53, 64, 0, 0, 100, 100], [54, 10, 54, 54, 0, 0, 100, 100], [109, 0, 50, 64, 0, 0, 100, 100]);
var greenOne8 = new GreenMonster("green8", 100, 100, window.innerHeight - 100 - 70, window.innerWidth - 100 + 5200, 500, "fixed", "none", [0, 0, 100, 100], [0, 0, 53, 64, 0, 0, 100, 100], [54, 10, 54, 54, 0, 0, 100, 100], [109, 0, 50, 64, 0, 0, 100, 100]);
var greenOne9 = new GreenMonster("green9", 100, 100, window.innerHeight - 100 - 70, window.innerWidth - 100 + 5900, 500, "fixed", "none", [0, 0, 100, 100], [0, 0, 53, 64, 0, 0, 100, 100], [54, 10, 54, 54, 0, 0, 100, 100], [109, 0, 50, 64, 0, 0, 100, 100]);
var greenOne10 = new GreenMonster("green10", 100, 100, window.innerHeight - 100 - 70, window.innerWidth - 100 + 6600, 500, "fixed", "none", [0, 0, 100, 100], [0, 0, 53, 64, 0, 0, 100, 100], [54, 10, 54, 54, 0, 0, 100, 100], [109, 0, 50, 64, 0, 0, 100, 100]);
var greenOne11 = new GreenMonster("green11", 100, 100, window.innerHeight - 100 - 70, window.innerWidth - 100 + 7350, 500, "fixed", "none", [0, 0, 100, 100], [0, 0, 53, 64, 0, 0, 100, 100], [54, 10, 54, 54, 0, 0, 100, 100], [109, 0, 50, 64, 0, 0, 100, 100]);
var greenOne12 = new GreenMonster("green12", 100, 100, window.innerHeight - 100 - 70, window.innerWidth - 100 + 8800, 500, "fixed", "none", [0, 0, 100, 100], [0, 0, 53, 64, 0, 0, 100, 100], [54, 10, 54, 54, 0, 0, 100, 100], [109, 0, 50, 64, 0, 0, 100, 100]);
var greenOne13 = new GreenMonster("green13", 100, 100, window.innerHeight - 100 - 70, window.innerWidth - 100 + 9200, 500, "fixed", "none", [0, 0, 100, 100], [0, 0, 53, 64, 0, 0, 100, 100], [54, 10, 54, 54, 0, 0, 100, 100], [109, 0, 50, 64, 0, 0, 100, 100]);
var greenOne14 = new GreenMonster("green14", 100, 100, window.innerHeight - 100 - 70, window.innerWidth - 100 + 9500, 500, "fixed", "none", [0, 0, 100, 100], [0, 0, 53, 64, 0, 0, 100, 100], [54, 10, 54, 54, 0, 0, 100, 100], [109, 0, 50, 64, 0, 0, 100, 100]);
var greenOne15 = new GreenMonster("green15", 100, 100, window.innerHeight - 100 - 70, window.innerWidth - 100 + 9900, 500, "fixed", "none", [0, 0, 100, 100], [0, 0, 53, 64, 0, 0, 100, 100], [54, 10, 54, 54, 0, 0, 100, 100], [109, 0, 50, 64, 0, 0, 100, 100]);
var greenOne16 = new GreenMonster("green16", 100, 100, window.innerHeight - 100 - 70, window.innerWidth - 100 + 10600, 500, "fixed", "none", [0, 0, 100, 100], [0, 0, 53, 64, 0, 0, 100, 100], [54, 10, 54, 54, 0, 0, 100, 100], [109, 0, 50, 64, 0, 0, 100, 100]);
var greenOne17 = new GreenMonster("green17", 100, 100, window.innerHeight - 100 - 70, window.innerWidth - 100 + 11100, 500, "fixed", "none", [0, 0, 100, 100], [0, 0, 53, 64, 0, 0, 100, 100], [54, 10, 54, 54, 0, 0, 100, 100], [109, 0, 50, 64, 0, 0, 100, 100]);

     //******************* Dragon Monster****************

var DragonMonstersArr = [];
var DragonMonster1 = new DragonMonster("dragon1", 120, 120, window.innerHeight - 120 - 120, window.innerWidth - 120 + 2100, 500, "fixed", "none", [0, 0, 120, 120], [0, 0, 125, 92, 0, 0, 120, 120], [126, 0, 132, 92, 0, 0, 120, 120], [257, 0, 122, 92, 0, 0, 120, 120], window.innerHeight - 120 - 120, window.innerHeight - 120 - 120, 300);
var DragonMonster2 = new DragonMonster("dragon2", 120, 120, window.innerHeight - 120 - 120, window.innerWidth - 120 + 4600, 500, "fixed", "none", [0, 0, 120, 120], [0, 0, 125, 92, 0, 0, 120, 120], [126, 0, 132, 92, 0, 0, 120, 120], [257, 0, 122, 92, 0, 0, 120, 120], window.innerHeight - 120 - 120, window.innerHeight - 120 - 120, 400);
var DragonMonster3 = new DragonMonster("dragon3", 120, 120, window.innerHeight - 120 - 120, window.innerWidth - 120 + 4850, 500, "fixed", "none", [0, 0, 120, 120], [0, 0, 125, 92, 0, 0, 120, 120], [126, 0, 132, 92, 0, 0, 120, 120], [257, 0, 122, 92, 0, 0, 120, 120], window.innerHeight - 120 - 120, window.innerHeight - 120 - 120, 200);
var DragonMonster4 = new DragonMonster("dragon4", 120, 120, window.innerHeight - 120 - 120, window.innerWidth - 120 + 6400, 500, "fixed", "none", [0, 0, 120, 120], [0, 0, 125, 92, 0, 0, 120, 120], [126, 0, 132, 92, 0, 0, 120, 120], [257, 0, 122, 92, 0, 0, 120, 120], window.innerHeight - 120 - 120, window.innerHeight - 120 - 120, 500);
var DragonMonster5 = new DragonMonster("dragon5", 120, 120, window.innerHeight - 120 - 160, window.innerWidth - 120 + 7700, 500, "fixed", "none", [0, 0, 120, 120], [0, 0, 125, 92, 0, 0, 120, 120], [126, 0, 132, 92, 0, 0, 120, 120], [257, 0, 122, 92, 0, 0, 120, 120], window.innerHeight - 120 - 160, window.innerHeight - 120 - 160, 200);
var DragonMonster6 = new DragonMonster("dragon6", 120, 120, window.innerHeight - 120 - 130, window.innerWidth - 120 + 8600, 500, "fixed", "none", [0, 0, 120, 120], [0, 0, 125, 92, 0, 0, 120, 120], [126, 0, 132, 92, 0, 0, 120, 120], [257, 0, 122, 92, 0, 0, 120, 120], window.innerHeight - 120 - 130, window.innerHeight - 120 - 130, 300);
var DragonMonster7 = new DragonMonster("dragon7", 120, 120, window.innerHeight - 120 - 130, window.innerWidth - 120 + 10400, 500, "fixed", "none", [0, 0, 120, 120], [0, 0, 125, 92, 0, 0, 120, 120], [126, 0, 132, 92, 0, 0, 120, 120], [257, 0, 122, 92, 0, 0, 120, 120], window.innerHeight - 120 - 130, window.innerHeight - 120 - 130, 400);
var DragonMonster8 = new DragonMonster("dragon8", 120, 120, window.innerHeight - 120 - 140, window.innerWidth - 120 + 10900, 500, "fixed", "none", [0, 0, 120, 120], [0, 0, 125, 92, 0, 0, 120, 120], [126, 0, 132, 92, 0, 0, 120, 120], [257, 0, 122, 92, 0, 0, 120, 120], window.innerHeight - 120 - 140, window.innerHeight - 120 - 140, 500);
var DragonMonster9 = new DragonMonster("dragon9", 120, 120, window.innerHeight - 120 - 140, window.innerWidth - 120 + 11400, 500, "fixed", "none", [0, 0, 120, 120], [0, 0, 125, 92, 0, 0, 120, 120], [126, 0, 132, 92, 0, 0, 120, 120], [257, 0, 122, 92, 0, 0, 120, 120], window.innerHeight - 120 - 140, window.innerHeight - 120 - 140, 500);


EnymiesArr.push(monst1);
EnymiesArr.push(monst2);
EnymiesArr.push(monst3);
EnymiesArr.push(monst4);
EnymiesArr.push(monst5);
EnymiesArr.push(monst6);
EnymiesArr.push(monst7);
EnymiesArr.push(monst8);
EnymiesArr.push(monst9);
EnymiesArr.push(monst10);
EnymiesArr.push(monst11);
EnymiesArr.push(monst12);
EnymiesArr.push(monst13);
EnymiesArr.push(monst14);
EnymiesArr.push(monst15);
EnymiesArr.push(monst16);
GreenMonstersArr.push(greenOne1);
GreenMonstersArr.push(greenOne2);
GreenMonstersArr.push(greenOne3);
GreenMonstersArr.push(greenOne4);
GreenMonstersArr.push(greenOne5);
GreenMonstersArr.push(greenOne6);
GreenMonstersArr.push(greenOne7);
GreenMonstersArr.push(greenOne8);
GreenMonstersArr.push(greenOne9);
GreenMonstersArr.push(greenOne10);
GreenMonstersArr.push(greenOne11);
GreenMonstersArr.push(greenOne12);
GreenMonstersArr.push(greenOne13);
GreenMonstersArr.push(greenOne14);
GreenMonstersArr.push(greenOne15);
GreenMonstersArr.push(greenOne16);
GreenMonstersArr.push(greenOne17);
DragonMonstersArr.push(DragonMonster1);
DragonMonstersArr.push(DragonMonster2);
DragonMonstersArr.push(DragonMonster3);
DragonMonstersArr.push(DragonMonster4);
DragonMonstersArr.push(DragonMonster5);
DragonMonstersArr.push(DragonMonster6);
DragonMonstersArr.push(DragonMonster7);
DragonMonstersArr.push(DragonMonster8);
DragonMonstersArr.push(DragonMonster9);

 function a()
     {
setTimeout(function () {if(moveing==true){
    window.requestAnimationFrame(a);
    setTimeout(function () {
        for(var i=0;i<GreenMonstersArr.length;i++)
        {
            GreenMonstersArr[i].drawAwl();
            
        }
        for(var i=0;i<DragonMonstersArr.length;i++)
        {
            DragonMonstersArr[i].drawAwl();
        }
    }, 200);

    setTimeout(function () {
        for(var i=0;i<GreenMonstersArr.length;i++)
        {
            GreenMonstersArr[i].drawTany();
        }
        for(var i=0;i<DragonMonstersArr.length;i++)
        {
            DragonMonstersArr[i].drawTany();
        }
    }, 400);

    setTimeout(function () {
        for(var i=0;i<GreenMonstersArr.length;i++)
        {
            GreenMonstersArr[i].drawTalet();
        }
        for(var i=0;i<DragonMonstersArr.length;i++)
        {
            DragonMonstersArr[i].drawTalet();
        }
    }, 800);
    setTimeout(function () {
        for(var i=0;i<GreenMonstersArr.length;i++)
        {
            GreenMonstersArr[i].drawTany();
        }
        for(var i=0;i<DragonMonstersArr.length;i++)
        {
            DragonMonstersArr[i].drawTany();
        }
    }, 1600);

}}, 2000);
     }

setInterval(
                    function () 
                    {
                        
                        if(moveing==true){
                                for(var i=0;i<EnymiesArr.length;i++)
                                {
                                    EnymiesArr[i].Draw();
                                }
                                for(var i=0;i<DragonMonstersArr.length;i++)
                                {
                                    DragonMonstersArr[i].drawMove();
                                
                                }
                        }
                    }
, 1000 / 32);
    
   
   

     
     
     
     
     
     