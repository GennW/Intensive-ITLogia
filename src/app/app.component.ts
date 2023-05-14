import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

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

  productsData = [
    {
      image: "Burger1.png",
      title: "Бургер чеддер & бекон",
      text: "Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соуc",
      price: 8,
      basePrice: 8,
      gramms: 360,
    },
    {
      image: "Burger2.png",
      title: "BBQ c беконом и курицей",
      text: "Булочка бриошь c кунжутом, куриная котлета, сыр чеддер, томат, огурец маринованный, лук маринованный, салат Ромен, бекон, соус BBQ",
      price: 7,
      basePrice: 7,
      gramms: 390,
    },
    {
      image: "Burger3.png",
      title: "Дабл биф бургер",
      text: "Две говяжьи котлеты, сыр чеддер, салат романо, маринованные огурцы, свежий томат, бекон, красный лук, соус бургер, горчица",
      price: 10,
      basePrice: 10,
      gramms: 420,
    },
    {
      image: "Burger4.png",
      title: "Баварский бургер",
      text: "Булочка для бургера, говяжья котлета, красный лук, сыр, охотничья колбаска, соус барбекю, соус сырный, салат айсберг",
      price: 7,
      basePrice: 7,
      gramms: 220,
    },
    {
      image: "Burger5.png",
      title: "Бекон чизбургер",
      text: "Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, сыр, сырный соус, кетчуп, зелень",
      price: 8,
      basePrice: 8,
      gramms: 220,
    },
    {
      image: "Burger6.png",
      title: "Индиана бургер",
      text: "Булочка для бургера, котлета куриная, грудинка, яйцо, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень",
      price: 9,
      basePrice: 9,
      gramms: 320,
    },
    {
      image: "Burger7.png",
      title: "Вегги бургер",
      text: "Булочка для бургера, вегетарианская котлета, красный лук, сыр, свежий томат, соус барбекю, соус сырный, салат айсберг",
      price: 8,
      basePrice: "8",
      gramms: 360,
    },
    {
      image: "Burger8.png",
      title: "Плаксивый Джо",
      text: "Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, красный лук, сыр, перец халапеньо, кетчуп, зелень",
      price: 7,
      basePrice: 7,
      gramms: 380,
    },
    {
      image: "Burger9.png",
      title: "Двойной чиз бургер",
      text: "Булочка для бургера, две говяжьи котлеты, двойной сыр чеддар, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень",
      price: 11,
      basePrice: 11,
      gramms: 400,
    },
    {
      image: "Burger10.png",
      title: "Фрешбургер",
      text: "Булочка для бургера, говяжья котлета, бекон, сыр чеддар, яйцо, салями, соус барбекю, соус сырный, салат айсберг, свежий томат",
      price: 9,
      basePrice: 9,
      gramms: 300,
    },
    {
      image: "Burger11.png",
      title: "Цуккини бургер",
      text: "Булочка для бургера, вегетарианская котлета из нута, цуккини на гриле, помидор, огурец маринованный, сыр, горчичный соус, кетчуп, зелень",
      price: 8,
      basePrice: 8,
      gramms: 320,
    },
    {
      image: "Burger12.png",
      title: "Двойной бургер чеддар",
      text: "Булочка для бургера, котлета говяжья, грудинка, красный лук, огурец маринованный, томат, кетчуп, двойной сыр чеддар, горчица, зелень",
      price: 9,
      basePrice: 9,
      gramms: 360,
    },
  ];

  constructor(private fb: FormBuilder) {

  }

scrollTo(target: HTMLElement, burger?: any) {
  target.scrollIntoView({behavior: "smooth"});
  if (burger) {
    this.form.patchValue({order: burger.title + ' (' + burger.price + ' ' + this.currency + ')'});
  }
}

confirmOrder() {
  if (this.form.valid) {
    alert("Спасибо за заказ. Мы скоро свяжемся с вами!");
    this.form.reset();
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
