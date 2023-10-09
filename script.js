// ES5
// function iloczyn(num1, num2, num3) {
//   result = num1 * num2 * num3;
//   return result;
// }

//ES6
// const iloczyn = (num1, num2 ,num3) => {
//   result = num1 * num2 * num3;
//   return result;
// }

// skrocony zapis funkcji z jedna metoda?! return zwraca wynik metod jak jedna nie trzeba return ale i nawiasow z klamra ?
// const iloczyn = (num1, num2 ,num3) => {num1 * num2 * num3}; //undefined

const iloczyn = (num1, num2 ,num3) => num1 * num2 * num3;



let wynikIloczynu = iloczyn(3, 10, 2);
console.log(wynikIloczynu);