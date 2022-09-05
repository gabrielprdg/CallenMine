// passando configuração para cada tipo de test - unit test
const config = require('./jest.config')
config.testMatch = ['**/*.spec.ts']
module.exports = config
