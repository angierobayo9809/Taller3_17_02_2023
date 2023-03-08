let A = prompt("Ingrese el número 1");
let B = prompt("Ingrese el número 2");
let C = prompt("Ingrese el número 3");
let arreglo = [A,B,C];
let numMenor=Number(A);
let numMayor=Number(A);

for (let x = 0; x <arreglo.length; x++)
{
        if (numMayor < Number(arreglo[x]))
        {
            numMayor =Number(arreglo[x]);
        }
        
        if (numMenor > Number(arreglo[x]))
        {
            numMenor =Number(arreglo[x]);
        }
}

alert("El número menor es "+numMenor+" el número mayor es "+ numMayor);