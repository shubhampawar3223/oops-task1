var Circle = /** @class */ (function () {
    function Circle(rad, colur) {
        this.radius = 1;
        this.color = "red";
        if (rad !== undefined)
            this.radius = rad;
        if (colur !== undefined)
            this.color = colur;
    }
    //getRadius() function is used to return radius.    
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    //setRadius() function is used to set radius.    
    Circle.prototype.setRadius = function (rad) {
        this.radius = rad;
    };
    //getColor() function is used to return color.   
    Circle.prototype.getColor = function () {
        return this.color;
    };
    //setColor() function is used to set color.    
    Circle.prototype.setColor = function (colr) {
        this.color = colr;
    };
    //toString() function is used to convert the input into string and return the string
    Circle.prototype.toString = function () {
        var str = "Circle[radius=" + this.radius + "colour=" + this.color + "]";
        return str;
    };
    //return area of the circle.    
    Circle.prototype.getArea = function () {
        var pi = 3.14;
        var area = (Math.pow(Math.PI, 2) * this.radius);
        return area;
    };
    //return circumference o f the circle.
    Circle.prototype.getCircumference = function () {
        var cc = (Math.PI * 2 * this.radius);
        return cc;
    };
    return Circle;
}());
var abc2 = new Circle();
var abc1 = new Circle(4);
var abc = new Circle(2, "blue");
abc.setRadius(3);
console.log(abc.getRadius());
abc.setColor("white");
console.log(abc.getColor());
console.log(abc.toString());
console.log("Area: " + abc.getArea());
console.log("Circumference: " + abc.getCircumference());
