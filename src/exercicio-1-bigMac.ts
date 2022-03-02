// 1. Abaixo você tem a lista de todos os ingredientes necessários para fazer 
// um Hambúrguer.Utilizando o reduce, como você pode fazer para unir todos os itens 
// do array em uma única string ?


const ingredientes = [
  '2 hambúrgueres',
  'alface',
  'queijo',
  'molho especial',
  'cebola',
  'picles',
  'pão com gergelim'
];

const fazUmBigMac = (ingredientes: string[]): string => {
  const listaDeIngredientes: string = ingredientes.reduce(
    (valorAnterior, valorAtual) => {

      return valorAnterior + ", " + valorAtual
    }

  );
  return listaDeIngredientes;
};

// fazUmBigMac(ingredientes);
// const bigMac = fazUmBigMac(ingredientes);
// console.log(bigMac);

console.log(fazUmBigMac(ingredientes))