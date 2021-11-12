const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "me indica el numero que se va multiplicar"
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: true,
    default: false,
    describe: "me muestra la tabla por consola"
  })
  .option("m", {
    alias: "maximo",
    type: "number",
    demandOption: true,
    describe: "asigna el valor maximo a multiplicar"
  })
  .check((argv, options) => {
    if (isNaN(argv.b) || isNaN(argv.l) || isNaN(argv.m)) {
      throw new Error("the base has to be a number");
    }
    return true;
  }).argv;

module.exports = argv;



//node app -b 5 => crea la tabla
//node app -b 5 -l => crea la tabla pero me la muestra en consola