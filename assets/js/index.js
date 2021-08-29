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