import { Component, signal, computed, effect, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { CarrinhoService } from '../../../core/service/carrinho.service';

@Component({
  selector: 'app-carrinho',
  imports: [CurrencyPipe],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css',
})
export class Carrinho {

  carrinhoService = inject(CarrinhoService);

  quantidadeCarrinho = this.carrinhoService.quantidade;
  totalCarrinho = this.carrinhoService.total;

}
