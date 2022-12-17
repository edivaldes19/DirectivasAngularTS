import { Directive, ElementRef, Input, OnInit } from '@angular/core';
@Directive({ selector: '[error-msg]' })
export class ErrorMsgDirective implements OnInit {
  public htmlElement: ElementRef<HTMLElement>
  private _msg: string = 'Este campo es obligatorio.'
  private _color: string = 'red'
  @Input() public set color(valor: string) {
    this._color = valor
    this.setColor()
  }
  @Input() public set msg(valor: string) {
    this._msg = valor
    this.setMsg()
  }
  @Input() public set valido(valor: boolean) {
    valor ? this.htmlElement.nativeElement.classList.add('hidden') : this.htmlElement.nativeElement.classList.remove('hidden')
  }
  constructor(private el: ElementRef<HTMLElement>) { this.htmlElement = el }
  ngOnInit(): void {
    this.setStyle()
    this.setColor()
    this.setMsg()
  }
  setStyle(): void {
    this.htmlElement.nativeElement.classList.add('form-text')
  }
  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color
  }
  setMsg(): void {
    this.htmlElement.nativeElement.innerText = this._msg
  }
}