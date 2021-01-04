class Block{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:0.1,
			density:1.5
             }
             
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		this.body = Bodies.rectangle(x,y,this.width,this.height,options)
		this.image = loadImage("block.jpg");
		World.add(world, this.body);
   }
	display(){		
        var blockpos =this.body.position;		
	
			push()
			translate(blockpos.x, blockpos.y);
			rectMode(CENTER)
			strokeWeight(1);
			fill(255,255,255)
	
			imageMode(CENTER);
			image(this.image, 0,0,40,40);
			pop()
			
	}
	
	
}