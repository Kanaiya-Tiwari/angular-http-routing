import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { LocationStrategy } from '@angular/common';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public page:number=1;
  public dataValueOfApi!:any;
  public totalRecord!:any;

  constructor(
    private Service:ServiceService,public location:LocationStrategy ) {
      history.pushState(null, window.location.href);
      this.location.onPopState(() => {  
      history.pushState(null, window.location.href);
      });
  }
  ngOnInit(): void {
    this.getPost();
    
  }


  getPost(){
    this.Service.getPost().subscribe(response=>{
     this.dataValueOfApi=response;
     this.totalRecord=this.dataValueOfApi.length;
 
    })
    }
    delete(id:any,event:Event)
  {
    event.preventDefault();
    this.Service.deeletePost(id).subscribe(response=>{
      this.getPost();
      alert("data deleted");
   });
    
  }
}
