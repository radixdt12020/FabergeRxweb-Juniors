import { Component, OnInit, Optional } from '@angular/core';
import { Paper} from '../models/paper';
import { Option} from '../models/option';
import { FormBuilder, FormArray, Form, AbstractFormGroupDirective} from '@angular/forms';
import { IFormBuilder,IFormGroup, IFormArray} from "@rxweb/types";
import { List } from '@rxweb/generics';


@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css']
})
export class PaperComponent implements OnInit {

  paperList : List<Paper> = new List<Paper>([{questionId: '',paperName:'', question: '', answer: '',options:[{nameOfOption: '1'}, {nameOfOption: '2'}]}])
  results : any  = this.paperList;
  formGroup: IFormGroup<Paper>;
  formBuilder: IFormBuilder;
  uniqueQuestion: any;
  isEdit = false;
  isSubmit = true;
  isDisable = true;
  isAnswerChange = false;
  indexNumber:number = 0;

  paperNames = [
    {
      id : 1,
      name : "javascript"
    },
    {
      id : 2,
      name : "python"
    },
    {
      id : 3,
      name : "c"
    }
  ];

  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
    this.formGroup = this.formBuilder.group<Paper>({
      questionId : [''],
      paperName : [''],
      question: [''],
      answer: [''],
      options: this.formBuilder.array<Option>([
        this.formBuilder.group({
          nameOfOption:['']
        })
      ])
    })

  }

  ngOnInit(): void {
  }

  addOption() {
    const control =  this.formGroup.controls.options as FormArray;
    control.push(this.formBuilder.group({
      nameOfOption:['']
    }))
    console.log(control)
  }

  submit(){
    const optionData:any = [];
    this.formGroup.value?.options.forEach(element => {
      optionData.push(element)
    })

    //console.log(this.formGroup)

    this.paperList.add({
      questionId: String(this.formGroup.value?.questionId),
      paperName:String(this.formGroup.value?.paperName),
      question: String(this.formGroup.value?.question),
      answer: String(this.formGroup.value?.answer),
      options : optionData
    })
    this.results = this.paperList;
    this.formGroup.reset();
  }

  editData(questionId:any, id:number) {
    this.isDisable = false;
    this.isSubmit = false;
    this.isEdit = true;
    this.uniqueQuestion = this.paperList.firstOrDefault(x => x?.questionId == questionId)
    this.formGroup.setValue({
      questionId: this.uniqueQuestion.questionId,
      paperName: this.uniqueQuestion.paperName,
      question: this.uniqueQuestion.question,
      answer: this.uniqueQuestion.answer,
      options:this.uniqueQuestion.options
    })
    
    this.indexNumber = id;
  }

  editSaveData(){
    const optionData:any = []
    this.formGroup.value?.options.forEach(element => {
      optionData.push(element)
    })
    this.paperList.removeAt(this.indexNumber);
    this.isSubmit = true;
    this.isEdit = false;
    this.paperList.add({
      questionId: String(this.formGroup.value?.questionId),
      paperName:String(this.formGroup.value?.paperName),
      question: String(this.formGroup.value?.question),
      answer: String(this.formGroup.value?.answer),
      options:optionData
    })
    this.results = this.paperList;

    this.formGroup.reset();
  }

  deleteData(Id:number){
    this.paperList.removeAt(Id);
  } 

  get getOption() {
      return this.formGroup.controls.options as FormArray;
  }
    

}
