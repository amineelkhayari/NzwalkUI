import { Component, Input, OnInit, inject } from '@angular/core';
import { IRegionAddInerfaces } from '../../../Interfaces/IRegionAddInerfaces';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { IFormControl, IValidator } from '../../../Interfaces/formInterface';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit {
  
  @Input() MetaData:IRegionAddInerfaces={btnTitle:'',Id:'',Title:''};
  @Input() form!:any;
  fb = inject(FormBuilder);
  dyFormGroup : FormGroup =this.fb.group({});
  ngOnInit(): void {
    if(this.form?.formControls)
    {
      let formGroup: any={};
      this.form.formControls.forEach((control :IFormControl) => {

        let controlValidator :any=[];
        if(control.validators){
          control.validators.forEach((val:IValidator)=>{
            if(val.validatorName=='Required'){
              controlValidator.push(Validators.required);
            }
          })
        }
        formGroup[control.name] = [control.value || ''];

      });
      this.dyFormGroup = this.fb.group(formGroup);

    }
  }

}
