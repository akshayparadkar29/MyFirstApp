import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { ProfileModule } from './profile/profile.module';
import { CitycodePipe } from './citycode.pipe';
import { InitialPipe } from './initial.pipe';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NavComponent } from './nav/nav.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { LoanstructureComponent } from './loans/loanstructure/loanstructure.component';
import { AddloanComponent } from './loans/loanstructure/addloan/addloan.component';
import { EditloanComponent } from './loans/loanstructure/editloan/editloan.component';
import { DeleteloanComponent } from './loans/loanstructure/deleteloan/deleteloan.component';
import { ViewloanComponent } from './loans/loanstructure/viewloan/viewloan.component';
import { UsersComponent } from './users/users.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { FilterUsersComponent } from './users/filter-users/filter-users.component';
import { CustomerModule } from './customer/customer.module';
import { ReactiveformModule } from './reactiveform/reactiveform.module';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    CitycodePipe,
    InitialPipe,
    HomeComponent,
    GalleryComponent,
    NavComponent,
    PagenotfoundComponent,
    ProductComponent,
    SearchComponent,
    UsersComponent,
    ListUsersComponent,
    FilterUsersComponent,
  ],
  //import all modules here
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    ProfileModule,
    CustomerModule,
    ReactiveformModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
