import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AppService} from "./app.service";  //$$$

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currency = '$'

  form = this.fb.group({
    order: ["", Validators.required],
    name: ["", Validators.required],
    phone: ["", Validators.required],
  });

  productsData: any;  //$$$ удалены данные по бургерам

  constructor(private fb: FormBuilder, private appService: AppService) { //$$$
    this.appService.getData().subscribe(data => this.productsData = data); //$$$
  }

scrollTo(target: HTMLElement, burger?: any) {
  target.scrollIntoView({behavior: "smooth"});
  if (burger) {
    this.form.patchValue({order: burger.title + ' (' + burger.price + ' ' + this.currency + ')'});
  }
}

confirmOrder() {
  if (this.form.valid) {
    this.appService.sendOrder(this.form.value)    //$$$ начало
    .subscribe(
      {
        next: (response: any) => {
          alert(response.message);
          this.form.reset();
        },
        error: (response) => {
          alert(response.error.message);
        },                                        //$$$ конец
      }
    );
  }
}

changeCurrency() {
  let newCurrency = "$";
  let coefficient = 1;

  if (this.currency === "$") {
      newCurrency = "₽";
      coefficient = 77.36;
  } else if (this.currency === "₽") {
      newCurrency = "BYN";
      coefficient = 2.53;
  } else if (this.currency === "BYN") {
      newCurrency = "€";
      coefficient = 0.91;
  } else if (this.currency === "€") {
      newCurrency = "¥";
      coefficient = 6.96;
  } else if (this.currency === "¥") {
      newCurrency = "₽☭ CCCP";
      coefficient = 0.56; //  по данным википедии https://ru.wikipedia.org/wiki/%D0%A0%D1%83%D0%B1%D0%BB%D1%8C_%D0%A1%D0%A1%D0%A1%D0%A0
  }
  
  this.currency = newCurrency;

  this.productsData.forEach((item: any) => {
    item.price = + (item.basePrice * coefficient).toFixed(1);
  })

}

}
