// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
// Sample Input:
// sumArray([1, 2, 3, 4, 5]);

// // Sample Output:
// 15;

{
    function sumArray(input:number[]):number{
        const sum=input.reduce((total,num)=> total + num,0);
        console.log(sum)
      return  sum
    }

    sumArray([1, 2, 3, 4, 5])
}