const { multi } = require("./helpers/tablaMulti");
const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: true,
    default: false,
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw new Error("the base has to be a number");
    }
    return true;
  }).argv;

console.clear();
console.log(argv);
console.log("base: yargs", argv.b);

multi(argv.b, argv.l)
  .then((/* archivo */) => console.log(/* archivo, */ "creado"))
  .catch((error) => console.log(error));
