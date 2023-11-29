const { mdc } = require('./MDC')

describe('Validar resultado do MDC', () => {

    it('Calculo com valores corretos', () => {
        expect(mdc(6, 8)).toBe(2)
    });

    it('Calculo com valores negativos', () => {
        expect(mdc(-20, -10)).toBe(-10)
    });

    
});   