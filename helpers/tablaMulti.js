console.clear();
const fs = require("fs");

const multi = async (number, listar = false) => {
  try {
    const num = number;
    let salida = "";
    for (let i = 1; i <= 10; i++) {
      let res = num * i;
      salida += `${num} * ${i} = ${res}\n`;
    }

    fs.appendFile("tabla.txt", salida, (err) => {
      if (err) throw err;
    });

    if (listar) {
      console.log("===================");
      console.log(`tabla del ${number}`);
      console.log("===================");

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
