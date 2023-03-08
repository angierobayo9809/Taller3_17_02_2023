let numeros = prompt("Ingrese la cantidad de números a evaluar");
let suma = new Number;
let producto=new Number;
for (let x = 1; x <= Number(numeros); x++)
{
    let num = prompt("Ingrese el número "+x);
    if (Number(num) % 2 == 0){
        suma +=Number(num);
    }
    else{
        if (x == 1)
            producto = Number(num);
        else
            producto = producto * Number(num);
    }
}

alert("La suma de los numeros pares ingresados es de:"+suma +"\n\r El producto de los impares es de:"+producto);
