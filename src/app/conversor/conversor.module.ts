import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorComponent } from './components';
import { ConversorService, MoedaService } from './services';

@NgModule({
  declarations: [ConversorComponent],
  imports: [CommonModule],
  exports: [ConversorComponent],
  providers: [MoedaService, ConversorService],
})
export class ConversorModule {}
