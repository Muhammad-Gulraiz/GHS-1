interface Greet {
    name:string;
    age:number;
    subject:string;
    qualification:string;
    service:string;
    hobbies: string[];
}

class Person {
    name: string;
    age: number;
    subject:string;
    qualification:string;
    service:string;
    hobbies: string[];
    constructor(name:string, age:number, subject:string, qualification:string, service:string, hobbies:string[]){
        this.name = name;
        this.age = age;
        this.subject = subject;
        this.qualification = qualification;
        this.service = service;
        this.hobbies = hobbies;    
    }
}
const Person1:teacher = new Person("Yasir",34,"biology","m.phil","sixteen years", ["reading", "cricket"]);
const Person2:teacher = new Person("Adeel Ashraf",39,"computer","m.phil","fifteen years", ["reading", "hockey"]);
const Person3:teacher = new Person("Gulraiz",38,"mathematics","m.phil","sixteen years", ["reading", "networking"]);
const Person4:teacher = new Person("Haroon",34,"computer","m.sc","fourteen years", ["reading", "gaming", "cricket"]);
const Person5:teacher = new Person("Aqib",30,"maths","m.sc","five years", ["reading", "cricket"]);

enum teachers{
    Yasir, AdeelAshraf, Gulraiz, Haroon, Aqib

}
function whichteacher(teacher:teachers)
{
    return teacher
}

console.warn(whichteacher(teachers.Gulraiz))

console.log(Person1);