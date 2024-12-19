
// let accessAllowed;
// let age = prompt('Сколько вам лет?', '');

// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }

// alert(accessAllowed);

// let officialName = prompt('what is official name of javascript?', '');

// if (officialName == 'ECMAScript') {
//     alert('Orlight!');
// } else {
//     alert('dont know? it is ECMAScript');
// }

// let userNumber = prompt('write random number', '')
// if (userNumber > 0 ) {
//     alert(1);
// } else if (userNumber < 0) {
//     alert(-1)
// } else {
//     alert(0)
// }

// let result

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// let age = 25;

// if (age >= 18) {
//     console.log('you are adult man');
    
// }

// let userName = prompt('enter login','')

// if (userName === 'admin') {

//     let pass = prompt('password', '');

//     if (pass === 'admin') {
//         alert('hello admin')
//     } 
//     else if (pass === '' || pass === null) {
//         alert('try anything')
//     } else {
//         alert('nice try')
//     }

// } else if (userName === '' || userName === null) {
//     alert('type who u are!')
// } else {
//     alert('maybe next time')
// }

// let height = 5;
// let width = 2;

// // важно: используйте круглые скобки
// let area = (height ?? 100) * (width ?? 50);

// alert(area); // 5000

// let i = 0;
// while (i < 3) { // выводит 0, затем 1, затем 2
//   console.log( i );
//   i++;
// }

// for (let i = 0; i < 5; i++) { // выведет 0, затем 1, затем 2
//     console.log(i);
//   }

// for (let i = 2; i < 10; i++) { 
    
//     if (i % 2 == 0) {
//         console.log(i);;
//       }
//   }

// for (let i = 0; i < 3; i++) {
//     console.log(`number ${i}!`);
    
//   }

//   let i = 0;
//   while(i < 3) {
//     console.log(`number ${i}!`);
//     i++
//   }

// let userNumber;
//  do {
//     userNumber = prompt('enter a number above 100!', '');
//  }
// while (userNumber <= 100 && userNumber);


switch (browser) {
   case 'Edge':
     alert( "You've got the Edge!" );
     break;
 
   case 'Chrome':
   case 'Firefox':
   case 'Safari':
   case 'Opera':
     alert( 'Okay we support these browsers too' );
     break;
 
   default:
     alert( 'We hope that this page looks ok!' );
 }

 if (browser = 'edge') {
   alert( "You've got the Edge!" );
 } else if(browser = 'chrome' || 'firefox' || 'safari' || 'opera' ){
   alert( 'Okay we support these browsers too' );
 }

   else {
alert( 'We hope that this page looks ok!' );
   } 
 
