import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-model-example',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ng-model-example.component.html',
})
export class NgModelExampleComponent{
  @Input() userName: string = ""
  @Input() password: string = ""
}
