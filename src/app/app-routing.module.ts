import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { UserCrudComponent } from './views/user-crud/user-crud.component';
import { UserCreateComponent } from './components/users/user-create/user-create.component';
import { UserUpdateComponent } from './components/users/user-update/user-update.component';
import { UserDeleteComponent } from './components/users/user-delete/user-delete.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "users",
    component: UserCrudComponent
  },
  {
    path: "users/create",
    component: UserCreateComponent
  },
  {
    path: "users/update/:id",
    component: UserUpdateComponent
  },
  {
    path: "users/delete/:id",
    component: UserDeleteComponent
  },

  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
