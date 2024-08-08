function filtrarAcimaPreco(produtos, preco) {
    return produtos.filter((produto) => produto.preco > preco);
}

const produtos = [
    { nome: "Laptop", preco: 1000 },
    { nome: "Tablet", preco: 400 },
    { nome: "Smartphone", preco: 1500 },
];
const App = () => {
    const produtosAcimaPreco = filtrarAcimaPreco(produtos, 600);
    console.log(produtosAcimaPreco);
    return (
        <div>
            <h1>Produtos acima de R$ 600,00:</h1>
            <ul>
                {produtosAcimaPreco.map((produto) => (
                    <li key={produto.nome}>{produto.nome} - R${produto.preco},00</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
