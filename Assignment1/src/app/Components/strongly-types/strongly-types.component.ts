import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormArray, FormGroup } from '@angular/forms';
import { IFormBuilder, IFormGroup } from '@rxweb/types';
import { List }  from '@rxweb/generics';
import { QPaper } from 'src/app/Models/examPaper';
import { Paper } from 'src/app/Models/paper';
import { Option } from 'src/app/Models/option';


@Component({
  selector: 'app-strongly-types',
  templateUrl: './strongly-types.component.html',
  styleUrls: ['./strongly-types.component.css']
})
export class StronglyTypesComponent implements OnInit {

  qpaper:QPaper;
  formGroup:IFormGroup<QPaper>
  formBuilder: IFormBuilder
  savedOptions=[]
  questionPaperList:List<QPaper> = new List<QPaper>();
  qId
  //isEnabled:boolean=true

  paperList= [
    {
      pName:'Machine Learning'
    },
    {
      pName:'AI'
    },
    {
      pName:'Microprocessor'
    },
    {
      pName:'Computer Networks'
    },
    {
      pName:'Information Security'
    }
]

  constructor(formBuilder:FormBuilder) { 
    this.formBuilder=formBuilder
  }

  ngOnInit(): void {
    this.formGroup=this.formBuilder.group<QPaper>({
        paper:[''],
        questionId:[''],
        question:[''],
        answer:[''],
        options:this.formBuilder.array<Option>([
          this.formBuilder.group({
            oName:['']
          })
          /*new FormControl({
            oName:['']
          })*/ // -- ask?
          /*this.formBuilder.control({
            oName:['']
          })*/ // --- error ask why?
          ])    
           
    })
  }

  addOption(){     
    /*this.getOptions().push(new FormControl({
      oName:['']
    }))*/ // --ask?
    this.getOptions().push(this.formBuilder.group({
      oName:['']
    }))
  }

  getOptions(){
     //return this.formGroup.get('options') as FormArray //-- error ask why?
      return this.formGroup.controls.options as FormArray;
  }

  onSubmit(){
    //this.isEnabled=true
    this.formGroup.value.options.forEach(val=>{
        this.savedOptions.push(val)
    })
    console.log(this.savedOptions)


    //this.paperList.find(x=>x.id)
    this.questionPaperList.add({
      questionId:this.formGroup.value.questionId,
      question:this.formGroup.value.question,
      answer: this.formGroup.value.answer,
      options:this.savedOptions,
      paper:this.formGroup.value.paper
    })
    this.savedOptions=[]
    this.formGroup.reset()
    console.log(this.questionPaperList)
  }

  editQuestionPaper(data,id){
   // this.isEnabled=false;
    console.log(data)
    this.formGroup.setValue(data)
    this.qId=id;
  }

  updatePaper(){
    this.questionPaperList.removeAt(this.qId)
    this.formGroup.value.options.forEach(val=>{
      this.savedOptions.push(val)
  })
    this.questionPaperList.add({
      questionId:this.formGroup.value.questionId,
      question:this.formGroup.value.question,
      answer: this.formGroup.value.answer,
      options:this.savedOptions,
      paper:this.formGroup.value.paper
    })
    this.savedOptions=[]
    this.formGroup.reset()
  }

  deleteQuestionPaper(id){
      this.questionPaperList.removeAt(id)
  }

}
