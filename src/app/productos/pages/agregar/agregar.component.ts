import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {
  public texto: string = 'Edgar Manuel'
  public color: string = 'blue'
  public miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  })
  constructor(private fb: FormBuilder) { }
  hasError(field: string): boolean {
    return this.miFormulario.get(field)?.invalid ?? false
  }
  cambiarNombre() {
    this.texto = Math.random().toString()
  }
  cambiarColor() {
    this.color = "#xxxxxx".replace(/x/g, y => (Math.random() * 16 | 0).toString(16))
  }
}