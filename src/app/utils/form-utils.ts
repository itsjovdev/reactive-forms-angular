import { FormGroup } from '@angular/forms';
//Este archivo contiene funciones utilitarias  y reutilizablees para tranajar con formularios reactivos
//es de responsabilidad unica porque su una funcion es de proporcionar una funciona de ayuda para validar campos de formulario
//reutilizacion porque se puede utilizar en muchos formularios
export class FormUtils {
  static isValidField(form: FormGroup, fieldName: string): boolean | null {
    return form.controls[fieldName].errors && form.controls[fieldName].touched;
  }
}
