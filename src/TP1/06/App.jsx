const produtos = [ 
{ nome: "Laptop", categoria: "Eletrônicos" }, 
{ nome: "Camisa", categoria: "Roupas" }, 
{ nome: "Smartphone", categoria: "Eletrônicos" } 
];

function filtrarPorCategoria(produtos, categoria){
    return produtos.filter(Prod_Categoria => Prod_Categoria.categoria === categoria);
}

const App = () => {
    const produtosEletronicos = filtrarPorCategoria(produtos, "Eletrônicos");
    console.log(produtosEletronicos);
    return (
        <div>
            <h1>Produtos Eletrônicos:</h1>
            <ul>
                {produtosEletronicos.map((produto) => (
                    <li key={produto.nome}>{produto.nome} - {produto.categoria}</li>
                ))}
            </ul>
        </div>
    )
};


export default App;

// Desenvolva uma função chamada filtrarPorCategoria que receba um array de objetos representando produtos, onde cada produto tem uma propriedade categoria. A função deve retornar um novo array contendo apenas os produtos que pertencem a uma categoria especificada.

// Entrada:

// const produtos = [ 
// { nome: "Laptop", categoria: "Eletrônicos" }, 
// { nome: "Camisa", categoria: "Roupas" }, 
// { nome: "Smartphone", categoria: "Eletrônicos" } 
// ];
// Saída:

// [
// { nome: "Laptop", categoria: "Eletrônicos" }, 
// { nome: "Smartphone", categoria: "Eletrônicos" }
// ]