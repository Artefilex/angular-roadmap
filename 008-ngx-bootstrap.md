# 3rd party bir uygulamayı entegre etmek

3rd parti bir uygulamayı projeye dahil etmek için öncelikle bir proje ortamı oluşturmamız gerekir. Adım adım kuralım

1. Proje ortamını hazırlamak

`ng new project-name`

2. Proje Ana dizinine girmek

`cd project name`

3. 3rd parti paketi kurmak

`npm install ngx-bootstrap --save`

4. `angular.json` dosyanızı açın ve styles dizisine bootstrap'ın CSS dosyasını ekleyin.

`node_modules/bootstrap/dist/css/bootstrap.min.css`

5. Modulü kullanmaya başlayın`

`<button type="button" class="btn btn-primary" (click)="openModal()">Modal Aç</button>`
