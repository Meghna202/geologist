class Rubber{

	constructor(x, y, radius) {

		var rubber_options = {
			restitution:0.3,
			friction: 5,
			density: 1
		};
    	this.body = Bodies.circle(x, y, radius, rubber_options);
		this.r = radius;
    	World.add(world, this.body);

	}
	display()
	{
			var pos = this.body.position;
			fill("darkblue");
			ellipse(pos.x, pos.y, this.r, this.r);
	}

}