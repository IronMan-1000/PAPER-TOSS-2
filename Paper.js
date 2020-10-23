class Paper
{
constructor(x,y,r)	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
	
		this.body=Bodies.circle(this.x, this.y, 20, options)
        this.r=70;
        this.image=loadImage('paper.png')
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
            translate(paperpos.x, paperpos.y);
            rotate(this.body.angle);
			imageMode(CENTER)
            image(this.image,0,0,this.width,this.height)
            pop()
	}
}