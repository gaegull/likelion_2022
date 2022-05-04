let comparison1=10==10;
console.log(comparison1);

let comparison2=10===10;
console.log(comparison2);

let comparison3=10!=10;
console.log(comparison3);

let comparison4=10!==10;
console.log(comparison4);

let comparison5=10>10;
console.log(comparison5);

let comparison6=10>=10;
console.log(comparison6);


if(20<10){
    console.log('20은 10보다 작다');
}else if(20<15){
    console.log('20은 15보다 작다');
}else if(20<20){
    console.log('20은 20보다 작다');
}else{
    console.log('모든 if문 거짓');
}

let animal='cat';
switch (animal){
    case 'cat':
        console.log('야옹');
    case 'dog':
        console.log('멍멍');
        break;
    case 'fish':
        console.log('팔딱');
    default:
        console.log('일치 없음');
}

let i=1;
while(i<10){
    console.log(i);
    i=i+1;
}

let flag=false;
do{
    console.log('do-while');
}while(flag===true);