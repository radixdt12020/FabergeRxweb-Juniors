import { Component, OnInit } from '@angular/core';
import { RxDynamicFormBuilder, DynamicFormBuildConfig } from '@rxweb/reactive-dynamic-forms'
import { formatDate, getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.css']
})
export class DynamicFormsComponent implements OnInit {

  serverData=[{
    name:"CustomerID",
    type:"text",
    ui:{
      label:"Customer ID"
    },
    "validators":{"required":true,"startsWith":{"value":"C_"}}
  },
  {
    name:"CustomerName",
    type:"text",
    ui:{
      label:"Customer Name"
    },
    "validators":{"required":true,"alpha":true,"maxLength":{"value":15}}

  },
  {
    name:"CountryName",
    type:"text",
    ui:{
      label:"Country Name"
    },
    "validators":{"required":true}

  },
  {
    name:"DOB",
    type:"text",
    ui:{
      label:"Date of Birth"
    },
    "validators":{"required":true,"date":{allowISODate:true},"maxDate":{value:this.getDate(new Date()),operator:'<'}}

  },
  {
    name:"CurBalance",
    type:"text",
    ui:{
      label:"Current Balance"
    },
    "validators":{"required":true}

  },
  {
    name:"EmailId",
    type:"text",
    ui:{
      label:"Email-ID"
    },
    "validators":{"required":true,"email":true,"lowerCase":true}

  },
  {
    name:"MinBalance",
    type:"text",
    ui:{
      label:"Minimum Balance"
    },
    "validators":{"required":true}
  },
  {
    name:"PinCode",
    type:"text",
    ui:{
      label:"PinCode"
    },
    "validators":{"required":true,"minLength":{"value":6},"maxLength":{"value":6}}

  },
  {
    name:"CompanyWebSite",
    type:"text",
    ui:{
      label:"Company WebSite"
    },
    "validators":{"url":true}

  }
]

  uiBindings:string[]= ["CustomerID","CustomerName","CountryName","DOB","CurBalance","EmailId","MinBalance","PinCode","CompanyWebSite"];
  dynamicFormBuildConfig:DynamicFormBuildConfig;


  getDate(date:any){
      return formatDate(date,'MM/dd/yyyy','en')
  }

  constructor(private formBuilder:RxDynamicFormBuilder) { }

  ngOnInit(): void {

    this.dynamicFormBuildConfig= this.formBuilder.formGroup(this.serverData,{});

  }

}
