const age = process.argv[2]             // age
const gender = process.argv[3]          // 'm' or 'f'
const heightInM = process.argv[4]       // height in m
const weightInKg = process.argv[5]      // weight in kg
const dailyExercise = process.argv[6]   // true or false

// console.logging the values so we can see some output
console.log(process.argv);

console.log(`

**************
BMI CALCULATOR
**************

Your data
age: ${age}
gender: ${gender}
height: ${heightInM}
weight: ${weightInKg}
Do you exercise daily?: ${dailyExercise}
`)

// console.logging the bmi 

let bmi = (weightInKg / (heightInM * heightInM))

// console.loggin the ideal bmi

let idealWeight = 22.5 * (heightInM * heightInM)

// console.loggin genderModifier

let genderModifier = 0
gender === "f" ? genderModifier -= 161 : genderModifier += 5;

// console.loggin the Basal Metabolic Rate (BMR). (The amount of energy you need to keep your body running)

let bmr = 10 * weightInKg + 6.25 * (heightInM * 100) - 5 * age + genderModifier

// console.loggin calories per day

let exerciseModifier = 0
dailyExercise === true ? exerciseModifier = 1.5 : exerciseModifier = 1.2;

// console.loggin the calories per day

let caloriesPerDay = bmr * exerciseModifier

// console.logging the values of bmi so we can see some output

console.log(`
**************
Summary 
**************

BMI: ${Math.round(bmi)}
Ideal Weight: ${Math.round(idealWeight)}
Basal Metabolic Rate (BMR): ${bmr}
Calories Per Day: ${caloriesPerDay}
`)

// calculate weight difference to ideal weight

let weightDifferenceToIdealWeight = idealWeight - weightInKg

/* If this number is negative we have to lose weight, 
if it is positive we have to gain weight */

// calculate dietWeek

let dietWeeks = Math.abs(weightDifferenceToIdealWeight / 0.5)

// calculate dietCaloriesPerDay for the amount of calories to consume during the diet period

let dietCaloriesPerDay = caloriesPerDay
weightDifferenceToIdealWeight >= 0 ? dietCaloriesPerDay += 500 : dietCaloriesPerDay -= 500;

// console.logging the values of diet plan so we can see some output

console.log(`
**************
Diet plan
**************

Weight difference to ideal weight: ${Math.round(weightDifferenceToIdealWeight)}
Diet weeks: ${Math.round(dietWeeks)}
Diet calories per day: ${dietCaloriesPerDay}
`)