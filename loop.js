// ```// var i = 1;

// // while(i <= 10){
// //     console.log("안녕하세요 , " + i "번째, 고객님!");
// //     i++;
// // // }
// // var i = 10;
// // while(i >= 1){
// //     console.log("안녕하세요," + i + "번째, 고객님!");
// //     i--;
// // }

// var i = 1;

// while (i <= 30) {
//   if (i % 2 == 0 && i % 6 == 0) {
//     console.log(i);
//   }
//   i++;
// }

// var num1=0;  //홀수의 합
// var num2=0;  //짝수의 합
// var result=0;  //홀수+짝수 합계


// for( i=1; i<=10; i++){
//   if(i %2==0){
//     console.log(i+"는 짝수입니다.");
//     num1 += i; 
//   }else{
//     console.log(i+"는 홀수입니다.");
//     num2 += i;
//   }
// }

// result = num1+num2;
// console.log(result);


var i = 5; //단수
var j = 1;

while(j<=9){
  console.log(`${i} 곱하기 ${j} 는?`+j*i);
  j++;
}