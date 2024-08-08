
function  calcularPrecoTotal(preco,quantidade){
  return preco * quantidade;
};

let precoP = 59.99;
let quantP = 30;
let totalP = calcularPrecoTotal(precoP,quantP);
console.log(`O preço total é R$ ${totalP.toFixed(2)}`);