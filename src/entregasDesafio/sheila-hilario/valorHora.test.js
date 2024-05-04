
const modulo = require("../../dominio/calculadora/constantes/constantes")

describe('calculadoraPorHora', () => {
  test('Deve retornar o salário 1412, retorna 9 por hora', () => {
    const rendaMensal = 1412 

    const resultado = modulo.CalcularHorasdeProjetos(rendaMensal) 

    expect(resultado).toEqual(9) 
  });
});