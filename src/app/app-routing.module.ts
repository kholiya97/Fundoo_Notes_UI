import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './Pages/forgotpassword/forgotpassword.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
{path: 'login',component:LoginComponent},
{ path: "register", component: RegisterComponent },
{path:"forgotpassword",component:ForgotpasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
