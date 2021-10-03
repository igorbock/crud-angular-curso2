import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from "@angular/common/http";
import { CreateUserComponent } from './users/create-user/create-user.component'
import { FormsModule } from "@angular/forms";
import { UpdateUserComponent } from './users/update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CreateUserComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
