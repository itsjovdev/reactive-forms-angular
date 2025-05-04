import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-switches-page',
  imports: [JsonPipe],
  templateUrl: './switches-page.component.html',
})
export class SwitchesPageComponent { }
