console.clear();
var colors = require('colors');
const fs = require("fs");

const multi = async (number, listar = false) => {
  try {
    const num = number;
    let salida = "";
    for (let i = 1; i <= 10; i++) {
      let res = num * i;
      salida += `${num} ${"X".yellow} ${i} ${"=".yellow} ${res}\n`;
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
