function BlueEnemy(GameLayer, cleararr, monsterarr, monsterToBackarr, monsterToFrontarr) {
    var img = new Image();
    img.src = "images/BlueOne.png"

    this.Clear = function () {
        GameLayer.clearRect(cleararr[0], cleararr[1], cleararr[2], cleararr[3]);
    };
    stat = true;
    this.leftpos = 1200;
    count = 0;
    this.magnt = -1;
    monster = monsterarr;
    monsterToBack = monsterToBackarr;
    monsterToFront = monsterToFrontarr;


    img.onload = function () {
        monster[4] = this.leftpos;
        GameLayer.clearRect(monster[4] - 20, monster[5] - 20, 140, 140);
        GameLayer.drawImage(img, monster[0], monster[1], monster[2], monster[3], monster[4], monster[5], monster[6], monster[7]);

    };

    this.Draw = function () {
        if (count == 1000) {
            count = 0; this.magnt *= -1;
            if (stat) {
                monster[0] = monsterToBack[0];
                monster[1] = monsterToBack[1];
                monster[2] = monsterToBack[2];
                monster[3] = monsterToBack[3];
                monster[4] = monsterToBack[4];
                monster[5] = monsterToBack[5];
                monster[6] = monsterToBack[6];
                monster[7] = monsterToBack[7];
                stat = false;
            }
            else {
                monster[0] = monsterToFront[0];
                monster[1] = monsterToFront[1];
                monster[2] = monsterToFront[2];
                monster[3] = monsterToFront[3];
                monster[4] = monsterToFront[4];
                monster[5] = monsterToFront[5];
                monster[6] = monsterToFront[6];
                monster[7] = monsterToFront[7];
                stat = true;
            }
        }

        this.leftpos += 1 * this.magnt;
        monster[4] = this.leftpos;
        GameLayer.clearRect(monster[4] - 20, monster[5] - 20, 140, 140);
        GameLayer.drawImage(img, monster[0], monster[1], monster[2], monster[3], monster[4], monster[5], monster[6], monster[7]); //to char
        count++;
    };
}

function Monst(idcan, widthcan, heightcan, topcan, leftcan, zindexcan, positioncan, bordercan,clearArr,monsterArr,monsterToFrontArr,monsterToBackArr,Leftcoo,Limit,Init) {
    function leecoo() {  //used as class and object to can send it by refrence in methods
        this.value = Leftcoo;
    }
    this.init = Init;
    this.limit =this.init- Limit;
    var cleararr = clearArr;
    var monsterarr = monsterArr;
    var monsterToFrontarr = monsterToFrontArr;
    var monsterToBackarr = monsterToBackArr;
    var img = new Image();
    img.src = "images/BlueOne.png"
    function status() {//used as class and object to can send it by refrence in methods
        this.value = "true";
    }
    var canv = createCanvas(idcan, widthcan, heightcan, topcan, leftcan, zindexcan, positioncan, bordercan);
    var contex = canv.getContext("2d");
    leecoo.value = Leftcoo; //you have to make this inorder not to be undefiened
    status.value = "true";  //you have to make this inorder not to be undefiened
    //private functions
    function createCanvas(idcan, widthcan, heightcan, topcan, leftcan, zindexcan, positioncan, bordercan) {
        var canvas = document.createElement('canvas');
        canvas.id = idcan;
        canvas.width = widthcan;
        canvas.height = heightcan;
        canvas.style.top = topcan + "px";
        canvas.style.left = leftcan + "px";
        canvas.style.zIndex = zindexcan;
        canvas.style.position = positioncan;
        canvas.style.border = bordercan;
        document.body.appendChild(canvas);
        return canvas;
    }
    this.getCanv=function(){
        return canv;
    }
    function update(status, leecoo, canv, init, limit, monster, monsterToFront, monsterToBack) {
        if (status.value === "true") {
            leecoo.value -= 10;
            
        }
        else if (status.value === "false") {
            leecoo.value += 10;
        }

        if (leecoo.value <= limit - canv.width && status.value === "true") {
            monster[0] = monsterToBack[0];
            monster[1] = monsterToBack[1];
            monster[2] = monsterToBack[2];
            monster[3] = monsterToBack[3];
            monster[4] = monsterToBack[4];
            monster[5] = monsterToBack[5];
            monster[6] = monsterToBack[6];
            monster[7] = monsterToBack[7];
            status.value = "false";
        }
        else if (leecoo.value >= init && status.value === "false") {
            monster[0] = monsterToFront[0];
            monster[1] = monsterToFront[1];
            monster[2] = monsterToFront[2];
            monster[3] = monsterToFront[3];
            monster[4] = monsterToFront[4];
            monster[5] = monsterToFront[5];
            monster[6] = monsterToFront[6];
            monster[7] = monsterToFront[7];
            status.value = "true";
        }
        canv.style.left = leecoo.value + "px";
        
    }
    function draw(img, cleararr, monsterarr) {
        contex.clearRect(cleararr[0], cleararr[1], cleararr[2], cleararr[3]);
        contex.drawImage(img, monsterarr[0], monsterarr[1], monsterarr[2], monsterarr[3], monsterarr[4], monsterarr[5], monsterarr[6], monsterarr[7]);
    }
    //when image load in the browser
    img.onload = function () {
        contex.clearRect(cleararr[0], cleararr[1], cleararr[2], cleararr[3]);
        contex.drawImage(img, monsterarr[0], monsterarr[1], monsterarr[2], monsterarr[3], monsterarr[4], monsterarr[5], monsterarr[6], monsterarr[7]);
    }
    //this to draw
    this.Draw = function () {
        //setInterval(function () {
            update(status, leecoo, canv, this.init, this.limit, monsterarr, monsterToFrontarr, monsterToBackarr);
            draw(img, cleararr, monsterarr);
        //}, IntervalSpeed);
    }
}

function GreenMonster(idcan, widthcan, heightcan, topcan, leftcan, zindexcan, positioncan, bordercan,clearArr,AwlMnzrArr,TanyMnzrArr,TaletMnzrArr) {
    var canv = createCanvas(idcan, widthcan, heightcan, topcan, leftcan, zindexcan, positioncan, bordercan);
    var contex = canv.getContext("2d");
    var img = new Image();
    img.src = "images/greenOne.png";

this.getCanv=function(){
        return canv;
    }
    this.CanvasId = idcan;
    img.onload = function () {
        contex.clearRect(clearArr[0], clearArr[1], clearArr[2], clearArr[3]);
        contex.drawImage(img, AwlMnzrArr[0], AwlMnzrArr[1], AwlMnzrArr[2], AwlMnzrArr[3], AwlMnzrArr[4], AwlMnzrArr[5], AwlMnzrArr[6], AwlMnzrArr[7]);//awl mnzr
    };
    this.drawAwl = function () {
        contex.clearRect(clearArr[0], clearArr[1], clearArr[2], clearArr[3]);
        contex.drawImage(img, AwlMnzrArr[0], AwlMnzrArr[1], AwlMnzrArr[2], AwlMnzrArr[3], AwlMnzrArr[4], AwlMnzrArr[5], AwlMnzrArr[6], AwlMnzrArr[7]);
    };

    this.drawTany = function () {
        contex.clearRect(clearArr[0], clearArr[1], clearArr[2], clearArr[3]);
        contex.drawImage(img, TanyMnzrArr[0], TanyMnzrArr[1], TanyMnzrArr[2], TanyMnzrArr[3], TanyMnzrArr[4], TanyMnzrArr[5], TanyMnzrArr[6], TanyMnzrArr[7]);
    };

    this.drawTalet = function () {
        contex.clearRect(clearArr[0], clearArr[1], clearArr[2], clearArr[3]);
        contex.drawImage(img, TaletMnzrArr[0], TaletMnzrArr[1], TaletMnzrArr[2], TaletMnzrArr[3], TaletMnzrArr[4], TaletMnzrArr[5], TaletMnzrArr[6], TaletMnzrArr[7]);
    };
    function createCanvas(idcan, widthcan, heightcan, topcan, leftcan, zindexcan, positioncan, bordercan) {
        var canvas = document.createElement('canvas');
        canvas.id = idcan;
        canvas.width = widthcan;
        canvas.height = heightcan;
        canvas.style.top = topcan + "px";
        canvas.style.left = leftcan + "px";
        canvas.style.zIndex = zindexcan;
        canvas.style.position = positioncan;
        canvas.style.border = bordercan;
        document.body.appendChild(canvas);
        return canvas;
    }
}

function DragonMonster(idcan, widthcan, heightcan, topcan, leftcan, zindexcan, positioncan, bordercan, clearArr, AwlMnzrArr, TanyMnzrArr, TaletMnzrArr,upCoo,Init,Limit) {
    var canv = createCanvas(idcan, widthcan, heightcan, topcan, leftcan, zindexcan, positioncan, bordercan);
    var contex = canv.getContext("2d");
    var img = new Image();
    img.src = "images/Dragon.png";

    this.CanvasId = idcan;

    function upcoo() {  //used as class and object to can send it by refrence in methods
        this.value = upCoo;
    }
    this.init = Init;
    this.limit = this.init - Limit;
    function status() {//used as class and object to can send it by refrence in methods
        this.value = "true";
    }

    
this.getCanv=function(){
        return canv;
    }
    img.onload = function () {
        contex.clearRect(clearArr[0], clearArr[1], clearArr[2], clearArr[3]);
        contex.drawImage(img,AwlMnzrArr[0],AwlMnzrArr[1],AwlMnzrArr[2],AwlMnzrArr[3],AwlMnzrArr[4],AwlMnzrArr[5],AwlMnzrArr[6],AwlMnzrArr[7]);//awl mnzr
    };

    this.drawAwl = function () {
        contex.clearRect(clearArr[0], clearArr[1], clearArr[2], clearArr[3]);
        contex.drawImage(img, AwlMnzrArr[0], AwlMnzrArr[1], AwlMnzrArr[2], AwlMnzrArr[3], AwlMnzrArr[4], AwlMnzrArr[5], AwlMnzrArr[6], AwlMnzrArr[7]);//awl mnzr
    };

    this.drawTany = function () {
        contex.clearRect(clearArr[0], clearArr[1], clearArr[2], clearArr[3]);
        contex.drawImage(img, TanyMnzrArr[0], TanyMnzrArr[1], TanyMnzrArr[2], TanyMnzrArr[3], TanyMnzrArr[4], TanyMnzrArr[5], TanyMnzrArr[6], TanyMnzrArr[7]);//tany mnzr
    };


    this.drawTalet = function () {
        contex.clearRect(clearArr[0], clearArr[1], clearArr[2], clearArr[3]);
        contex.drawImage(img, TaletMnzrArr[0], TaletMnzrArr[1], TaletMnzrArr[2], TaletMnzrArr[3], TaletMnzrArr[4], TaletMnzrArr[5], TaletMnzrArr[6], TaletMnzrArr[7]);//talet mnzr
    };
    
    this.drawMove = function () {
        update(status,upcoo,this.limit,this.init);
    };

    upcoo.value = upCoo; //you have to make this inorder not to be undefiened
    status.value = "true";  //you have to make this inorder not to be undefiened
    function update(status, upcoo, limit, init) {
        if (status.value === "true") {
            upcoo.value -= 10;
        }
        else if (status.value === "false") {
            upcoo.value += 10;
        }

        if (upcoo.value <= limit && status.value === "true") {
            status.value = "false";
        }
        else if (upcoo.value >= init && status.value === "false") {
            status.value = "true";
        }
        canv.style.top = upcoo.value + "px";
    }

    function createCanvas(idcan, widthcan, heightcan, topcan, leftcan, zindexcan, positioncan, bordercan) {
        var canvas = document.createElement('canvas');
        canvas.id = idcan;
        canvas.width = widthcan;
        canvas.height = heightcan;
        canvas.style.top = topcan + "px";
        canvas.style.left = leftcan + "px";
        canvas.style.zIndex = zindexcan;
        canvas.style.position = positioncan;
        canvas.style.border = bordercan;
        document.body.appendChild(canvas);
        return canvas;
    }
}