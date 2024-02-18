import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormArray, FormBuilder,    ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule ,  CommonModule],
  templateUrl: './reactive-forms.component.html',

})
export class ReactiveFormsComponent {
  constructor(private fb: FormBuilder) { }
  userForm = this.fb.group({
    hobbies: this.fb.array([this.fb.control('')])
  });

  get hobbies() {
    return this.userForm.get('hobbies') as FormArray;
  }

  addHobby() {
    this.hobbies.push(this.fb.control(''));
  }

  removeHobby(index: number) {
    this.hobbies.removeAt(index);
  }

  onSubmit() {
    console.log(this.userForm.value);
  }
}
