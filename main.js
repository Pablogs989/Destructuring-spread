
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