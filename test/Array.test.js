const { max, min } = require('../src/Array')

describe('Validar Maior e menor valor de um Array', () => {
    it('Maior dos Valores', () => {
        expect(max).toBe(50)
    });

    it('Menor dos Valores', () => {
        expect(min).toBe(10)
    });

    
});

