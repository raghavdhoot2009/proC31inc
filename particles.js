class particle {
    constructor(x,y,r){
    
    var options = {
    restitution:0.4
    }
    
    
    this.r=r;
    this.body=Bodies.circle(this.x,this.y,this.r,options);
    this.color=color( random(0, 255) , random(0, 255) , random(0, 255));
    World.add(world,this.body);
    
    }
    display(){
     var body=this.body.position;
     var angle = this.body.angle;
    
     push();
     translate(body.x,body.y);
     rotate(angle);
     noStroke();
     fill(this.color);
     ellipseMode(RADIUS);
     ellipse(0,0,this.r,this.r);
     pop();
    
    
    }
    
    } 
    