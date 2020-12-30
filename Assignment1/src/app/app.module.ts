import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidatorsComponent } from './Components/validators/validators.component';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators'
import { RxReactiveDynamicFormsModule } from '@rxweb/reactive-dynamic-forms';
import { DynamicFormsComponent } from './Components/dynamic-forms/dynamic-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidatorsComponent,
    DynamicFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    RxReactiveDynamicFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
