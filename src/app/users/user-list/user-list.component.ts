import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  users: User[];
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    const users = this.userService.getUsers();
    users.snapshotChanges().subscribe(
      item => {
        this.users = [];
        item.forEach(element => {
          const user = element.payload.toJSON();
          user['$key'] = element.key;
          this.users.push(user as User);
          console.log(this.users);
        });
        this.userService.setUsers(this.users);
      }
    );
  }

  onDelete(id: string) {
    const del = confirm('Are you sure, you want to delete this item?');
    if (del) {
      this.userService.deleteUser(id);
      this.router.navigate(['/users']);
    }
  }

  ngOnDestroy(): void {
  }
}
