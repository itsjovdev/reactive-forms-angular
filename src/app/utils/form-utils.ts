import { FormGroup } from '@angular/forms';
//Este archivo contiene funciones utilitarias  y reutilizablees para tranajar con formularios reactivos
//es de responsabilidad unica porque su una funcion es de proporcionar una funciona de ayuda para validar campos de formulario
//reutilizacion porque se puede utilizar en muchos formularios
export class FormUtils {
  //estaticos porque se usan sin instanciar la clase, por ejemplo FormUtils.isValidField()
  static isValidField(form: FormGroup, fieldName: string): boolean | null {
    return (
      !!form.controls[fieldName].errors && form.controls[fieldName].touched
    );
  }

  static getFieldError(form: FormGroup, fieldName: string): string | null {
    //1.- verificamos si el campo existe enn el formulario, si no existe retornamos null
    if (!form.controls[fieldName]) return null;
    //2.- la variable errors contiene los errores del campo, si no existe errores, asignamos un objeto vacio para evitar errores  al iterar
    const errors = form.controls[fieldName].errors ?? {};
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
  }
}
