# Angular Forms

Angular, form işlemleri için iki farklı yaklaşım sunar: Template-driven forms ve Reactive forms. Bu iki yöntemden ilki olan Template-driven forms, form mantığını ve verilerini HTML template içinde yönetmeyi kolaylaştırır. Bu yöntem, daha az karmaşık formlar için uygundur ve Angular'ın form kontrollerini otomatik olarak yönetmesine izin verir

## Template-driven Forms

Template-driven form yaklaşımı, Angular'ın form işlemlerini yönetmek için two-way binding ([(ngModel)]) kullanır. Bu yöntemde form kontrolü, şablon içinde direkt olarak oluşturulur ve yönetilir. Bu, özellikle basit formlar ve prototip uygulamalar için hızlı ve etkili bir yöntemdir.

### Temel Adımlar

1. **FormsModule'ı İçe Aktarma :** İlk olarak, uygulamanızın modülünde FormsModule'ı içe aktarmanız gerekiyor. Bu, Angular'ın template-driven form işlevselliğini kullanmanıza olanak tanır.

```typescript
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {}
```

2. **Form ve Input Elementlerini Oluşturma:** HTML template dosyanızda bir `<form>` oluşturun ve gerekli `<input>` elementlerini ekleyin. ngModel direktifini ve name özelliğini her input için belirtin.

```html
<form (ngSubmit)="onSubmit()">
  <input
    type="text"
    name="username"
    [(ngModel)]="user.username"
    placeholder="username"
  />
  <input
    type="password"
    name="password"
    [(ngModel)]="user.password"
    placeholder="password"
  />
  <button type="submit">Submit</button>
</form>
```

3. **Component Sınıfında Modeli Tanımlama :** Component sınıfında, form verilerini tutacak bir model tanımlayın.

```typescript
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  user = {
    username: "",
    password: "",
  };

  onSubmit() {
    console.log(this.user);
    this.user.username = "";
    this.user.password = "";
  }
}
```

## Reactive Forms Nedir?

Reactive forms, daha esnek bir form işleme yaklaşımı sunar. Reactive forms, karmaşık senaryolar ve dinamik form işlemleri için daha uygun bir yaklaşımdır. Bu yöntem, form modeli Angular'ın FormControl, FormGroup ve FormArray sınıfları aracılığıyla daha esnek bir yönetim imkanı sağlar.

### Temel Kavramlar

1. **FormControl :** Bir form alanını temsil eder. Tek bir input kontrolü için durum ve validasyon bilgilerini tutar.

2. **FormGroup :** Bir form grubunu temsil eder. Birden fazla `FormControl`'ü bir araya getirerek bir formun bölümünü oluşturur.

3. **FormArray :** Aynı türdeki `FormControl`'lerin bir listesini temsil eder. Dinamik form senaryolarında, örneğin kullanıcı tarafından dinamik olarak eklenebilen form alanları için kullanılır.

### Temel Adımlar

Temel amacımız FormArray kullanarak kullanıcıdan birden fazla hobbie bilgisi alarak bir kayıt oluşturmak

1. **ReactiveFormsModule'ı İçe Aktarma** İlk olarak, ReactiveFormsModule'ı uygulamanıza dahil etmeniz gerekmektedir.

```typescript
import { Component } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-reactive-forms",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./reactive-forms.component.html",
})
export class ReactiveFormsComponent {}
```

2. **Component Sınıfı Oluşturma** Component sınıfında, bir FormGroup oluşturalım.

```typescript
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormArray, FormBuilder, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-reactive-forms",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./reactive-forms.component.html",
})
export class ReactiveFormsComponent {
  constructor(private fb: FormBuilder) {}

  userForm = this.fb.group({
    hobbies: this.fb.array([this.fb.control("")]),
  });

  get hobbies() {
    return this.userForm.get("hobbies") as FormArray;
  }

  addHobby() {
    this.hobbies.push(this.fb.control(""));
  }

  removeHobby(index: number) {
    this.hobbies.removeAt(index);
  }

  onSubmit() {
    console.log(this.userForm.value);
  }
}
```

Burda reactive form ile oluşturulmuş bir formumuz var. addHobby methodu ile hobbies arrayine yeni bir değer eklenirken removeHobby methodu ile indis numarasına bağlı olarak veri siliniyor onSubmit methodu ile son olarak veriler yazdırılıyor

3. **Bir Template de kullanma**

```html
<form [formGroup]="userForm" (ngSubmit)="onSubmit()">
  <div formArrayName="hobbies">
    <div *ngFor="let hobby of hobbies.controls; let i=index">
      <input [formControlName]="i" />
      <button type="button" (click)="removeHobby(i)">Remove</button>
    </div>
  </div>
  <button type="button" (click)="addHobby()">Add Hobby</button>
  <button type="submit">Submit</button>
</form>
```
