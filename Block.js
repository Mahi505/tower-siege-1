class Block{
    constructor(x,y){
this.some=Bodies.rectangle(x,y,30,40)
World.add(world,this.some)
    }
display(){
rectMode(CENTER) 
rect(this.some.position.x,this.some.position.y,30,40)




}


}