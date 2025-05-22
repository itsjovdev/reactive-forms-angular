import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-dynamic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './dynamic-page.component.html',
})
export class DynamicPageComponent {
  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array(
      [
        ['metal gear', Validators.required],
        ['final fantasy', Validators.required],
      ],
      Validators.minLength(2) // At least one game is required
    ),
  });

  

  
  newFavorite = new FormControl('', Validators.required) 


  // FormArray es un arreglo que contiene varios FormControls
  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }
  onAddToFavorites(){
    //si no es valido
    if(this.newFavorite.invalid)  return;
    const newGame = this.newFavorite.value;
    this.favoriteGames.push(this.fb.control(newGame, Validators.required))
    this.newFavorite.reset();
  }

  onDeleteFavorite(index: number){
    this.favoriteGames.removeAt(index)
  }
  onSubmit(){
    this.myForm.markAllAsTouched()
  }
 
}
