// Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

// // Sample Input :
// const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(updateProfile(myProfile, { age: 26 }));

// // Sample Output:
// {
//   name: "Alice",
//   age: 26,
//   email: "alice@example.com"
// }

{
    interface Profile {
        name: string,
        age: number,
        email: string,

    }

    function updateProfile(profile: Profile, updateProfile: Partial<Profile>): Profile {
        // firstly i spreed all profile data, then i spreed updateProfile data, age will be 25 for profile then when again get age value from updateProfile then this value will be updated and value will be 26
        const setUpdateProfile = { ...profile, ...updateProfile }
        return setUpdateProfile
    }
    // Sample Input :
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, { age: 26 }));



}