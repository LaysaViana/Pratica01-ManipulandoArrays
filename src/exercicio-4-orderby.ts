// 4. ainda com o mesmo exemplo dos alunos, implementar agora um método chamado
// `orderBy`.Esse método deverá receber um parâmetro do tipo array de objetos, e outro 
// parâmetro, um array de strings.O método deverá retornar um novo array, 
// com os objetos ordenados de acordo com o critério do array de strings.Importante: 
// O array original deve ser mantido intacto.Abaixo, segue um exemplo do funcionamento 
// esperado:

function criarComparador(campo: string) {
  return (primeiro: any, segundo: any) => {
    if (primeiro[campo] < segundo[campo]) {
      return -1;
    }
    if (segundo[campo] < primeiro[campo]) {
      return 1;
    }
    return 0;
  };
}

function orderBy(lista: any[], campos: string[]) {
  const copiaLista = [...lista];
  // const aoContrario = campos.reverse()
  // aoContrario.forEach
  campos.reverse().forEach((campo) => {
    const comparador = criarComparador(campo);
    copiaLista.sort(comparador);
  });
  return copiaLista;
}

function exercicioOrderBy() {
  const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
  ];
  const resultado = orderBy(alunos, ['nota', 'nome']);
  for (let index = 0; index < resultado.length; index++) {
    console.log(resultado[index]);
  }
}
exercicioOrderBy()

// resultado esperado:
// [
//   { nome: 'João', nota: 7.3 },
//   { nome: 'Ana', nota: 8.7 }
//   { nome: 'Maria', nota: 9.2 },
//   { nome: 'Pedro', nota: 9.8 },
// ]

// forma alternativa de implementação
// orderBy(alunos, 'nota', 'nome')

// se preferir uma assinatura de typescript, segue:
// export const orderBy = <T extends Record>(record: T, ...args: (keyof T)[]): Record => {
//   return null;
// };