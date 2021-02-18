class Dustbin {

    constructor (x, y){

        this.x = x; 
        this.y = y; 
        this.dustWidth = 200; 
        this.dustHeight = 200; 
        this.thickness = 20; 
        this.angle = 0; 


        this.bottomBody = Bodies.rectangle(this.x, this.y, this.dustWidth, this.thickness, {isStatic: true})
        this.leftBody = Bodies.rectangle(this.x - this.dustWidth/2, this.y - this.dustHeight/2, this.thickness, this.dustHeight, {isStatic:true});
        Body.setAngle(this.leftBody,this.angle);
        this.rightBody = Bodies.rectangle(this.x + this.dustWidth/2, this.y - this.dustHeight/2, this.thickness, this.dustHeight, {isStatic:true});
        Body.setAngle(this.rightBody,this.angle);

        this.image = loadImage("dustbin.png");
        
        World.add(world, this.bottomBody);
        World.add(world, this.leftBody);
        World.add(world, this.rightBody);

   
    }

    display(){ 

        var posB = this.bottomBody.position; 
        var posL = this.leftBody.position;
        var posR = this.rightBody.position;

       

        push()
        translate(posL.x, posL.y); 
        rectMode(CENTER)
        angleMode(RADIANS); 
        fill("white"); 
        rotate(this.angle)
        rect(0,0,this.thickness, this.dustHeight);
        pop();

        push()
        translate(posR.x, posR.y); 
        rectMode(CENTER)
        angleMode(RADIANS); 
        fill("white"); 
        rotate(this.angle)
        rect(0,0,this.thickness, this.dustHeight);
        pop();

        push()
        translate(posB.x, posB.y); 
        rectMode(CENTER)
        imageMode(CENTER)
        angleMode(RADIANS); 
        //fill("white"); 
        //rotate(this.angle)
        image(this.image, 0,-this.dustHeight/2,this.dustWidth + 50, this.dustHeight);
        
        pop();
    }



}