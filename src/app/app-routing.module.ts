import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { LoanstructureComponent } from './loans/loanstructure/loanstructure.component';
import { AddloanComponent } from './loans/loanstructure/addloan/addloan.component';
import { DeleteloanComponent } from './loans/loanstructure/deleteloan/deleteloan.component';
import { EditloanComponent } from './loans/loanstructure/editloan/editloan.component';
import { ViewloanComponent } from './loans/loanstructure/viewloan/viewloan.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { adminGuard } from './admin.guard';
import { childGuard } from './child.guard';
import { loadGuard } from './load.guard';
import { ConfirmGuard } from './confirm.guard';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { AddFormComponent } from './reactiveform/add-form/add-form.component';

const routes: Routes = [
  {
    path:'Home',
    component:HomeComponent,
    canActivate:[adminGuard] //load HomeComponent based on the condition specified in adminGuard
  },
  {
    path:'listusers',
    component:ListUsersComponent
  },
  {
    path:'Gallery',
    component:GalleryComponent
  },
  {
    path:'photos',
    redirectTo:'Gallery'
  },
  {
    path:'videos',
    redirectTo:'Gallery'
  },
  {
    path:'Contact',
    component:ContactComponent
  },
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'search',
    component:SearchComponent,
    canDeactivate:[ConfirmGuard]
  },
  { //parameterised routes
    path:'product/:pid/:pname', //travels through routes/links
    component:ProductComponent
  },
  {
    path:'loanstruct',
    canActivate:[adminGuard], //load LoanStructureComponent based on the condition specified in adminGuard
    children:[
      {
        path:'', //localhost:4200/loanstruct
        component:LoanstructureComponent  
      },
     { //links on loanstructure.component.html file
      path:'', //loaclhost:4200/loanstruct/addloan
      canActivateChild:[childGuard], //load AddLoanComponent based on the condition specified in childGuard
      children:[
        {path:'addloan',
        component:AddloanComponent
        }
      ]
     },
    {
      path:'delloan',
      component:DeleteloanComponent
    },
    {
      path:'editloan',
      component:EditloanComponent
    },
    {
      path:'viewloan',
      component:ViewloanComponent
    },
    ],
  },
  {
    path:'add-customer',
    component:AddCustomerComponent
  },
  { 
    path: 'payment', canLoad:[loadGuard], loadChildren: () => import('./pay/pay.module').then(m => m.PayModule) 
  },
  {
    path:'reactiveform',
    component:AddFormComponent
  },
  { //wild card route when unknown path is detected
    path:'**', 
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
