"use strict";
class Person {
    constructor(name, age, subject, qualification, service, hobbies) {
        this.name = name;
        this.age = age;
        this.subject = subject;
        this.qualification = qualification;
        this.service = service;
        this.hobbies = hobbies;
    }
}
const Person1 = new Person("Yasir", 34, "biology", "m.phil", "sixteen years", ["reading", "cricket"]);
const Person2 = new Person("Adeel Ashraf", 39, "computer", "m.phil", "fifteen years", ["reading", "hockey"]);
const Person3 = new Person("Gulraiz", 38, "mathematics", "m.phil", "sixteen years", ["reading", "networking"]);
const Person4 = new Person("Haroon", 34, "computer", "m.sc", "fourteen years", ["reading", "gaming", "cricket"]);
const Person5 = new Person("Aqib", 30, "maths", "m.sc", "five years", ["reading", "cricket"]);
var teachers;
(function (teachers) {
    teachers[teachers["Yasir"] = 0] = "Yasir";
    teachers[teachers["AdeelAshraf"] = 1] = "AdeelAshraf";
    teachers[teachers["Gulraiz"] = 2] = "Gulraiz";
    teachers[teachers["Haroon"] = 3] = "Haroon";
    teachers[teachers["Aqib"] = 4] = "Aqib";
})(teachers || (teachers = {}));
function whichteacher(teacher) {
    return teacher;
}
console.warn(whichteacher(teachers.Gulraiz));
console.log(Person1);
