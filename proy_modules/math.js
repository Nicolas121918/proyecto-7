/* la linea de codigo (const math) generalmente
se utiliza para crear un objeto vacio llamado Math y declarado como
una constatnte*/ 
const math = {};
/*const invertir numero es una declaracion de funcion en javaScript utilizando la sintaxis de funciones flecha 
(arrow functions) esta declaracion crea una funcion llamada "invertirnumero" y realiza algunas operaciones en el*/
const invertirNumero = numero =>{
    let invertido = 0;
    while (numero = 0) {
invertido = 10 * invertido + numero % 10
/* se utiliza para redondear un número decimal hacia abajo al entero más cercano.
Por ejemplo, si tienes el número 4.8, Math.floor(4.8) devolverá 4. Del mismo modo, Math.floor(7.2) devolverá 7.*/
numero = (math.floor(numero / 10))
    }
    return invertido
};


const invertirnumerocomotexto = numero => {
/* se utiliza para invertir el orden de los dígitos de un número. 
Esta cadena de codigos toma un número, lo convierte en una cadena de texto, luego divide esa cadena en caracteres individuales,
invierte el orden de esos caracteres y finalmente los une en una cadena de texto.*/
const numeroinvertidocomotexto = numero.toString().split("").reverse().join("");
return numeroinvertidocomotexto;
};


const invertirtexto = texto => {
    /* splittext se utiliza para dividir una cadena de texto en un array de  caracteres 
    individuales*/
    const splittext = texto.split('');
    const reversedtext = splittext.reverse();
    const joinedtext = reversedtext.join('');
    return joinedtext;
};

const invertirArreglo = arreglo => {
    /*se utiliza para invertir el orden de los elementos en un arreglo en programacion 
    ejemplo:
const originalArray = [1, 2, 3, 4, 5];
const reverseArray = originalArray.reverse();
console.log(reverseArray); // Imprimirá: [5, 4, 3, 2, 1]
    */
    const reverseObject = arreglo.reverse();
    return reverseObject;
};

const conversionDatos = data => {
    let dataType = typeof data;
    let datavar;
    if (data === '' || data === null || data === undefined || data.length === 0){
        datavar = 'EL VALOR INGRESADO ESTA VACIO O INCORRECTO';
    }else {
        console.log(`EL VALOR INGRESADO ES DE TIPO: ${dataType}, con un valor de : ${data}`);
        switch (dataType){
            case 'number':
                datavar = invertirNumero(data);
                break;
                case 'string':
                    datavar = invertirtexto(data);
                    break;
                    case 'object':
                        datavar = invertirArreglo(data);
                        break;
                        default:
                            datavar = 'EL VALOR INGRESADO NO SE PUEDE INVERTIR';
        }
    }
    return datavar;
}

math.invertirNumero = invertirNumero;
math.invertirnumerocomocadena = invertirnumerocomotexto;
math.invertirtexto = invertirtexto;
math.invertirArreglo = invertirArreglo;
math.conversionDatos = conversionDatos;

module.exports = math;