// Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

// // Sample Input 1:
// const car = new Car("Honda", "Civic", 2018);
// car.getCarAge();

// // Sample Output 1:
// 6 (assuming current year is 2024)


{

    class Car {
        constructor(public make: string, public model: string, public year: number) { }
        public getCarAge(): number {
            const getCurrentYear = new Date().getFullYear()
            const carAge = getCurrentYear - this.year
            // if instance set year greater than the current year is given it will be return 0
            return carAge >= 0 ? carAge : 0

        }
    }
    // Sample Input 1:
    const car = new Car("Honda", "Civic", 2018);
    car.getCarAge();
    console.log(car.getCarAge()) // output : 6


}