import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ViewQueueComponent } from './user/view-queue/view-queue.component';
import { HomeComponent } from './user/home/home.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [ {path: '', redirectTo: '/auth/login', pathMatch: 'full'},
{path: 'auth', component: AuthComponent,
children: [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'login',
    component: LoginComponent
  },
  {
   path: 'register',
   component: RegisterComponent
  },
]
},

{path: 'user', component: UserComponent, canActivate: [AuthGuard],
children: [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'queue/:id', component: ViewQueueComponent },
  {path: 'home', component: HomeComponent }
]
},
{ path: '**', redirectTo: '/auth/login' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
