import { Component, signal, computed, effect} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Produto } from '../../produtos/produto/produto';

@Component({
  selector: 'app-carrinho',
  imports: [Carrinho, CurrencyPipe,Produto],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css',
})
export class Carrinho {
  carrinho = signal<{ nome: string; preco: number }[]>([])

  quantidadeCarrinho = computed(() => this.carrinho().length);
  totalCarrinho = computed(() =>
    this.carrinho().reduce((total, item) => total + item.preco, 0)
  );

  adicionarAoCarrinho(produto: { nome: string; preco: number }) {
    this.carrinho.update(listaAtual => [
      ...listaAtual,
      produto
    ]);
  }
}
