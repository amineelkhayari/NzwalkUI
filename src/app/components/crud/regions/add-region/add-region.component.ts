import { Component, Input, OnInit } from '@angular/core';
import { RegioncallfuncService } from '../../../../services/regioncall/regioncallfunc.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-region',
  templateUrl: './add-region.component.html',
  styleUrl: './add-region.component.css'
})
export class AddRegionComponent implements OnInit {
  constructor(private regionmethod: RegioncallfuncService, private fb: FormBuilder) { }

  // declare properties
  show: string = "none";
  show_update: string = "none";
  updateId: string = '';
  pagination:any=[];

  AllRegion: any[] = [];
  saveForm!: FormGroup;
  @Input() id: any;
  
  hello(event: any) {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    var imageName:any = prompt("Please enter name of image");
    if (imageName != null) {
      formData.append('File', file);
    formData.append('description', 'ssss');
    formData.append('FileName', imageName);
    this.regionmethod.imageUploader(formData)
    .subscribe({
      next: (resSuccess: any) => {
        this.saveForm = new FormGroup({
          code: new FormControl(''),
          name: new FormControl(''),
          regionImageUrl : new FormControl(resSuccess.filePath)
        })
      
    
        console.log(resSuccess)
      },
      error: (errM) => {
        console.log(errM)
      }
    })
    }
    
  
  }
  // onload page execute this party
  ngOnInit(): void {

    this.getAllRegion();
    // get alldata from server load on charge page
    
    //
    this.saveForm = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      regionImageUrl: ['', Validators.required],

    })

    //
  }// end oninit
  IsCurrentPage(CurrentPage:number,page:number){

      return CurrentPage == page ? 'Active' : 'NoActive';
  }

  //pagination Load data
  LoadPage(page:number){
    this.getAllRegion(page);
  }

  getAllRegion(page?:number){
    if(page ==null) page=1
    this.regionmethod.getAllRegion(page, "https://localhost:44398/api/Regions")
      .subscribe({
        next: (resSuccess) => {
          if(resSuccess.success){
            console.log('Data', resSuccess)
          this.AllRegion = resSuccess.data;
          this.pagination = JSON.parse(resSuccess.message);
          
          }
          
        },
        error: (errSuccess) => {
        return errSuccess;
        }
      })
  }
  //form show and hide
  addShow() {
    this.show = this.show == "none" ? "block" : "none";
  }//end addshow
  updateShow(id: string = '') {
    if (id != '') {
      this.updateId = id;
      this.regionmethod.getRegionById(id)
        .subscribe(
          {
            next: (resSuccess) => {
              //alert(resSuccess.code)
              // This works!
              this.saveForm = new FormGroup({
                code: new FormControl(resSuccess.data.code),
                name: new FormControl(resSuccess.data.name),
                regionImageUrl: new FormControl(resSuccess.data.regionImageUrl),

              })
              console.log(resSuccess.data.id)


            },
            error: (errSuccess) => {
              console.warn(errSuccess)
            }
          }
        )

    }
    this.show_update = this.show_update == "none" ? "block" : "none";

  }
  //method for copy text
  copy(id: string) {
    navigator.clipboard.writeText(id);
  }//end copy method
  onUpdate() {
    if (this.saveForm.valid)
      this.regionmethod.updateregion(this.saveForm.value, this.updateId)
        .subscribe(
          {
            next: (resSuccess) => {
              console.log(resSuccess)
              this.getAllRegion();

            },
            error: (errSuccess) => {
              console.log(errSuccess);

            }
          }
        );
        this.getAllRegion();

  }
  //on send request
  onSave() {
    if (this.saveForm.valid) {
      //console.log(this.saveForm.value)
      this.regionmethod.postNewRegion(this.saveForm.value)
        .subscribe({
          next: (resSuccess) => {
            console.log(resSuccess)
            alert(`new Region add ${resSuccess.data.code}`)
            this.AllRegion.push(this.saveForm.value)
            this.saveForm.reset();

           //this.getAllRegion();

          },
          error: (errSuccess) => {
            console.log(errSuccess)
          }
        })
    }
  }
  getIndex(id:string) : number {
   return this.AllRegion.findIndex((region)=>region.id === id);

  }
  deleteRegion(id: string) {
    this.regionmethod.deleteRegion(id)
      .subscribe(
        {
          next: (resSuccess) => {
            alert(`the Region With code ${resSuccess.code} are deleted`)
            this.AllRegion.splice(this.getIndex(id),1)
            //this.getAllRegion();

          }
        }
      )
  }
}
