import { Component, OnInit,Input,EventEmitter,Output} from '@angular/core';
import { Product } from '../Product/product';
@Component({
  selector: 'app-product-item' ,
  templateUrl: './product-item.component.html' ,
  styleUrls: ['./product-item.component.css' ]
  })
  export class ProductItem implements OnInit {
  @Input()
  product!: Product;
  @Output()
   OnSelected: EventEmitter<ProductItem> = new EventEmitter();
   isSelected!: boolean;
  constructor() {}
  ngOnInit() {}
  select() {
    this.OnSelected.emit(this);
    }
  }