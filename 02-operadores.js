// operadores 

// operadores Aritmeticos
// 1. Crea una variable para cada operación aritmética
let a = 5;
let b = 2;
let c = 5;

let suma = a + b;
let resta = a -b;
let div = a / b;
let multi = a *b;
let potencia = a ** b;
let resto = a % b;


// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let sumaAsignacion = a +=b;
a = 5;
let restaAsigancion = a -= b;
a = 5;
let DivisiónAsigancion = a /= b;
a = 5;
let MultiplicaciónAsignacion = a *= b;
a = 5;
let PotenciaAsignacion = a **= b;
a = 5;
let RestoAsignacion = a %= b;
a = 5;
// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log("es igual: ", 5 == 5);
console.log("es distinto: ",5 != 6);
console.log("mayor que: ", 5 > 4);
console.log("menor que: ",5 < 6);
console.log("menor o igual que: ",5 <= 5);
console.log("mismo valor y tipo: ",a === c);
console.log();

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log("es igual: ", a == c);
console.log("es distinto: ",a != c);
console.log("mayor que: ", 4 > 4);
console.log("menor que: ",6 < 6);
console.log("menor o igual que: ",7 <= 5);
console.log("mismo valor y tipo: ",a === b);
console.log();
// 5. Utiliza el operador lógico and

console.log(5 && 5 >= 4&&4 );
console.log();
// 6. Utiliza el operador lógico or
console.log(5 > 4 || 5 < 4);
console.log();
// 7. Combina ambos operadores lógicos
console.log(5 > 4 && 4 < 6 || 5 == 5);
console.log();
// 8. Añade alguna negación
console.log(!(5 > 4 && 4 < 6 || 5 == 5));
console.log();
// 9. Utiliza el operador ternario
let isBiggest = true;

isBiggest ? console.log("es el mas grande") : console.log("no lo es");

console.log();
// 10. Combina operadores aritméticos, de comparáción y lógicas

let peces = 4;
let plantas = 5;
let total = peces + plantas;
console.log("total de peces y plantas: ", total == 9 && total > 5);

console.log();









console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("División:", div);
console.log("Multiplicación:", multi);
console.log("Potencia:", potencia);
console.log("Resto:", resto);
console.log();
console.log("SumaAsigancion :", sumaAsignacion);
console.log("restaAsigancion:", a);
console.log("DivisiónAsigancion:", div);
console.log("MultiplicaciónAsignacion:", multi);
console.log("PotenciaAsignacion:", potencia);
console.log("RestoAsignacion:", resto);
console.log();