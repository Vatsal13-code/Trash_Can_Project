class Dustbin {
    constructor(x,y,length,width,) {
        var options = {
            isStatic: false,
            restitution:0.3,
            friction : 0.5,
            density  : 1.2
        }
        this.x=x;
        this.y=y;
        this.length=length;
        this.width=width;
    this.image = loadImage("dustbingreen.png")
    this.body = Bodies.rectangle(this.x,this.y,this.length,this.width,options);
    World.add(world,this.body)

    }
display() {
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
    }
}