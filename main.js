
//1

const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

const [, ana] = empleados

console.log(ana);

const [luis] = empleados;
const { email } = luis;
console.log(email);


const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}

const { name: nombre, type, ability, stats, moves } = pokemon
console.log(nombre);
console.log(type);
const [, move] = moves;
console.log(move);


//2

const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}

const merge = { ...pokemon, ...pikachu }
console.log(merge);

const sumEveryOther = (...numeros) => {
    let suma = 0;
    numeros.forEach(numero => {
        suma += numero
    });
    return suma;
}

console.log(sumEveryOther(6, 8, 2, 3, 1));
console.log(sumEveryOther(11, 3, 12));

const addOnlyNums = (...numeros) => {
    let suma = 0;
    numeros.forEach(numero => {
        if (typeof numero === "number") {
            suma += numero
        }
    });
    return suma;
}

console.log(addOnlyNums(1, 'perro', 2, 4));

const countTheArgs = (...datos) => {
    console.log(datos.length);
}
countTheArgs('gato', 'perro'); //2
countTheArgs('gato', 'perro', 'pollo', 'oso'); //4

const combineTwoArrays = (array1, array2) => {
    const array = [...array1, ...array2]
    return array
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
console.log(combineTwoArrays(array1, array2));


//Extra

const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
};

const { today: maximaHoy } = HIGH_TEMPERATURES;
const { tomorrow: maximaManana } = HIGH_TEMPERATURES;
console.log(maximaHoy)
console.log(maximaManana)


const onlyUniques = (...datos) => {
    const unicos = [];
    datos.forEach(dato => {
        if (!unicos.includes(dato)) {
            unicos.push(dato);
        }
    });
    return unicos;
}

console.log(onlyUniques('gato', 'pollo', 'cerdo', 'cerdo'));
console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8));

function combineAllArrays(...arrays) {
    return arrays.reduce((combinedArray, currentArray) => {
        return combinedArray.concat(currentArray);
    }, []);
}

console.log(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]));
console.log(combineAllArrays([2, 7, 3, 1],[2, 7, 4, 12],[2, 44, 22, 7, 3, 1]));

function sumAndSquare(...args) {
    return args.reduce((total, num) => {
        return total + (num ** 2);
    }, 0);
}

console.log(sumAndSquare(2,4,6,8));