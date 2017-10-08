// const person = {
//     name: 'Omri',
//     age: 34,
//     location: {
//         city: 'Nes Tziona',
//         temp: 92
//     }
// };

// const {name, age} = person;

// // const name = person.name;
// // const age = person.age;

// console.log(`${name} is ${age}`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName} = book.publisher;

// console.log(publisherName);


const address = ['1299 S Juniper Steet', 'Philadelphia', 'Pennsylvania', '19147'];

const [street, city, state, zip] = address;

console.log(`You Are in ${city} ${street}.`);