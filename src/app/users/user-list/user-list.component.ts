import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import "rxjs/Rx";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  onDelete(id: number) {
    let del = confirm("Are you sure, you want to delete this item?");
    if (del) {
      this.userService.deleteUser(id);
      this.router.navigate(["/users"]);
    }
  }

}
