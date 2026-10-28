// Exercício 5 
import { useState } from 'react'

function App() {
  const [produtos] = useState([
    { id: 1, nome: 'Caneta', preco: 2.5 },
    { id: 2, nome: 'Caderno', preco: 25 },
    { id: 3, nome: 'Lápis', preco: 1.2 },
    { id: 4, nome: 'Borracha', preco: 3 }
  ])

  function formatarPreco(valor) {
    return `R$ ${valor.toFixed(2).replace('.', ',')}`
  }

  return (
    <main>
      <h1>Produtos com preço menor que R$ 10,00</h1>
      <ul>
        {produtos
          .filter(p => p.preco < 10)
          .map(p => (
            <li key={p.id}>
              {p.nome} — {formatarPreco(p.preco)}
            </li>
          ))}
      </ul>
    </main>
  )
}

export default App
