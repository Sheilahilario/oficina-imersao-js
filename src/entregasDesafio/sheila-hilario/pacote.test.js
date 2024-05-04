const modulo = require("../../dominio/calculadora/Projeto/pacote");

  describe('calcularPacote', () => {
    test('Deve retornar "pacote_basico" quando o totalHorasPorProjeto for menor que 50', () => {
      const totalHorasPorProjeto = 49;
         
      const result = modulo.calcularPacote(totalHorasPorProjeto);
  
      expect(result).toEqual("pacote_basico");
    });

    test('Deve retornar "pacote_avancado" quando o totalHorasPorProjeto for maior ou igual a 100', () => {
      const totalHorasPorProjeto = 100;
  
      const result = modulo.calcularPacote(totalHorasPorProjeto);
  
      expect(result).toEqual("pacote_avancado");
    });
  });
