// 1 - Create an object constructor
// for RightTriangle that takes 3 arguments
// - side1
// - side2
// - base
// The object should have two functions
// - area() returns the area of this triangle
// - perimeter() returns the perimeter of this triangle

function RightTriangle(side1, side2, base) {
  this.area = new function() {
    var s = (side1 + side2 + base) / 2
    return Math.sqrt(s * (s - side1) * (s - side2) * (s - base));
  }
  this.perimeter = new function()
    return side1 + side2 + base;
}

// 2 - Create two instances of the RightTriangle
// object. Console log the results of calling
// both functions on both instances.
var triangleOne = new RightTriangle(10, 10, 10);
var triangleTwo = new RightTriangle(3, 4, 5);
