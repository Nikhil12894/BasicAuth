import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserSettingComponent } from './user-setting/user-setting.component';
import { ConfigureComponent } from './configure/configure.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch: 'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'setting',
    component:SettingComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'configure',
    component:ConfigureComponent
  },
  {
    path:'userSetting',
    component:UserSettingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routComponent=[HomeComponent,SettingComponent,LoginComponent,RegisterComponent,ConfigureComponent,UserSettingComponent]
