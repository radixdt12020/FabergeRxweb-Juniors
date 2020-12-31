import { Component, OnInit } from '@angular/core';
import { SERVER_JSON } from './server-json';
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from "@rxweb/reactive-dynamic-forms";

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.css']
})
export class DynamicComponentComponent implements OnInit {

  customerData : any[] = SERVER_JSON;

  uiBindings:string[] = ["customerId", "customerName", "countryName", "customerEmail", "customerCurrentBalance", "customerMinBalance", "customerPincode", "companyWebsiteURL", "dateOfBirth"];

  dynamicFormBuildConfig: DynamicFormBuildConfig;

  constructor(private formBuilder: RxDynamicFormBuilder) {
    this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.customerData,{});
  }

  ngOnInit(): void {
    //this.dynamicFormBuildConfig = this.formBuilder.formGroup(this.customerData,{});
  }

}
