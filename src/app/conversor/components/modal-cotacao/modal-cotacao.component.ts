import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ConversaoResponse, Conversao } from '../../models';
import { ConversorService } from '../../services';
@Component({
  selector: 'app-modal-cotacao',
  templateUrl: './modal-cotacao.component.html',
  styleUrls: ['./modal-cotacao.component.scss']
})
export class ModalCotacaoComponent implements OnInit {

  @Input() id!: string;
  @Input() conversaoResponse!: ConversaoResponse;
  @Input() conversao: Conversao = new Conversao();
  @Output() confirm: EventEmitter<any> = new EventEmitter<any>();

  constructor(private conversorService: ConversorService) { }

  ngOnInit(): void {
  }

  public novaConsulta(): void {
    this.confirm.emit();
  }

  public getValorConvertido(): string {
    if (this.conversaoResponse === undefined) {
      return '0';
    }
    return (this.conversao.valor && this.conversao.moedaPara) ?
      (this.conversao.valor * this.conversaoResponse.rates[this.conversao.moedaPara]).toFixed(2) : '0';
  }

  public getCotacaoPara(): number {
    return this.conversorService.cotacaoPara(this.conversaoResponse, this.conversao);
  }

  public getCotacaoDe(): string {
    return this.conversorService.cotacaoDe(this.conversaoResponse, this.conversao);
  }

  public getDataCotacao(): string {
    return this.conversorService.dataCotacao(this.conversaoResponse);
  }
}
