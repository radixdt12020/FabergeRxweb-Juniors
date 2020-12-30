import { Component, OnInit } from '@angular/core';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit() {
    ReactiveFormConfig.set({"validationMessage":{"date":"Please enter a valid date!!",
                                                  "maxDate":"Input date exceed the maximum date!!",
                                                  "required":"This field is required!!",
                                                  "startsWith":"Please enter a valid input!!",
                                                  "email":" Email format is invalid!!",
                                                  "lowerCase":"Input must be in lower case!!",
                                                  "maxLength":"Input exceeds the maximum length!!",
                                                  "alpha":"Only alphabets are allowed!!",
                                                  "minLength":"Input is less than the minimum length!!",
                                                  "url":"Input must be an valid url!!"},
                                                  "internationalization":{"dateFormat":"dmy","seperator":"/"}});  }
}
