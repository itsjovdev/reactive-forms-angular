import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-basic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './basic-page.component.html',
})
export class BasicPageComponent {
  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  myForm: FormGroup = this.fb.group({
    //Estos campos seran requeridos, esta campo(name) tiene que tener minimo 3 caracteres
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(10)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  });

  /*Para validar un campo usamos validators 
  isValidField(fieldName: string): boolean | null {
    return (
      this.myForm.controls[fieldName].errors &&
      this.myForm.controls[fieldName].touched
    );
  }
  
  getFieldError(fieldName: string): string | null {
    //1.- verificamos si el campo existe enn el formulario, si no existe retornamos null
    if (!this.myForm.controls[fieldName]) return null;
    //2.- la variable errors contiene los errores del campo, si no existe errores, asignamos un objeto vacio para evitar errores  al iterar
    const errors = this.myForm.controls[fieldName].errors ?? {};
    //3.- recorremos los tipos de errores del objeto 'errors'
    for (const key of Object.keys(errors)) {
      //4.- dependiendo del tipo de error, retornamos un mensaje diferente
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Este campo debe tener al menos ${errors['minlength'].requiredLength} caracteres`;
        case 'min':
          return `Valor minimo de ${errors['min'].min}`;
      }
    }
    //5.- si no se encuentra un error conocido, retornamos null
    return null;
  }  */
  //este metodo serveria para verificar que el formulario sea valido antes de guardar o enviar
  onSave() {
    if (this.myForm.invalid) {
      //la propiedad markAllAsTouched() marca todos los campos como tocados, lo que hace que se muestren los errores de validacion
      this.myForm.markAllAsTouched();
      return;
    }
    //para resetear el formulario, se puede usar el metodo reset() del formulario
    this.myForm.reset();
  }
}
