const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "me crea la tabla con el archivo .txt"
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: true,
    default: false,
    describe: "me muestra la tabla por consola"
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw new Error("the base has to be a number");
    }
    return true;
  }).argv;

module.exports = argv;



//node app -b 5 => crea la tabla
//node app -b 5 -l => crea la tabla pero me la muestra en consola