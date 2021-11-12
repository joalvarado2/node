console.clear();
var colors = require('colors');
const fs = require("fs");

const multi = async (number, listar = false, max) => {
  try {
    const num = number;
    let salida = "";
    let consola = "";

    for (let i = 1; i <= max; i++) {
      let res = num * i;
      salida += `${num} x ${i} = ${res}\n`;
      consola += `${num} ${"x".yellow} ${i} ${"=".yellow} ${res}\n`;   // esta linea representa la funcion de colors en la consola
    }

    fs.writeFileSync(`./tables/tabla-${num}.txt`, salida) 

    if (listar) {
      console.log("===================".rainbow);
      console.log(`tabla del ${number}`.cyan);
      console.log("===================".rainbow);

      console.log(consola);
    }
    return `tabla ${salida}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  multi,
};
