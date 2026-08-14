import { Component, signal, computed, effect } from '@angular/core';
import { Produto } from '../produto/produto';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-lista-produtos',
  imports: [Produto, CurrencyPipe],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})

export class ListaProdutos {

  constructor() {
    effect(() => {
      console.log('Lista de produtos alterada', this.produtos());
    });
    effect(() => {
      console.log('Valor total atualizado:', this.valorTotal());
    });
    effect(() => {
      if (typeof document !== 'undefined') {
        document.title = `(${this.totalProdutos()} da Minha loja)`;
      }
    });
  }
  produtos = signal<{ nome: string; preco: number; }[]>([]);


  produtoSelecionado = signal<string | null>(null);

  cores = ['red','green','blue', 'orange', 'purple'];
  i = 0;

  corSelecionada = signal<string>('green')

  exibirProduto(nome:string){
    this.produtoSelecionado.set(nome);

  this.corSelecionada.set(this.cores[this.i% this.cores.length])
  this.i++;

  console.log('Produto selecionado é' + nome);

  }

  totalProdutos = computed(() => this.produtos().length);

  valorTotal = computed(() => {
    return this.produtos().reduce(
      (total, item) => total + item.preco, 0);
  })


  substituirProdutos() {
    this.produtos.set([
      { nome: 'Produto novo', preco: 999 }
    ]);
  }

  produtosNovos = [
    { nome: 'notebook', preco: 3500 },
    { nome: 'mouse', preco: 150 },
    { nome: 'teclado', preco: 250.55 },
  ];

  filtrarNovoProduto() {
    /* Esta função irá filtar a lista atual de produtos 
    e irá retornar um objeto novo que 
    não esteja atualmente na lista de produtos */

    /* Caso a lista de produtos não tenha item nenhum 
    ele retorna e adiciona o primeiro item da lista de produtosNovos */
    if (this.produtos().length === 0) return this.produtosNovos[0];

    /* Verifica o tamanho da lista na tela, com o tamanho da lista de novos produtos
    caso a lista de novos produtos seja maior ou igual, ele continua adicionando na tela
    caso a lista de novos produtos seja menor, ele não faz nada
    */
    if (this.produtosNovos.length >= this.produtos().length) {
      /* Returna o item na posição atual baseada na quantidade de itens na tela
      Se tiver 2 item na tela, ele vai pegar o terceiro item na lista de novos produtos
      */
      return this.produtosNovos[this.produtos().length];
    }
    /* Caso nenhuma das condições anteriores sejam aplicadas, 
    ele retorna um valor nulo para verificação na inclusão da lista */
    return null;
  }

  adicionarProduto() {
    let novoproduto: { nome: string; preco: number } | null = this.filtrarNovoProduto();

    /* Caso a minha função retorne um item novo, eu adiciono na lista */
    if (novoproduto) {
      this.produtos.update((listaAtual) => [...listaAtual, novoproduto]);
    } else {
      /* Caso contrario, não faço nada */
    }
  }
}
