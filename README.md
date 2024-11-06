[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=16977486&assignment_repo_type=AssignmentRepo)


# batch4-assignment-1

## Assignment: Basic Problem Solving with TypeScript

This assignment comprises various problems that demonstrate fundamental TypeScript concepts, including data typing, interfaces for objects, class usage with inheritance, type checking, and manipulation of data structures. The solutions aim to showcase efficient and clear problem-solving techniques using TypeScript, adhering to best coding practices.

Each problem is accompanied by sample input and output, showcasing how TypeScript can be used to solve practical programming challenges effectively.If you have any questions or need further clarification on any problem, please let us know in our facebook group.

## Problem 1:

Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

```tsx
// Sample Input:
sumArray([1, 2, 3, 4, 5]);

// Sample Output:
15;
```

## Problem 2:

Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

```tsx
// Sample Input:
removeDuplicates([1, 2, 2, 3, 4, 4, 5])

// Sample Output:
[1, 2, 3, 4, 5]

```

## Problem 3:

Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

```tsx
// Sample Input:
countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");

// Sample Output:
2;
```

## Problem 4:

Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

```tsx
// Sample Input 1:
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// Sample Output 1:
78.54;

// Sample Input 2:
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});

// Sample Output 2:
24;
```

## Problem 5:

Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

> Hints: Use keyof

```tsx
// Sample Input:
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));

// Sample Output:
Alice;
```

## Problem 6:

Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial<Profile> representing the updates. The function should return the updated profile.

```tsx
// Sample Input :
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));

// Sample Output:
{
  name: "Alice",
  age: 26,
  email: "alice@example.com"
}
```

## Problem 7:

Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

```tsx
// Sample Input 1:
const car = new Car("Honda", "Civic", 2018);
car.getCarAge();

// Sample Output 1:
6 (assuming current year is 2024)
```

## Problem 8:

Create a function validateKeys<T>(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

```tsx
// Sample Input:
const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));

// Sample Output:
true;
```
</br>

_Note: Please make sure to use the exact **function/property name** provided in the assignment.This will help us evaluate your solution smoothly._

</br>
</br>




