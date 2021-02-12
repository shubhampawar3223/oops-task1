class Circle{
    radius:number=1;
    color:string ="red";

    constructor(rad?:number, colur?:string){
        if(rad !== undefined)
        this.radius= rad;

        if(colur !== undefined)
        this.color= colur;
    }

//getRadius() function is used to return radius.    
    getRadius():number{
        return this.radius;
    }
 
//setRadius() function is used to set radius.    
    setRadius(rad:number):void{
        this.radius=rad;
    }

//getColor() function is used to return color.   
    getColor():string{
        return this.color;
    }

//setColor() function is used to set color.    
    setColor(colr:string):void{
        this.color=colr;
    }

//toString() function is used to convert the input into string and return the string
    toString():string{
        let str = "Circle[radius="+this.radius+"colour="+this.color+"]"
        return str
    }
    
//return area of the circle.    
    getArea():number{
        const pi = 3.14;
        let area = (Math.PI**2 * this.radius)
        return area; 
    }
    
//return circumference o f the circle.
    getCircumference():number{
        
        let cc = (Math.PI* 2 * this.radius)
        return cc;
    }
    
}
let abc2 = new Circle();

let abc1 = new Circle(4);
 
let abc = new Circle(2,"blue");
 
abc.setRadius(3);
console.log(abc.getRadius())

abc.setColor("white");
console.log(abc.getColor())


console.log(abc.toString())
console.log("Area: "+ abc.getArea());
console.log("Circumference: "+abc.getCircumference());