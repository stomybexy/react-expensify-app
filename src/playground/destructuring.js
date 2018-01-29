// const person = {
//     name: 'Jonatan',
//     age: 29,
//     location: {
//         city: 'Paris',
//         temp: 12
//     }
// };
//
// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}`);
//
// const {temp: temperature, city} = person.location;
// if (temperature && city) {
//     console.log(`it's ${temperature} in ${city}`);
// }

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);

// Array destructuring

const address = ['22 B rue Louis Blanc', 'Alfortville', 'Val-de-Marne', '94140'];

const [, city= 'Paris', department=''] = address;

console.log(`You live in ${city} ${department}`);