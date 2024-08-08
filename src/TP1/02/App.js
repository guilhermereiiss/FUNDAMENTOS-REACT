const produtos = [ 
{ nome: "Laptop", disponivel: true }, 
{ nome: "Tablet", disponivel: false }, 
{ nome: "Smartphone", disponivel: true } 
];

function filtrarDisponiveis(produtos){
  return produtos.filter(Prod_Disponivel => Prod_Disponivel.disponivel);
};

let mostrarResultado = filtrarDisponiveis(produtos);
console.log(mostrarResultado);