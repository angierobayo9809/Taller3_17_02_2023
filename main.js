/*1.	Realizar un programa que permita leer 2 números diferentes y nos diga cual es el mayor de los 2 números.*/

let numero1 = prompt("Ingrese el número 1");
let numero2 = prompt("Ingrese el número 2");

let suma = Number(numero1) + Number(numero2);

if (isNaN(suma))
    alert("Error en los números ingresados.");
else
    alert("La suma de los números ingresados es de "+suma);
