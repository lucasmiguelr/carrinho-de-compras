let totalGeral = 0
limpar();

function adicionar(){
    //Recuperar o nome, quantidade e o valor do produto.
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    //Calcular o preço do subtotal
    let preco = quantidade * valorUnitario;
    //Adicionar os produtos no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">${valorUnitario}</span>
        </section>`

    //Calculando o preço final
    totalGeral = totalGeral + preco;
    let valorFinal = document.getElementById('valor-total');
    valorFinal.textContent = `R$ ${totalGeral},00`;
    document.getElementById('quantidade').value = 0;
    
}
function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0,00';

}