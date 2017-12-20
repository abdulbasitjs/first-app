import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../user.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: '[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user:User;
  constructor(private userService:UserService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params
        .subscribe(
          (params:Params) => {
            let index = params['id'];
            this.user = this.userService.getUserById(index);
          }
        ) 
  }

  onBack(){
    this.router.navigate(["/users"]);
  }

}
