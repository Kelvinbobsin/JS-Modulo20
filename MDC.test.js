const { mdc } = require('./MDC')

describe('Validar MDC entre 2 valores', () => {

    it('Primeiro valor', () => {
        expect(mdc(6, 8)).toBe(2)
    });

    


});   