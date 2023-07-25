

const person1 ={
    name:'venkat',
    age:22,
    clg:'Dr.N.G.P.',
    experience:'5',
}
console.log(person1)

const person2 = person1;
person2.age = 25 ;
console.log(person2)
const samp =["car","bike","jeep","thar"];
console.log(samp)
console.log(samp[2]);
samp[2] = "Swift";
console.log(samp)
samp.push("van");
console.log(samp)
samp.unshift("air");
console.log(samp)
samp.pop()

const products = [
    { author: 'Stephon', title: 'display', cost: 500 },
    { author: 'elva', title: 'speaker', cost: 1000 },
    { author: 'daniel', title: 'charger', cost: 300} ,
    { author: 'pearson', title: 'light', cost: 800 },
];


products.forEach((product) => {
    if (product.cost >= 500) {
        console.log(product);
    }
});

const users = [
    { id: 1, name: 'display', age: 25 },
    { id: 2, name: 'speaker', age: 18 },
    { id: 3, name: 'charger', age: 28 },
    { id: 4, name: 'light', age: 12 },
];


users.forEach((value) => {
    if (value.age >= 20 ) {
        if (value.age <= 25 ){
            console.log(users);
        }     
    }
});

const programminglanguages = [
    { name: 'JavaScript', type: 'Scripting', year: 1995 },
    { name: 'Python', type: 'Scripting', year: 1991 },
    { name: 'Java', type: 'Compiled', year: 1995 },
    { name: 'C++', type: 'Compiled', year: 1985 },
];

const compiledLanguagesAbove1980 = [];

programminglanguages.forEach((language) => {
    if (language.type === 'Compiled' && language.year > 1980) {
        compiledLanguagesAbove1980.push(language);
    }
});
console.log(compiledLanguagesAbove1980);