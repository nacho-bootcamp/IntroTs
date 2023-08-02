const numero: number = 2;

const saludo: string = "hola";

const verdad: boolean = true;

const mi_Objeto: object = {};

const valor_null: null = null;

const valor_undefined: undefined = undefined;

const arrayN: number[] = [1, 23, 423, 543];

const arrayS: string[] = ["chau", "hola"]

// es una funcion en donde definimo que tipo de valor debe ser su parametro
// y tambien definimos que va a retornar la funcion
function filtrar(numero: number[]): number[] {
  return numero.filter(e => e % 2 === 0)
}

//Con el comando tsc "nombre del archivo.ts"
//te crea un archivo .js y ese archivo podemos utilizar para
//ejecutar


// el comando tsc --init nos crea un archivo .json
// y ahi dentro estan todas las opciones del compilador
//que se va a poder trabajar