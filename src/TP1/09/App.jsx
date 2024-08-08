const produtos = [
    { nome: "Laptop", categoria: "Eletrônicos" },
    { nome: "Camisa", categoria: "Roupas" },
    { nome: "Smartphone", categoria: "Eletrônicos" },
    { nome: "Calça", categoria: "Roupas" },
    { nome: "Fone de Ouvido", categoria: "Eletrônicos" },
];

function agruparPorCategoria(produtos) {
    return (
        produtos.reduce((acumulador, produto) => {
        const { categoria, nome } = produto;
        if (!acumulador[categoria]) {
            acumulador[categoria] = [];
        }
        acumulador[categoria].push(nome);
        return acumulador;
    }, {}));
}

const App = () => {
    const produtosOrganizados = agruparPorCategoria(produtos);
    console.log(produtosOrganizados);
    return (
        <div>
            <h1>Produtos Organizados</h1>
            {Object.keys(produtosOrganizados).map((categoria) => (
                <div key={categoria}>
                    <h2>{categoria}</h2>
                    <ul>
                        {produtosOrganizados[categoria].map((nome, index) => (
                            <li key={index}>{nome}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default App;
