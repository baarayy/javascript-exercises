const findTheOldest = function(people) {
     
    for(const person of people) {
        if(!person.hasOwnProperty("yearOfDeath")) {
            person.yearOfDeath = new Date().getFullYear();
        }
    }
    let oldestPerson;
    let oldest = 0;
    for(const person of people) {
        let age = person.yearOfDeath - person.yearOfBirth;
        if(age > oldest) {
            oldest = age;
            oldestPerson = person;
        }
    }
    return oldestPerson;
}
const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
