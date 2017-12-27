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
  editMode = false;
  user: User;
  @ViewChild('f') userForm: NgForm;
  genders;
  countries;
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const data = this.userService.getData();
    this.countries = data.countries;
    this.genders = data.genders;
    this.route.params
      .subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.editMode = this.id != null;
        if (this.editMode) {
          this.populateForm();
        }
      }
      );
  }

  onCancel() {
    this.goToUsersPage();
  }

  private goToUsersPage() {
    this.router.navigate(['/users']);
  }

  private populateForm() {
    this.user = this.userService.getUserFromCache(this.id);
    if (!this.user) {
      this.userService.getUserById(this.id).subscribe(
        user => {
          this.user = user;
          this.fillForm();
        }
      );
    } else {
      this.fillForm();
    }

  }

  private fillForm() {
    setTimeout(
      () => {
        this.userForm.setValue({
          firstname: this.user.firstname,
          lastname: this.user.lastname,
          email: this.user.email,
          gender: this.user.gender,
          country: this.user.country
        });
      }, 0);
  }

  onSubmit() {
    if (!this.editMode) {
      this.userService.addUser(this.userForm.value);
    } else {
      this.userForm.value.id = this.id;
      this.userService.editUser(this.userForm.value);
    }
    this.userForm.reset();
    this.goToUsersPage();
  }

}
