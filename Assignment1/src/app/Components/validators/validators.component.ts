import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {RxwebValidators} from '@rxweb/reactive-form-validators';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-validators',
  templateUrl: './validators.component.html',
  styleUrls: ['./validators.component.css']
})
export class ValidatorsComponent implements OnInit {

  cusFormGroup:FormGroup;
  public currentDate;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.currentDate=formatDate(new Date(), 'MM/dd/yyyy','en')
    
    this.cusFormGroup=this.formBuilder.group({
      CustomerID: ['', RxwebValidators.compose({validators:[ RxwebValidators.required(), RxwebValidators.startsWith({value:'C_'}) ]} )],
      CustomerName: ['', RxwebValidators.compose({validators:[RxwebValidators.required(),RxwebValidators.alpha(), RxwebValidators.maxLength({value:15})]})],
      CountryName: ['',RxwebValidators.required()],
      DOB: ['',RxwebValidators.compose({validators:[RxwebValidators.required(),RxwebValidators.date({allowISODate:true}),RxwebValidators.maxDate({value:this.currentDate, operator:'<'}) ]})],
      CurBalance: ['',RxwebValidators.required()],
      EmailId: ['', RxwebValidators.compose({validators:[RxwebValidators.required(), RxwebValidators.email(), RxwebValidators.lowerCase()]})],
      MinBalance: ['',RxwebValidators.required()],
      PinCode: ['',RxwebValidators.compose({validators:[RxwebValidators.required(),RxwebValidators.minLength({value:6}), RxwebValidators.maxLength({value:6})]})   ],
      CompanyWebSite: ['',RxwebValidators.url()] 
    })

  }

}
