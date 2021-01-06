import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidatorsComponent } from './Components/validators/validators.component';
import { DynamicFormsComponent } from './Components/dynamic-forms/dynamic-forms.component';
import { StronglyTypesComponent } from './Components/strongly-types/strongly-types.component';
import { RxGridComponent } from './Components/rx-grid/rx-grid.component';

const routes: Routes = [
  {
    path:'validators', 
    component:ValidatorsComponent
  },
  {
    path:'dynamic-form',
    component:DynamicFormsComponent
  },
  {
    path:'strongly-type',
    component:StronglyTypesComponent
  },
  {
    path:'rx-grid',
    component:RxGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
