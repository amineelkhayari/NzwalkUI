import { Component, Input, OnInit, inject } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IFormControl, IValidator } from '../../../Interfaces/formInterface';
import { RegioncallfuncService } from '../../../services/regioncall/regioncallfunc.service';

@Component({
  selector: 'app-walk',
  templateUrl: './walk.component.html',
  styleUrl: './walk.component.css',

})
export class WalkComponent implements OnInit {
  constructor(private regionmethod: RegioncallfuncService) { }
  @Input() title: string = '';
  @Input() form!: any;
  fb = inject(FormBuilder)
  dyFormGroup: FormGroup = this.fb.group({});

  ngOnInit(): void {
      
    if (this.form?.formControls) {
      let formGroup: any = {};
      this.form.formControls.forEach((control: IFormControl) => {

        let controlValidator: any = [];
        if (control.validators) {
          control.validators.forEach((val: IValidator) => {
            if (val.validatorName == 'Required') {
              controlValidator.push(Validators.required);
            }
          })
        }
        formGroup[control.name] = [control.value || ''];

      });
      this.dyFormGroup = this.fb.group(formGroup);
    }
  }


  onSubmit() {
    alert("Submit")
    console.log(this.dyFormGroup.value);
  }

  uploadImage(event: any, formNameControl:string) {
    console.log(formNameControl)

    var file = event.target.files[0];
    const formData: FormData = new FormData();
    var imageName: any = prompt("Please enter name of image");
    console.log(formNameControl)

    if (imageName != null) {
      formData.append('File', file);
      formData.append('description', imageName);
      formData.append('FileName', imageName);
      this.regionmethod.imageUploader(formData)
        .subscribe({
          next: (resSuccess: any) => {
            console.log(resSuccess.filePath)
            this.dyFormGroup.get(formNameControl)?.setValue(resSuccess.filePath);

          },
          error: (errM) => {
            console.log(errM)
          }
        })
    }
  }
}
