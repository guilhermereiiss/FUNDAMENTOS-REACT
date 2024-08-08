let Alunos_Notas = [
  {Nome: "João", Nota: 7},
  {Nome: "Maria", Nota: 9},
  {Nome: "Pedro", Nota: 8},
  {Nome: "Ana", Nota: 9},
];

function  calcularMediaAvaliacoes(Alunos_Notas){
  let somaNotas = Alunos_Notas.reduce((somador, aluno) => somador + aluno.Nota,0);
  let media = somaNotas / Alunos_Notas.length;
  return media;
};

let mostraResultado = calcularMediaAvaliacoes(Alunos_Notas);

console.log(`A medias das notas é ${mostraResultado}`);