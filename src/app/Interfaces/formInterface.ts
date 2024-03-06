export interface IForm {

    formTitle: string
    saveBtnTitle: string
    id:string
    class:string
    formControls: IFormControl[]
  }
  
  export interface IFormControl {
    name: string
    label: string
    value: string
    options?: IOption[]
    passValue?:string
    placerHolder: string
    class: string
    type: string
    validators: IValidator[]
  }
  
  export interface IValidator {
    validatorName: string
    required: boolean
  }
  
  export interface IOption{
    id?:string
    code?:string
  }