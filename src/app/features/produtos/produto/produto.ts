import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
import { CaptalizePipe } from '../../../shared/pipes/captalize-pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-produto',
  imports: [CurrencyPipe, MatButtonModule, MatCardModule],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {
  @Input() nome:string = "";
  @Input() preco:number = 0;
  @Output() produtoSelecionado = new EventEmitter(); 

  selecionarProduto(){
    this.produtoSelecionado.emit(this.nome);
  }
}
