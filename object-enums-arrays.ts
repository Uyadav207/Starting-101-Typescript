// const person: {
//     name: String,
//     age :number
//     hobbies : any[]
// } = {
//     name: "Utkarsh",
//     age: 30,
//     hobbies: ['sports', 'cooking']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2; 

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: "Utkarsh",
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
}; 
console.log(person);


if (person.role === Role.ADMIN) {
    console.log('is ADMIN');
}