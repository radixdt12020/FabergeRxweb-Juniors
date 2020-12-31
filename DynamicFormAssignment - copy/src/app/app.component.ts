import { Component, OnInit } from '@angular/core';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(){
    //if you want to apply global configuration then use below code. 
    ReactiveFormConfig.set(
      {
        "validationMessage":{
          "email":"Invalid email format",
          "lowerCase":"Input must be in lower case",
          "minNumber":"Minimum number is not matched.",
          "maxNumber":"Maximum number only six",
          "range":"Input exceeds the range",
          "date":"Please enter a valid date.",
          "required":"This field is required",
          "url":"Input must be an url",
          "alpha":"Only alphabets are allowed.",
          "digit":"Only digits are allowed",
          "password":"Input does not match the password requirements",
          "composeMessageKey":"Input is invalid",
          "compose":"Please enter valid value",
          "startsWith":"Please enter a valid input start with C_",
          "minLength":"Username must be 16 character long",
          "maxLength":"Pincode contains maximum 6 character",
        }
     }
    );
  }
}
