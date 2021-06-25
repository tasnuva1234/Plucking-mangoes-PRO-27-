class Launcher{
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
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(bodyA){
        this.sling.bodyA = bodyA;
    }
    
    display(){
        push ();
        if(this.sling.bodyA){        
           var pointA = this.sling.bodyA.position;
           var pointB = this.pointB;        
           strokeWeight(3);
           stroke(48,22,8)
          
           line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y);
            
        }
        pop ();
    }
    
}