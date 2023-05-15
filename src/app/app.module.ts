import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http"; //$$$

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule //$$$
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*//$$$
скопировать импорт import {HttpClient} from "@angular/common/http";

в app.service.ts пишем
constructor(private http: HttpClient) { }

sendOrder() {
  return this.http.get('https://testologia.site/burgers-data');
}
getData(data: any) {
  return this.http.post('https://testologia.site/burgers-order', data);
}
конец строки в app.service.ts 

домашка заменить 31 строку на 
  return this.http.post('https://testologia.site/burgers-order?extra=black', data);



*/