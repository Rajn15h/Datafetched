import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { product } from './productmodal';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit{
  data:any|product[] ;
constructor(private api:ApiService){}
  ngOnInit(): void {
    this.displayProduct();
  }
  displayProduct(){
    return this.api.getProducts().subscribe(res=>{
      this.data=res;
      console.log(this.data);
      
    })
  }


}
