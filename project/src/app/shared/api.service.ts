import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from '../component/product-view/productmodal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  url:string="http://dummyjson.com/products";
  getProducts():Observable<product[]>{
    return this.http.get<product[]>(this.url);
  }
  getProductByid(id:string){
    return this.http.get("http://dummyjson.com/products/"+id);

  }

}
