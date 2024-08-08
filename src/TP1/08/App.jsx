const itens = [
    { nome: "Laptop", quantidade: 1, precoUnitario: 1000 },
    { nome: "Tablet", quantidade: 2, precoUnitario: 400 },
    { nome: "Smartphone", quantidade: 1, precoUnitario: 1500 },
];

function calcularPrecoTotal(itens) {
    return itens.reduce(
        (total, item) => total + item.quantidade * item.precoUnitario,
        0,
    );
}

const App = () => {
    const precoTotal = calcularPrecoTotal(itens);
    return (
        <div>
            <h1>Produtos encontrados:</h1>
            <p> O valor de tudo ficou: R$ {precoTotal},00 </p>
        </div>
    );
};

export default App;
