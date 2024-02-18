import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { NgModelExampleComponent } from './ng-model-example/ng-model-example.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,NgModelExampleComponent , FormsModule ,ReactiveFormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export  class AppComponent {
  user = {
    username: '',
    password: ''
  };
  onSubmit() {
  
    console.log(this.user);
    this.user.username=""
    this.user.password=""
  }
}
