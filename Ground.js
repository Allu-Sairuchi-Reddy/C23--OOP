class Ground{
constructor(x,y,width,height){
    var gopt={
        isStatic:true
      }
       this.width=width;
       this.height=height;
      this.body=bodies.rectangle(x,y,width,height,gopt);
      wo.add(Myworld,this.body);
}
display(){
    var pos=this.body.position;
    rectMode(CENTER);
  rect(pos.x,pos.y,this.width,this.height);
}
}