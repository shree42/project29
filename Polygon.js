class Polygon{
    constructor(x, y, width, height,r) {
        var options = {
            
        
                     
        }
        this.body = Bodies.circle(50, 200, 20, options);
        this.image=loadImage("polygon.png");
        this.r=r;
        this.width=width
        this.height=height

        
        
    
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        imageMode(CENTER);
			
			image(this.image, 0,0,this.r, this.r)
        
        
       
        circle(0,0,20);
        pop();
      }
}
