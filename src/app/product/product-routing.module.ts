import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [{path:"",redirectTo:'list',pathMatch:'full'},
{path:'list',component:ListComponent},
{path:'add',component:FormComponent},
{path:'edit/:id',component:FormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
// window.history.back()
// window.history.forward()