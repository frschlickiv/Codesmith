const person = {
    firstName:'Frederick',
    lastName: 'Schlick',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
   set fullName(val){
        const parts = value.split(' ')
   } 
};

person.fullName = 'Frederick Schlick';
// getter => access properties
// setter => change (mutate) properties

console.log(person.fullName);