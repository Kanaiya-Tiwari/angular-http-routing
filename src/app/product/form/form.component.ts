import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Params} from '@angular/router';
import { PlatformLocation } from '@angular/common' 
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  implements OnInit{
  @ViewChild('myDOMElement', { static: true })
  MyDOMElement!: ElementRef;
  public editrecord!:any;
 
  public fvalue!:any;
  public user!: any;
  public dataValue!: any;
  public editdata!:any;
  public disabledFlag1:boolean=false;
  public editid!:any;
  public fname!:any;
  public lname!:any;
  public emailvalue!:any;
  public techvalue!:any;
  constructor(
    private formBuilder: FormBuilder,  private Service:ServiceService,private route:Router, private routerid:ActivatedRoute, private back:PlatformLocation ) 
    {
      
    this.editid=this.routerid.snapshot.paramMap.get('id');
    
    this.user = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      Descrption: ['', [Validators.required]],
      Quantity: ['', [Validators.required]],
      Price: ['', [Validators.required,Number]],
      
    },{ updateOn: "blur" });
    
   
  }
 ngOnInit(): void {
  if(this.editid)
  {
    this.MyDOMElement.nativeElement.innerText="Update";
    this.getPostByID();
    
  }

  
 }
 getPostByID(){
  this.Service.getPostByID(this.editid).subscribe(response=>{
    this.editrecord=response;
    this.user.get('firstName').setValue(this.editrecord.firstName);
    this.user.get('Descrption').setValue(this.editrecord.Descrption);
    this.user.get('Quantity').setValue(this.editrecord.Quantity);
    this.user.get('Price').setValue(this.editrecord.Price);
 
  console.log();

  })
  }

  get firstName() {
    return this.user.get('firstName');
  }
  get Descrption() {
    return this.user.get('Descrption');
  }
  get Quantity() {
    return this.user.get('Quantity');
  }

  get Price() {
    return this.user.get('Price');
  }
  loginUser() {
 
    if(this.editid)
    { console.log(this.editid);
      // console.log("updated");

      this.editdata= {"firstName": this.user.value.firstName,"Descrption":this.user.value.Descrption,"Quantity":this.user.value.Quantity, "Price":this.user.value.Price};

       this.Service.updatePost(this.editdata,this.editid).subscribe(response=>{
      this.user.get('firstName').setValue('');
         this.user.get('Descrption').setValue('');
         this.user.get('Quantity').setValue('');
         this.user.get('Price').setValue('');
       
         this.route.navigate(['/product/list']);
        alert("data updated");
  })
    }
    else{
      console.log("inserted");
      this.Service.setPost(this.user.value).subscribe(response=>{
        
       
       console.log(response);
        alert(" data enter");
        this.user.get('firstName').setValue('');
        this.user.get('Descrption').setValue('');
        this.user.get('Quantity').setValue('');
        this.user.get('Price').setValue('');
        this.route.navigate(['/product/list']);
     });
    }
  
  }
  
    
}
