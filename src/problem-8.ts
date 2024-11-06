// Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

// // Sample Input:
// const person = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(validateKeys(person, ["name", "age"]));

// // Sample Output:
// true;


{
    // dynamic way 
    function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean {
        // Filters the `keys` array, returning only the keys whose corresponding value in `obj` is falsy.So it will return false other wise true
        const checkKeyObject = keys.filter(key => !obj[key])
        // if checkKeyObject length is 0 that means  it will  return true other wise false 
        return checkKeyObject.length === 0
    }
    // Sample Input:
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "age"])); // output: true




    //  static way

    // type T = {
    //     name: string,
    //     age: number,
    //     email: string
    // }

    // function validateKeys(obj: T, keys: (keyof T)[]): boolean {
    //     const checkKeyObject = keys.filter(key => !(key in obj))
    //     return checkKeyObject.length === 0
    // }
    // // // Sample Input:
    // const person: T = { name: "Alice", age: 25, email: "alice@example.com" };
    // console.log(validateKeys(person, ["name", "age"]));





   
}