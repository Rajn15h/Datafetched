import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { product } from '../product-view/productmodal';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  
constructor(private api:ApiService,private activateroute:ActivatedRoute){}
productdata:any|product;
  ngOnInit(): void {
   let id =this.activateroute.snapshot.paramMap.get('id');
  //  console.log("productid is" ,id);
  id&&this.api.getProductByid(id).subscribe((res)=>{
    this.productdata=res;
    console.log(res);

  })
  }
}
