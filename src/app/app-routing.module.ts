import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user-list/user/user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'users',
        component: UsersComponent,
        children: [{
            path: 'new',
            component: EditUserComponent
        }, {
            path: ':id',
            component: UserComponent
        }, {
            path: ':id/edit',
            component: EditUserComponent
        }]
    },
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
