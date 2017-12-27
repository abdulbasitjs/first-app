import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../user.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
        .subscribe(
          (params: Params) => {
            const index = +params['id'];
            // get data from cache.
            this.user = this.userService.getUserFromCache(index);
            // get data from server if it is not in the cache.
            if (!this.user) {
              this.userService.getUserById(index).subscribe(
                user => {
                  this.user = user;
                }
              );
            }
          }
        );
  }

  onBack() {
    this.router.navigate(['/users']);
  }

}
