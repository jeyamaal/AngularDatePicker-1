import { Component,AfterViewInit } from '@angular/core';
import datepicker from 'angular-ui-bootstrap/src/datepicker';
import { FormGroup, FormArray, FormBuilder, Validators,ReactiveFormsModule, NgForm,FormControl } from '@angular/forms';


declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  
  public birthdateForm: FormGroup;

  constructor(private fb:FormBuilder){

    var fileName:any;


     this.birthdateForm=this.fb.group({
     
   
       'mydate':['',Validators.required],
       'mulselect':['',Validators.required],
       'imageInput':['',Validators.required],
      
   

     });

  }
 
  ngAfterViewInit() {

    $('.selectpicker').selectpicker();
    }
 
  onSubmit(){
    console.log(this.birthdateForm);
    // console.log(this.date);
 
  }

  url = '';


   //date= new Date();


  onFileChange(event) {

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event:any) => {
        this.url = event.target.result;
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
    
    let file = event.target.files[0]; // <--- File Object for future use.
    var pattern = /image-*/;

    if(file.type.match(pattern)){
      
     this.birthdateForm.controls['imageInput'].setValue(file ? file.name : '');
   
    }
     else{ alert("Invalid Format")};
}


// onSelectFile(event) { // called each time file input changes

//   let target: any = event.target; //<-- This (any) will tell compiler to shut up!
//   let content: string = target.result;

//   if (event.target.files && event.target.files[0]) {
//     var reader = new FileReader();

//     reader.readAsDataURL(event.target.files[0]); // read file as data url

//     reader.onload = (event) => { // called once readAsDataURL is completed
//       this.url =reader.result;
//     }
//   }
// }



readUrl(event:any) {

   

  if (event.target.files && event.target.files[0]) {
    
    var reader = new FileReader();
    reader.onload = (event:any) => {
    this.url = event.target.result;
  }

    reader.readAsDataURL(event.target.files[0]);
  }
}






}



