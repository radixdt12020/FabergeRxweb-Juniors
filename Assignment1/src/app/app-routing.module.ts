import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidatorsComponent } from './Components/validators/validators.component';
import { DynamicFormsComponent } from './Components/dynamic-forms/dynamic-forms.component';

const routes: Routes = [
  {
    path:'validators', 
    component:ValidatorsComponent
  },
  {
    path:'dynamic-form',
    component:DynamicFormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
