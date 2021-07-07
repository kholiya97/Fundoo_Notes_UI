import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './Pages/forgotpassword/forgotpassword.component';
import { LoginComponent } from './Pages/login/login.component';
import { ResetpasswordComponent } from './Pages/resetpassword/resetpassword.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  {path: '',component:LoginComponent},
{path: 'login',component:LoginComponent},
{ path: "register", component: RegisterComponent },
{path:"forgotpassword",component:ForgotpasswordComponent},
{path:"resetpassword",component:ResetpasswordComponent},
{path:"dashboard",component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
