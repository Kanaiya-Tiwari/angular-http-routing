import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import {  HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from './service.service';


@NgModule({
  declarations: [
    FormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,FormsModule,ReactiveFormsModule ,NgxPaginationModule,HttpClientModule
  ],
  providers:[ServiceService]
})
export class ProductModule { }
