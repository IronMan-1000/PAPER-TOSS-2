class Ground {
    constructor(x, y) {
      var options = {
          isStatic:true,
        
      }
      this.body = Matter.Bodies.rectangle(x, y,1540,17, options);

      
      World.add(world, this.body);
    }
    display(){
      rectMode(CENTER);
      fill("yellow");
      strokeWeight(4)
      stroke("RED")
      rect(this.body.position.x,this.body.position.y,1540,17);

    }
  };
  