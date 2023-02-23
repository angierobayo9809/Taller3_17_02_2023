/*1.	Realizar un programa que permita leer 2 números diferentes y nos diga cual es el mayor de los 2 números.*/

let numero1 = prompt("Ingrese el número 1");
let numero2 = prompt("Ingrese el número 2");

if (numero1 == numero2)
{
    alert("Los números son iguales");
}
else if (numero1 > numero2)
{
    alert("El número "+numero1+" es mayor");
}
else
{
    alert("El número "+numero2+" es mayor");
}
