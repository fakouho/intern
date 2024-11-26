'use strict'
//객체 

//객체 리터럴 문법
const person={
    nm:['강우석','강아리','강먼지','강아롱'],
    age:28,
    hi(){
        console.log('안녕하세요 강우석입니다.')
    }
}
person.hi();
console.log(person.age)
console.log(person.nm)

person.good=function(){
    console.log('오늘도 좋은 하루입니다.')
};

person.good();

delete person.good;

console.log(person)

function soo(){
    console.log(`${per.nm}의 나이는 ${per.age}입니다.`)
}

// soo('우석',25)
const per={
    nm:'강우석',
    age:25
}
soo(per);

//구조 분해 할당
console.log('-----구조 분해 할당-----')
const{nm,age}=per;
console.log('nm :',nm);
console.log('age:',age)

//구조 분해 할당을 통한 객체 분할
const newb={
    nm:'우석',
    age:27

}
function sw({nm,age}){
    console.log(`${nm}이의 나이는 ${age}`)
}
sw(newb)

//팩토리 함수

// function people(name,age,hobby){
//     return{
//         name:name,
//         age:age,
//         hobby:hobby
//     }
// }

//es6방식
class people{
    constructor(name,age,hobby){
        this.name=name;
        this.age=age;
        this.hobby=hobby;
    }
}

const person1=people('아리',12,'산책')
const person2=people('먼지',14,'냥냥 펀치')

console.log(person1);
console.log(person2);