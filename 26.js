
// Տրված է բնական թիվ
// Արտածել Yes եթե․ թվանաշանների մեջ կա 3 թվանշան


// function num(n) {
//     sum = false;
//    while (n > 0) {
//     if( n % 10 === 3){
//         sum = true;
//         break;
//     } 
//     n = (n -(n % 10)) / 10;
//    }
//     return sum ? 'Yes' : 'No';
// }

// console.log(num(323));

// Թվանշանների մեջ չկա 5;


// function num(n) {
//     sum = true;
//    while (n > 0) {
//     if( n % 10 === 5){
//         sum = false;
//         break;
//     } 
//     n = (n -(n % 10)) / 10;
//    }
//     return sum ? 'Yes' : 'No';
// }

// console.log(num(313));


// Թվանշանները աճման կարգով են դասավորված

// function f(n) {
//     while (n > 0) {
//         let c1 = n % 10;
//         n = (n - c1) /10;
//         let c2 = n % 10;
//         if(c1 < c2){
//             return "No"
//         }
            
        
        
//     }
//     return "Yes"
// }

// console.log(f(1231));

// Թվանշանները նվազման կարգով չեն դասավորված



// Թվի թվանշանների գումարը մեծ է 20ից

// function n(num) {
//     let sum = 0;
//     while (num > 0) {
//         sum += num % 10;
//         num = (num - (num % 10)) / 10;
//     }
//     return sum > 20 ? "Yes": "No";
// }

// console.log(n(125));
// console.log(n(1288555));

// Թվի թվանշանների արտադրյալը փոքր է 30ից

// function n(num) {
//     let sum = 1;
//     while (num > 0) {
//         sum *= num % 10;
//         num = (num - (num % 10)) / 10;
//     }
//     return sum < 30 ? "Yes": "No";
// }

// console.log(n(33552));



