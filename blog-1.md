# Question 1:The significance of union and intersection types in Typescript.

## Union: 
I want to write a program,so i need a Laptop or Desktop (PC), this "or" is Union nothing else,when we have 2 or more option we will use union,

## Example

```tsx
  type Device= "laptop" | "desktop"
    function choiceDeviceFunc(device:Device):void{
      if(device === "laptop"){
      console.log(`You choice a ${device}.you can write your code now,`)
      }else if(device === "desktop"){
      console.log(`You choice a ${device}.you can write your code now,`)
      }}
      choiceDeviceFunc("desktop")
      choiceDeviceFunc("laptop")

      //output
      You choice a desktop.you can write your code now,
      You choice a laptop.you can write your code now,


```

## Intersection:
I am a citizen of Bangladesh.I want to visit America. if I have a visa but I lost my passport, i can not go there, if i have passport but i have no visa i can not go America, if i want to go to America i must have visa and passport.That is intersection.

```tsx
type Visa = {
  hasVisa: true;
};

type Passport = {
  hasPassport: true;
};
type TravelToAmerica = Visa & Passport;
function canTravelToAmerica(person: TravelToAmerica): string {
  if (person.hasVisa && person.hasPassport) {
    return "You can travel to America!";
  } else {
    return "You cannot travel to America. You need both a visa and a passport.";
  }
}
const person1: TravelToAmerica = { hasVisa: true ,hasPassport: true };
const person2: TravelToAmerica = { hasVisa: true, hasPassport: false };

console.log(canTravelToAmerica(person1)); 
console.log(canTravelToAmerica(person2)); 
```