/*Объекты */

const user1 = {};
console.log(user1);
console.log(typeof(user1));

const user2 = {
    firstName: 'Vasya',
    lastName: 'Petrov',
    workExperience: 0,
    isMale: true,   
};

console.log(user2);
console.log(typeof(user2));

console.log(user2.firstName, user2.lastName);

user2.category = 'junior';
console.log(user2);

user2.workExperience = 1;
console.log(user2);

const user3 = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    workExperience: 0,
    isMale: true,
    sayHello: function() {
        console.log('Hello! My name is' + ' ' + this.firstName + ' ' + this.lastName);
    },
    doGreeting: function(){
        console.log('Hi!');
    },
    sayHello2: function() {
        console.log('Hello User2: ' + user2.firstName + ' ' + user2.lastName);
    },
    outThisObject: function(){
        console.log(this);
    },
};
console.log(user3)
user3.sayHello();
user3.sayHello2();
user3.outThisObject();

//удаление свойства объекта

delete user2.category;
console.log(user2);

function helloWithUser (user){
    console.log('Hello, user ', user.firstName, user.lastName);
}

helloWithUser(user1);
helloWithUser(user2);
helloWithUser(user3);

const userCar = {
    model: 'Toyota',
    color: 'Red',
    manufactureYear: '2019',
    engine: {
        volume: 2.0,
        year: 2019,
        features:{
            name: 'some_name',
        }
    },
}

console.log(userCar);
console.log(userCar.model);
console.log(userCar.engine.year);

// копирование объектов через "="
//слонирование объектов через Object.assign

for (let i in userCar){
    console.log(i);
    console.log(userCar[i]);
}

/*
    Массивы
*/
// объявление пустого массива
let someArray = [];

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// вывод массива
console.log(arr1);
// вывод элемента массива пл индексу
console.log(arr1[0]);

//изменение элемента массива
arr1[0] = 100;
console.log(arr1);

let sumOfTwoEl = arr1[0] + arr1[1];
console.log(sumOfTwoEl);

let arr2 = ['name1', 'name2', 'name3', 'str'];

console.log(arr1.length);
console.log(arr2.length);

arr1[arr1.length] = -2;


//Сумма массива

let count = 0;
let arraySum = 0;
for(i = 0; i < arr1.length; i++){
    arraySum += arr1[i];
}

console.log('Sum of arr1 is ', arraySum );
/*
function arraMult (arr){
    let arraMult = 1;
    for(i = 0; i < arr.length; i++){
        arraMult *= arr[i];
    }
    return arraMult;
}

let res = arraMult(arr1);
console.log('Mult of arr1 is ', res);
*/

const multArray = (arr) => {
    let arraMult = 1;
    for(let i = 0; i < arr.length; i++){
        arraMult *= arr[i];
    }
    return arraMult;
};

console.log('Mult of arr1 is ', multArray(arr1));

const showArray = (arr) => {
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
};

let arr3 = ['Maria', 10, true, {role: 'user'}];

let arr4 = [,,,,,];
console.log(arr4);

let arr5 = [100,,,,,];
console.log(arr5);

let arr6 = [{}, {}, {}, {}, {}, {}];
console.log(arr6);

//функция для поиска минимума в массиве

const searchMinArray = (arr) => {

    let i, min = arr[0];
    for(i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

//функция для поиска vfrcbvev в массиве

const searchMaxArray = (arr) => {

    let i, max = arr[0];
    for(i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

console.log([10,20,5,8,1,9]);
searchMinArray([10,20,5,8,1,9]);
console.log(searchMinArray([10,20,5,8,1,9]));
console.log(searchMaxArray([10,20,5,8,1,9]));


//1. вычислить сумму четных элементов массива

//2. вернуть общий массив без повторов

//3. функция которая добавляет число заданным количеством нулей
//fun(-5,6) вернет -0000005

//1

const sumOfEvenEl = (arr) => {
    let result = 0;
    for(let i = 1; i < arr.length; i = i + 2){
        result += arr[i];
    }
    return result;
}


let arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr7);
console.log('Сумма четных элементов массива arr1 равно ', sumOfEvenEl(arr7));

//2
/*
const functionTask2 = (array1, array2) => {
    let resultArray = [];
    let array1Length = array1.length;
    let array2Length = array2.length;

    for (let i = 0; i < array1Length; i++){
        for(let j = 0; j < array2Length; j++){
            if(array1[i] <= array2[j]){
                resultArray.push(array1[i]);
            }
            else {
                resultArray.push(array2[j]);
            }
        }
    }

    return resultArray;
}

let arrTest1 = [1, 2, 5, 6];
let arrTest2 = [1, 2, 3, 4, 10];

console.log(functionTask2(arrTest1, arrTest2));
*/

//3
const functionTask3 = (number, countOfZeroes) => {
    let resArr = [];
    if(number < 0){
        resArr[0] = '-';
    } else {
        resArr[0] = '+';
    }

    for (i = 1; i <= countZeros + 1; i++) {
        resArr[i] = 0;
      }
      resArr[i] = Math.abs(number);
      return resArr;

}

// forEach() - выполняет указанную функцию для каждого элемента массива

const myArray = [10, 20, 30, 40, 50];

myArray.forEach(i => console.log(i));

function outNumber(number) {
    console.log(number);
}

myArray.forEach(outNumber);
 
/*
function powNumber (number){
    number *= number;
    console.log(number);
}

myArray.forEach(powNumber);
*/
/*
myArray.forEach((i) => Math.pow(i, 2));
*/

//filter

const myArrayWithNumberBiggwer30 = myArray.filter(i => (i >= 30));

const words = [];

const res_words = words.filter( (i) => (i.length >= 5));

// every - проверяет все ли элементы соотвутствуют условию

myArray.every((i) => (i>=18));


//some - проверяет, чтобы хотя бы 1 элемент соотвутствал условию

myArray.some((i) => (i>=18));

myArray.every((i) => (i%2 == 0));
