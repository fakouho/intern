
let person={
    fullname:'강우석',
    age:25,
    sce(){
        console.log(this.fullname);
        console.log(this.age);
        console.log(this);
        console.log(this===person);

    },
};
person.sce();
console.log('============');


function printThis(){
    console.log(this);
}

printThis();
