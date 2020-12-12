class Box {
    constructor(x, y){
      var options={
        restitution: 0,
        friction: 0
      }
  
      this.body = Matter.Bodies.rectangle(x, y, 40, 40,options);
  
      World.add(world, this.body);
      
      this.image = loadImage("sprites/box.png");
      this.Visiblity = 255;
    }
  
    display(){
      if(this.body.speed < 3){
        imageMode(CENTER);
        fill("green");
        image(this.image,this.body.position.x, this.body.position.y,40,40);  
       }
       else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 12;
        tint(255,this.Visiblity);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        pop();
       
      }
    }
    
  score(){
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
    }
  }
  }