const fs = require('fs');
require('colors');



const createFile = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = '';

    for (let i = 1; i <= hasta; i++) {
      salida += (`${base} x ${i} = ${base * i}\n`);
    }
    if (listar) {
      console.log('===========================');
      console.log(`Tabla del ${base}`.green);
      console.log('===========================');
      console.log(salida);
    }


    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabasela-${base}.txt`;
  } catch (error) {
    throw err
  }
}

module.exports = { createFile }