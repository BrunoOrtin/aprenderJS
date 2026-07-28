/*let myName = `Bruno
Ortin Bustillo `;
let comoes = ", el mejor"
console.log(myName + comoes);

// longitud
console.log("cuantos caracteres tiene myName: ", myName.length);

// posicion caracter
console.log(myName[2])

// metodos comunes

console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
console.log(myName.indexOf("Ortin"));
console.log(myName.includes("Bru"));
console.log(myName.slice(0, 5));
console.log(myName.replace("Bruno", "Bru"));


console.log(`hola ${myName} eres el puto amo y eres ${comoes}`)*/

// 1. Concatena dos cadenas de texto
let saludo = "hola me llamo "
let nombreCompleto = "Bruno Ortin Bu"

console.log("hola me llamo bruno" + " soy el mejor")
console.log(saludo + nombreCompleto)
console.log()
// 2. Muestra la longitud de una cadena de texto
console.log(saludo.length);
console.log()
// 3. Muestra el primer y último carácter de un string
console.log(saludo[0])
console.log(saludo[12])
console.log()
// 4. Convierte a mayúsculas y minúsculas un string
console.log(saludo.toUpperCase())
console.log(saludo.toLowerCase())
console.log()
// 5. Crea una cadena de texto en varias líneas
console.log(`hola, esta 
cadena tiene 
varias lineas `)
console.log()
// 6. Interpola el valor de una variable en un string
console.log(`el ganador es:  ${nombreCompleto}`)
console.log()
// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(nombreCompleto.replaceAll(" ", "-"))
console.log();
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(nombreCompleto.includes("Bru"))
console.log();
// 9. Comprueba si dos strings son iguales
console.log(saludo === nombreCompleto);
console.log();
// 10. Comprueba si dos strings tienen la misma longitud
console.log(saludo.length === nombreCompleto.length);