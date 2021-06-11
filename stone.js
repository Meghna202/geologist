class Stone{
	constructor(x,y, width, height){

	  var stone_options={
		restitution:0.8,
		friction: 0.9,
		density: 12
}
    this.body=Bodies.rectangle(x, y, width, height, stone_options)
    this.width=width;
	this.height=height;		
	World.add(world, this.body);

	}
	display(){		
		// push()
	    // translate(this.body.position.x, this.body.position.y);
		rectMode(CENTER);
        fill("brown");
		rect(this.body.position.x, this.body.position.y, this.width, this.height)
		// pop()
	}

}