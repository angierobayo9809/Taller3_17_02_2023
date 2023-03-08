let numeros = prompt("Ingrese la cantidad de números a evaluar");
let numMayor =0;
for (let x=0; x <Number(numeros); x++)
{
    let numero = prompt("Ingrese el numero "+x);
    if (x==0)
        numMayor = Number(numero);

    if (numMayor < Number(numero))
        numMayor = Number(numero);

}

alert("El número máximo fue:"+numMayor);