class Box{
    constructor(x,y,width,height){
        var  bopt={
            restitution:0.8,
            density:1,
            friction:1.0
          }
           this.width=width;
           this.height=height;
          this.body=bodies.rectangle(x,y,width,height,bopt);
          wo.add(Myworld,this.body);
    }
    display(){
        var angle=this.body.angle;
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
      rect(0,0,this.width,this.height);
      pop();
    }
}