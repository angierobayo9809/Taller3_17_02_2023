let num = prompt("Ingrese un número");
let suma = new Number;
for (let x = Number(num)-1; x > 0; x--)
{
    if (Number(num) % x == 0)
    {
        suma+=Number(x);
        console.log(suma);
    }
}

if (suma == Number(num))
    alert("El número "+num+" es perfecto");
else
    alert("El número "+num+" no es perfecto");