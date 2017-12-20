import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserComponent } from './users/user-list/user/user.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { UserService } from './users/user.service';
import { HomeComponent } from './home/home.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { UserStorageService } from './shared/user-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    UserListComponent,
    UserComponent,
    DropdownDirective,
    HomeComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService,UserStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
