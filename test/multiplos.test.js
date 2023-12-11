//Listando todos os números inteiros abaixo de 10 que são múltiplos de 3 ou 5,
//ficamos com 3, 5, 6 e 9. A soma desses múltiplos é 23. 
//Crie uma função que retorne a soma de todos os múltiplos de 5 ou 7 abaixo de 1000.

const { calcular } = require('../src/multiplos')

describe('Soma dos Múltiplos', () => {

    it('Deve validar a soma dos multiplos de 5 e 7', () => {
        expect(calcular()).toBe(156361)
    });


});