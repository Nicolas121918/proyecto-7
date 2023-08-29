require('colors');

const math = require('./proy_modules/math.js')
//esta linea de codigo sirve para blabla bla blal h
const main = async () => {
    console.log('***********************************************************************************************************'.bgYellow);
    console.log('*********************************'.blue,'HOLA SENA CBA'.bgMagenta.blue,
                '***********************************************************'.blue);
    console.log('***********************************************************************************************************\n'.yellow);
    const numeros = [1, 2, 850, 912, 368000, 1283, 5647891254];
    for (const numero of numeros){
        const invertidocomoNumero = math.invertirNumero(numero);
        const invertidocomocadena = math.invertirnumerocomocadena(numero);
        console.log("El numero '%s' es '%s' invertido como numero, y '%s' como cadena",
        numero, invertidocomoNumero, invertidocomocadena);

    }
    const textos = ['¿HOLA GENTE COMO ESTAN?'.bgBlue, 'ficha 2798618', 'Analisis y Deasarrollo de Software'.bgBlue]
    for(const texto of textos){
        const textoInvertido = math.invertirtexto(texto);
        console.log("El texto '%s' se invierte como '%s'", texto, textoInvertido);
    }
    const datos = [1234567, 'ADSO 2798618', [2798618, 'ADSO']]
    for(let dato of datos){
        const datoconvertido = math.conversionDatos(dato);
        console.log(`El resultado de conversion es: ${datoconvertido}`);
        



    }
    console.log('***********************************************************************************************************'.bgYellow);
    console.log('***********************************************************************************************************'.blue)
    console.log('***********************************************************************************************************\n'.yellow);
}


main();