// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

// // Sample Input 1:
// const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// // Sample Output 1:
// 78.54;

// // Sample Input 2:
// const rectangleArea = calculateShapeArea({
//   shape: "rectangle",
//   width: 4,
//   height: 6,
// });

// // Sample Output 2:
// 24;


{
    // create a type for Circle 
    type Circle = {
        shape: "circle",
        radius: number

    }
    // create a type for reactangle 
    type Rectangle = {
        shape: "rectangle",
        width: number,
        height: number

    }
    //  create a union type use Circle and rectangle  type
    type ShapeType = Circle | Rectangle

    // type guard 
    const isCircle=(shape:ShapeType):shape is Circle=>{
        return shape.shape === "circle"
    }
    const isRectangle=(shape:ShapeType):shape is Rectangle=>{
        return shape.shape === "rectangle"
    }
    //   create this function for calculate circleArea, and this output can be number or void . 
    function calculateShapeArea(shape: ShapeType): number {
        if (isCircle(shape)) {
            const area = Math.PI * shape.radius * shape.radius
            // if result like 52.254545454 then it show only 2 digit after decimal point 52.25
            return parseFloat(area.toFixed(2))
        } else if (isRectangle(shape)) {
            const area = shape.width * shape.height
            return parseFloat(area.toFixed(2))
        }
       return 0
    }


    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
   // console.log(circleArea) // output:78.54

    // Sample Input 2:
    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
  //  console.log(rectangleArea) // output :24

}
