//Esto es un ejemplo de una promesa.
// Se usan porque cuando hacemos aplicaciones que tienen que ir a buscar info a la bdd 
//o a traves de una api
// esta info no esta inmediatamente disponible
// y si quisieramos hacer un console.log de lo que devuelve nos daria undefined
//por que la info no existe en el momento en que lo queremos mostrar
// entonces las promesas esperan a tener la info, y cuando la tienen entonces la devuelven
// setTimeOut simula ser la rta tardia de la api o bdd

const peliculas = [
{
    nombre : "spider man",
    anio : 2020
},
{
    nombre : "spider man 2",
    anio : 2021
},
{
    nombre : "spider man 3",
    anio : 2023
}
]

const obtenerPeliculas = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
        resolve (peliculas);
        },
        3000);
    });
}

async function listarPeliculas () {
    try {
        const peliculasListadas = await obtenerPeliculas();
        console.log(peliculasListadas);
    }
    catch(err){
        console.log(err);
    }
}

listarPeliculas();