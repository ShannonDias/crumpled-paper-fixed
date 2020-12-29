class Paper {

    constructor(x,y,radius) {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }
        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius ;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        strokeWeight(5)
        fill('red');
        rectMode(CENTER)
        rect(0, 0,this.width,this.height)
        pop();
    }















    
}