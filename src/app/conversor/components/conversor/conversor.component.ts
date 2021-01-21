import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Moeda, Conversao, ConversaoResponse } from '../../models';
import { MoedaService, ConversorService } from '../../services';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.scss']
})
export class ConversorComponent implements OnInit {

  public moedas!: Moeda[];
  public conversao!: Conversao;
  public possuiErro = false;
  public conversaoResponse!: ConversaoResponse;

  @ViewChild('conversaoForm', { static: true })
  conversaoForm!: NgForm;

  constructor(private moedaService: MoedaService, private conversorService: ConversorService) { }

  ngOnInit(): void {
    this.moedas = this.moedaService.listarTodas();
    this.init();
  }

  public init(): void {
    this.conversao = new Conversao('EUR', 'BRL', null);


    this.possuiErro = false;
  }

  public converter(): void {
    if (this.conversaoForm.valid) {
      this.conversorService.converter(this.conversao)
        .subscribe(response => {
          this.conversaoResponse = response;
          console.log(response);
        }
          , (error) => this.possuiErro = true);
    }
  }

}
