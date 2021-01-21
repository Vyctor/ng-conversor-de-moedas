import { Directive, HostListener, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[appNumero]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NumeroDirective,
    multi: true
  }]
})

export class NumeroDirective implements ControlValueAccessor {

  public onTouched: any;
  public onChange: any;

  constructor(private elementRef: ElementRef) { }

  @HostListener('keyup', ['$event'])
  public onKeyUp($event: any): void {
    let valor = $event.target.value;
    const posicaoDecimais = valor.indexOf('.');

    valor = valor.replace(/[\D]/g, '');

    if (posicaoDecimais > 0) {
      valor = valor.substring(0, posicaoDecimais) + '.' + valor.substring(posicaoDecimais);
    }
    $event.target.value = valor;
    this.onChange(valor);
  }

  writeValue(obj: any): void {
    this.elementRef.nativeElement.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
