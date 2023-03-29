import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private HttpCLinet:HttpClient ) { }
  getPostByID(id:any)
  {
    return  this.HttpCLinet.get(`http://localhost:3000/product/${id}`);
  }
  getPost(){
    return   this.HttpCLinet.get('http://localhost:3000/product')
  }

  setPost(data:any){
  console.log(data);
    return this.HttpCLinet.post('http://localhost:3000/product',data);
  }
  deeletePost(id:any)
  {
    return this.HttpCLinet.delete(`http://localhost:3000/product/${id}`);
  }
  updatePost(data:any,id:any)
  {
    
    return this.HttpCLinet.put(`http://localhost:3000/product/${id}`,
    data
    );
  }
  
}
