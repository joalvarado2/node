console.clear();
var colors = require('colors');
const fs = require("fs");

const multi = async (number, listar = false, max) => {
  try {
    const num = number;
    let salida = "";
    for (let i = 1; i <= max; i++) {
      let res = num * i;
      salida += `${num} x ${i} = ${res}\n`;
    }

    fs.appendFile("tabla.txt", salida, (err) => {
      if (err) throw err;
    });

    if (listar) {
      console.log("===================".rainbow);
      console.log(`tabla del ${number}`.cyan);
      console.log("===================".rainbow);

      console.log(salida);
    }
    return salida;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  multi,
};
