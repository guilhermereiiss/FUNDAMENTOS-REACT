import "./cartaoProdutoC.css"

const CartaoProduto = ({ nome, descricao, preco, imagem }) => {
    return (
        <div className="organ_card">
        <div className="cartao-produto">
            <img src={imagem} alt={nome} className="cartao-imagem" />
            <h2 className="cartao-nome">{nome}</h2>
            <p className="cartao-descricao">{descricao}</p>
            <p className="cartao-preco">{preco}</p>
        </div>
        </div>
    );
};

export default CartaoProduto;