function adicionarAoCarrinho(evento) {
    const botao = evento.target;
    criarItemDaLista({
        nome: botao.dataset.nomeDoProduto,
        preco: botao.dataset.precoDoProduto,
    });
    atualizarTotalDoCarrinho();
}

function criarItemDaLista(produto) {
    const ul = document.querySelector('#carrinhoDeCompras');
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex align-items-center justify-content-between'
    li.textContent = `${produto.nome} (${produto.preco})`;
    li.dataset.nomeDoProduto = produto.nome;
    li.dataset.precoDoProduto = produto.preco;
    li.append(criarBotaoDeRemoverProduto());
    ul.append(li);
}

function criarBotaoDeRemoverProduto() {
    const btn = document.createElement('button');
    btn.className = 'btn btn-danger btn-sm'
    btn.textContent = 'Remover';
    btn.addEventListener('click', removerProduto)
    return btn;
}

function removerProduto(evento) {
    const botao = evento.target;
    botao.parentElement.remove();
    atualizarTotalDoCarrinho();
}

function atualizarTotalDoCarrinho() {
    const elementoTotal = document.querySelector('#totalDoCarrinho');
    const lis = document.querySelectorAll('#carrinhoDeCompras li');
    let total = 0;
    for (const li of lis) {
        total += Number(li.dataset.precoDoProduto);
    }
    elementoTotal.textContent = total;
}