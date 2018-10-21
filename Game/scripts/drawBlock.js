//  width : 70*count  , height : 70 || width : 70 , height : 70* count 
var blocks = [];
function Block(x,y,style,count,id)
{
    this.X1 = 0.0;
    this.Y1 =0.0;
    this.X2 = 0.0;
    this.Y2 =0.0;
    this.Style = style; // get only
    this.count = count; // get only 
    this.ID= "#"+id;
    var block = document.createElement("canvas");
    block.setAttribute("id",id);
    block.style.position="fixed";
    block.style.left=x+"px";
    block.style.border="1px solid red";
    block.style.top=y+"px";
    context = block.getContext("2d");
    this.element = block;
    
    if(style=="horz") // horizental
    {
      this.element.setAttribute("width",70*count);
      this.element.setAttribute("height",70);
      for(var i = 0;i<count ;i++ )
      {
         context.drawImage(imga,2989,0,110,100,i*70,0,70,70);
      }
    }
    else // vertical
    {
      this.element.setAttribute("width",70);
      this.element.setAttribute("height",70*3);
      for(var i = 0;i<count ;i++ )
      {
       context.drawImage(imga,2989,0,110,100,0,i*70,70,70);
      }
    }
    $("body").append(this.element);
      blocks.push(this);
    this.setX = function(x){ this.element.style.left=x+"px" ; this.X1=x; this.X2=this.X1+this.element.width; };
    this.setY = function(y){ this.element.style.top=y+"px" ; this.Y1=y; this.Y2=this.Y1+this.element.height;};
    this.getX = function(){return this.X1;     };
    this.getY = function(){return this.Y1;     };

}
function draw_blocks()
{
      
      var block1 = new Block(10,10,"horz",3,"bk1");
      var block1 = new Block(10,10,"vert",3,"bk2");


 }
function update_location_blocks(s)
{
    blocks.forEach(function(obj){
     obj.setX(obj.getX()-s);
        
        // hidden -- remove |o
     if(obj.X2<0){ document.body.removeChild(obj.element); blocks.splice(blocks.indexOf(obj),1); }
      
    });
    
}
function check_block_ballon_colision()
{
     blocks.forEach(function(obj){
         
                var Bx1= obj.X1;
                var By1= obj.Y1;
                var Bx2= obj.X2+obj.element.width;
                var By2= obj.Y2+obj.element.height;
                ballons.forEach(function(el)
                {
                    
                    var ob = el.can;
                    var blnx1 = (parseFloat(ob.style["left"]));
                    var blny1 = (parseFloat(ob.style["top"]));
                    var blnx2 = (parseFloat(ob.style["left"])+ob.width);
                    var blny2 = (parseFloat(ob.style["top"])+ob.height);
                    if(blnx1>=Bx1&&blnx1<=Bx2)
                    {   
                        ob.setAttribute("vy",(-1*parseFloat(ob.getAttribute("vy")))+"");  
                        ob.setAttribute("vx",(-1*parseFloat(ob.getAttribute("vx")))+"");
                        var vx = parseFloat(ob.getAttribute("vx"));
                        var vy = parseFloat(ob.getAttribute("vy"));
                        $(ob.ID+"").css({"left":"+="+vx+"px","top":"+="+vy+"px"});
                    }
                      
                    
                });
     });
}

     