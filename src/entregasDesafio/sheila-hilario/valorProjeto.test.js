const {calcularHorasDeProjeto} = require("../../dominio/calculadora/Projeto/horasPorProjeto")

describe ("horasPorProjeto", () => {
  test('deve retornar o numero total de horas a partir de uma lista de funcionalidades',() =>{

    const listaDeFuncionalidade = [
    'setup', 
    'responsividade', 
    'construcao_1_pagina', 
    'construcao_1_pagina', 
    'construcao_1_pagina', 
    'formulario', 'ssr'
  ]
  const resultado = calcularHorasDeProjeto(listaDeFuncionalidade)

  expect (resultado).toEqual(72)
  })
  test('deve retornar 0 horas para uma lista vazia de funcionalidades', () => {
    const listaDeFuncionalidade = [];
    const resultado = calcularHorasDeProjeto(listaDeFuncionalidade);

    expect(resultado).toEqual(0);
  });
  test('deve retornar 25 horas para uma lista com uma única funcionalidade "login"', () => {
    const listaDeFuncionalidade = ['login'];
    const resultado = calcularHorasDeProjeto(listaDeFuncionalidade);

    expect(resultado).toEqual(25);
  });

})

