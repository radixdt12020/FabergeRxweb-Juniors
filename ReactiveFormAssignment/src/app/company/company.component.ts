import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RxwebValidators, date, maxNumber } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companyFormGroup : FormGroup;
  todayDate = this.formatDate();
  
  constructor(private formBuilder : FormBuilder) {
    this.companyFormGroup = this.formBuilder.group({
      customerId : ['', RxwebValidators.compose({validators:[RxwebValidators.startsWith({value:"C_"}), RxwebValidators.required()]})], 
      customerName :['', RxwebValidators.compose({validators:[RxwebValidators.required(), RxwebValidators.alpha(), RxwebValidators.minLength({value:16})]})],
      countryName :['', RxwebValidators.required()],
      customerEmail:['', RxwebValidators.compose({validators:[RxwebValidators.required(), RxwebValidators.lowerCase(), RxwebValidators.email()]})],
      customerCurrentBalance:['', RxwebValidators.required()],
      customerMinBalance:['', RxwebValidators.required()],
      customerPincode:['', RxwebValidators.compose({validators:[RxwebValidators.required(), RxwebValidators.maxLength({value:6}), RxwebValidators.minLength({value:6, message:"Pincode atleast contains 6 character"})]})],
      companyWebsiteURL:['', RxwebValidators.compose({validators:[RxwebValidators.required(), RxwebValidators.url()]})],
      customerMobileNumber:['', RxwebValidators.required()],
      DateOfBirth:['', RxwebValidators.compose(
        {
          validators:[
            RxwebValidators.required(),
            RxwebValidators.date({allowISODate:true}),
            RxwebValidators.date({conditionalExpression :(x:any,y:any) => x.DateOfBirth == this.todayDate, message:"Please enter past date."})
          ]
        }
      )]
    });
  }

  ngOnInit(){
    console.log(this.todayDate)
  }

  saveData() {
    console.log(this.companyFormGroup.value)
  }

  formatDate(){
    var today = new Date()
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    return yyyy + '-' + mm + '-' + dd;
  }

}
