// Exercício 4 

function buscarProduto(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const produtos = [
        { id: 1, nome: 'Caneta', preco: 2.5 },
        { id: 2, nome: 'Caderno', preco: 25 },
        { id: 3, nome: 'Lápis', preco: 1.2 }
      ]
      // após 300ms devolve o produto encontrado 
      resolve(produtos.find(p => p.id === id))
    }, 300)
  })
}

async function mostrarProduto() {
  console.log('Buscando...')
  const produto = await buscarProduto(2)
  console.log('Encontrado:', produto)

  // testando um id que não existe 
  const inexistente = await buscarProduto(99)
  if (inexistente) {
    console.log('Encontrado:', inexistente.nome)
  } else {
    console.log('Produto não encontrado')
  }
}

mostrarProduto()

