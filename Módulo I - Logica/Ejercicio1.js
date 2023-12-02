const randomNumbers = [2,5,8,13,24,45,67,88,94,100];

let numberSelected = randomNumbers[0];

for(let i=0; i<randomNumbers.length; i++){
    if(randomNumbers[i] > numberSelected){
        numberSelected = randomNumbers[i]
    }
}

console.log("el número mayor de la lista es:",numberSelected )

/*2. Escribir una función en JavaScript que tome dos números como argumentos y devuelva
su suma. Luego, escribir la misma función utilizando una función flecha (arrow function)
y comparar ambas declaraciones. Llamar a ambas funciones con valores de ejempl o y
mostrar los resultados en la consola del navegador.*/

// Función para sumar dos números (declaración de función)
const sumarNumeros(n1, n2) {
    return n1 + n2;
}

// Llamada a la función y muestra del resultado en la consola
const resultadoFuncionRegular = sumarNumeros(1, 3);
console.log("Resultado usando función regular:", resultadoFuncionRegular);

//