const argv = require('yargs')
  .options('b', {
    alias: 'base',
    type: 'number',
    describe: 'Es la base de la tabla de multiplicar',
    demandOption: true
  })
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw 'La base debe ser un número'
    }
    return true
  })
  .options('l', {
    alias: 'listar',
    type: 'boolean',
    describe: 'Lista la tabla en pantalla',
    default: false
  })
  .options('h', {
    alias: 'hasta',
    type: 'number',
    describe: 'Limite máximo de la tabla',
    demandOption: true
  })
  .check((argv, options) => {
    if (isNaN(argv.h)) {
      throw 'El limite debe ser un número'
    }
    return true
  })
  .argv;

module.exports = argv;