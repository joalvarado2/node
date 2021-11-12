const { multi } = require("./helpers/tablaMulti");
const argv = require("./yargs/yargs")


//console.clear();
//console.log(argv);
//console.log("base: yargs", argv.b); 


multi(argv.b, argv.l)
  .then((/* archivo */) => console.log(/* archivo, */ "creado".cyan))
  .catch((error) => console.log(error));
