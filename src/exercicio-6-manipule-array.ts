// 6. Dada a lista de usuarios do nosso sistema, manipule o array, 
// para gerar em duas estruturas separadas a coleção de usuários que estão 
// ativos e a coleção de usuários que estão inativos.

const usuarios = [
  { nome: 'Diego', idade: 23, ativo: true },
  { nome: 'Gabriel', idade: 15, ativo: false },
  { nome: 'Lucas', idade: 30, ativo: false },
];

const usuariosAtivos = usuarios.filter((usuario)=>{
  //  return usuario.ativo === true;
  return usuario.ativo; 
});
 
const usuariosInativos = usuarios.filter((usuario) =>{
  // return usuario.ativo === false;
  return !usuario.ativo
});