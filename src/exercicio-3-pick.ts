//3. Implementar o método de `pick` que receba um parâmetro do tipo array de objetos,
//e outro parâmetro do tipo array de strings.Este método deverá retornar todos os
//itens do array original, porém, mantendo somente os atributos com os nomes
//passados no segundo atributo.Importante: o array original deve ser mantido intacto.
//Abaixo, segue um exemplo do funcionamento esperado:

function pick(lista: any[], campos: string[]) {
    const resultado = lista.map((itemOriginal) => {
        const novoItem = {};
        campos.forEach((campo) => {
            novoItem[campo] = itemOriginal[campo]
        })
        return novoItem;
    })
    return resultado;
}

function testePick() {
    const alunos = [
        { nome: 'João', nota: 7.3, bolsista: false },
        { nome: 'Maria', nota: 9.2, bolsista: true },
        { nome: 'Pedro', nota: 9.8, bolsista: false },
        { nome: 'Ana', nota: 8.7, bolsista: true }
    ];

    const resultado = pick(alunos, ['nome', 'nota']);
    for (let posicao = 0; posicao < resultado.length; posicao++) {
        console.log(resultado[posicao])
    }
}
testePick()

// resultado esperado:
// [
//   { nome: 'João', nota: 7.3 },
//   { nome: 'Maria', nota: 9.2 },
//   { nome: 'Pedro', nota: 9.8 },
//   { nome: 'Ana', nota: 8.7 }
// ]

// forma alternativa de implementação
// pick(alunos, 'nome', 'nome')

// se preferir uma assinatura de typescript, segue:
// export const pick = <T extends Record>(lista: T, ...campos: (keyof T)[]): Record => {
//   return null;
// };


