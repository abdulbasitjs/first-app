import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  id: number;
  userId:number
  editMode: boolean = false;
  @ViewChild('f') userForm: NgForm;
  genders;
  countries;
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let data = this.userService.getData();
    this.userId= this.userService.getUsers().length+1;
    this.countries = data.countries;
    this.genders = data.genders;
    this.route.params
      .subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.editMode = this.id != null;
        if(this.editMode){
          this.populateForm();
        }
      }
    )
  }

  onCancel() {
    this.goToUsersPage();
  }

  private goToUsersPage(){
    this.router.navigate(["/users"]);
  }

  private populateForm(){
    let user = this.userService.getUserById(this.id);
    this.userForm.form.patchValue({
      firstname:user.firstname,
      lastname:user.lastname,
      email:user.email,
      gender:user.gender,
      country:user.country
    });
  }

  onSubmit() {
    let {firstname,lastname,email,gender,country} = this.userForm.value;
    if(!this.editMode){
      this.userService.addUser(new User(this.userId,firstname,lastname,email,gender,country));
    } else {
      this.userService.editUser(this.id,firstname,lastname,email,gender,country);
    }
    this.userForm.reset();
    this.goToUsersPage();
  }

}