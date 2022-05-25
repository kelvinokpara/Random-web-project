const person ={
    name: 'ade',
    age: 34,
    job: ['cleaning','washing','cooking'],
   Address: {
        State: 'Lagos',
        city: 'Alimosho',
        street: 'Yisa-Oladimeji'
    }
}
console.log(person);
let jayde = ['cleaning','washing','cooking']
jayde.push = 'bathing';
jayde[3] = 'sweeping'
console.log(jayde)
console.log(person.name, person.Address, person.job[0])


const personToJSON =JSON.stringify(person)
console.log(personToJSON);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(index)
}