import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ConversorComponent } from './components';
import { ConversorService, MoedaService } from './services';
import { NumeroDirective } from './directives/numero.directive';
import { ModalCotacaoComponent } from './components/modal-cotacao/modal-cotacao.component';
import { DataBrPipe } from './pipes/data-br.pipe';
@NgModule({
  declarations: [ConversorComponent, NumeroDirective, ModalCotacaoComponent, DataBrPipe],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [ConversorComponent],
  providers: [MoedaService, ConversorService],
})
export class ConversorModule { }
