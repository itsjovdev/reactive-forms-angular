import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-country-page',
  imports: [],
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent {
  //La apariencia del formulario y tambien las validaciones
  myForm = new FormGroup({
    //ya ira asociado al control de input, select, ..
    name: new FormControl(''),
    price: new FormControl(0),
    inStorage: new FormControl(0),

  })
}
