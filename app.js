'use strict';

const { createFile } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

// const base = '37';

console.clear();

// console.log(process.argv);
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');
// console.log(base);

// console.log(process.argv);
// console.log(argv);
// console.log('base: yargs', argv.base);


createFile(argv.base, argv.listar, argv.hasta)
  .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
  .catch(err => console.log(err));
