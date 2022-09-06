// passando configurção para cada tipo de test - integration tests
const config = require('./jest.config.js')
config.testMatch = ['**/*.test.ts']
module.exports = config
