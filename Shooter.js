class Shooter{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2
             }
             
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y,this.r, options)
		this.image = loadImage("polygon.png");
		this.smokeImage = loadImage("smoke.png");
		this.trajectory =[];
		World.add(world, this.body);
   }
	display(){		
        var shooterpos =this.body.position;		

		if(this.body.velocity.x > 10 && this.body.position.x > 200){
		  var position = [this.body.position.x, this.body.position.y];
		  this.trajectory.push(position);
		}
	   
	
		for(var i=0; i<this.trajectory.length; i++){
		  image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
		}
			push()
			translate(shooterpos.x, shooterpos.y);
			rectMode(CENTER)
			//strokeWeight(3);
			fill(255,255,255)
	
			imageMode(CENTER);
			image(this.image, 0,0,25,25)
			pop()
			
	}

}