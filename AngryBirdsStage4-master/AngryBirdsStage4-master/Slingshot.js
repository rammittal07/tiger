class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.stling1 = loadImage("sprites/sling1.png")
        this.stling2 = loadImage("sprites/sling2.png")
        this.stling3 = loadImage("sprites/sling3.png")
     }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.stling1,200,30)
        image(this.stling2,170,30)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("#55341C")
            if(pointA.x<220){
            line(pointA.x-25, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-15, pointA.y, pointB.x+30, pointB.y-3);
            image(this.stling3,pointA.x-30,pointA.y-10,15,30);
        }else{

        line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x+15, pointA.y, pointB.x+30, pointB.y-3);
            image(this.stling3,pointA.x+25,pointA.y-10,15,30);
        }
    }
    }
    
}