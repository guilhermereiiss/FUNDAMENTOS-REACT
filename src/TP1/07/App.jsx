const produtos = [
    { nome: "Laptop", quantidadeEmEstoque: 5 },
    { nome: "Tablet", quantidadeEmEstoque: 0 },
    { nome: "Smartphone", quantidadeEmEstoque: 3 },
];

function verificarEstoque(produtos){
   return produtos.filter((produto) => produto.quantidadeEmEstoque > 0)
}

const App = () => {
    const produtosDisponiveis = verificarEstoque(produtos);
    console.log(produtosDisponiveis);
    return (
        <div>
            <h1>Produtos disponíveis:</h1>
            <ul>
                {produtosDisponiveis.map((produto) => (
                    <li key={produto.nome}>
                        {produto.nome} - Quantidade em estoque: {produto.quantidadeEmEstoque}
                    </li>
                ))}
            </ul>
        </div>
    );
};



export default App;
