import { Component ,OnInit, ViewChild} from '@angular/core';
import { ProductList } from './product-list.component/product-list.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  @ViewChild('productList')
 productList!: ProductList;
 ngOnInit(): void {
  this.productList.products = [
  {
  name: 'ส้มโอ',
  price: 111
  },
  {
  name: 'แตงโม',
  price: 222
  },
  {
  name: 'มะพร้าวนํ้าหอม',
  price: 333
  }
  ];
  }
 constructor() {}
 }