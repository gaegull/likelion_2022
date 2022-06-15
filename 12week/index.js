//fetch('http://jsonplaceholder.typicode.com/posts/1')
//    .then(res => res.json())
//    .then(console.log);
//console.log('test');

//const me ={
//    name: '이상',
//    age: 22,
//    gender: 'female',
//};
//const someone={
//    name: '김멋사',
//    age: 25,
//    gender:'male',
//};

//function addMilitaryStateIfMale(person) {
//    if (person.gender==='male') {
//        person.militaryState=false;
//    }
//}
//addMilitaryStateIfMale(me);
//addMilitaryStateIfMale(someone);
//function parseBoolean(value) {
//    if (value===true){
//        return '참';
//    } else if (value === false){
//        return '거짓';
//    }
//}
//me.militaryState !== undefined && console.log(parseBoolean(me.militaryState));
//someone.militaryState !== undefined && console.log(parseBoolean(someone.militaryState));

//const input= prompt();
//console.log(input || '입력값이 없습니다.');

//const { name, age } =me;

//const animals=['고양이','멍멍이'];
//const anotherAnimals=[...animals, '참새'];
//console.log(anotherAnimals);

const me ={
    name: '이상',
    age: 22,
    militaryState: false,
}
const {militaryState, ...another}=me;

console.log(another);

const numbers=[0,1,2,3,4,5,6];
const [zero, ...rest]=numbers;
console.log(rest);