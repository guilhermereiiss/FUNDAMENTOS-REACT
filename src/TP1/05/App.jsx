const produtos = [
    { nome: "Laptop", preco: 1000 },
    { nome: "Tablet", preco: 400 },
    { nome: "Smartphone", preco: 1500 },
];

function encontrarProdutoPorNome(produto, nome) {
    return produto.find((prod) => prod.nome === nome);
}

const App = () => {
    const produtoEncontrado = encontrarProdutoPorNome(produtos, "Smartphone");
    console.log(produtoEncontrado);
    return (
        <div>
            <h1>Produtos encontrados:</h1>
            <ul>
                {produtoEncontrado && (
                    <li>
                        {produtoEncontrado.nome} - R${produtoEncontrado.preco},00
                    </li>
                )}
            </ul>
        </div>
    );
};

export default App;