const {frutas, dinero} = require('./frutas.js')
const cowsay = require("cowsay");
console.log(cowsay.say({
    text : "holaa a mi modulo",
    e : ".  .",
    T : " V "
}));

frutas.forEach(i => {
    console.count(i)
});
console.log(dinero)

