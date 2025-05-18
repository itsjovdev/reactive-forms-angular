import { FormArray, FormGroup, ValidationErrors } from '@angular/forms';
//Este archivo contiene funciones utilitarias  y reutilizablees para tranajar con formularios reactivos
//es de responsabilidad unica porque su una funcion es de proporcionar una funciona de ayuda para validar campos de formulario
//reutilizacion porque se puede utilizar en muchos formularios
export class FormUtils {
  
  static getTextError(errors: ValidationErrors){
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
    return null;
  }
  
  //estaticos porque se usan sin instanciar la clase, por ejemplo FormUtils.isValidField()
  static isValidField(form: FormGroup, fieldName: string): boolean | null {
    return (
      !!form.controls[fieldName].errors && form.controls[fieldName].touched
    );
  }

  static getFieldError(form: FormGroup, fieldName: string): string | null {
    //1.- verificamos si el campo existe enn el formulario, si no existe retornamos null
    if (!form.controls[fieldName]) return null;
    
   const errors = form.controls[fieldName].errors ?? {};

   return FormUtils.getTextError(errors)

  }

 static isValidFieldInArray(formArray: FormArray, index: number){
    return(
      formArray.controls[index].errors && formArray.controls[index].touched
    )
  }

    static getFieldErrorInArray(formArray: FormArray, index: number): string |null {
    if (formArray.controls.length == 0) return null;
    const errors = formArray.controls[index].errors  ?? {};

    return FormUtils.getTextError(errors)

    }
  }

