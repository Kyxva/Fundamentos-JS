
const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    // edad: 50,
    getNombre() {
        return `${ this.nombre } ${ this.apellido } ${ this.poder }`;
    }
}

// const nombre   = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder    = deadpool.poder;
// const { nombre, apellido, poder, edad = 0 } = heroe;

function imprimirHeroe({ nombre, apellido, poder, edad = 0 }) {
    nombre = 'Fernando';
    console.log( nombre, apellido, poder, edad );
}

// imprimirHeroe( deadpool );

const heroes = ['Deadpool', 'Superman', 'Batman'];

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

const [ , h2, h3 ] = heroes;

console.log( h2, h3 );
