import { Directive,ElementRef ,Input } from '@angular/core';
import { AbstractControl,NG_VALIDATORS,ValidationErrors,Validator } from '@angular/forms';

@Directive({
  selector: '[appConfirmPassword]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ConfirmPasswordDirective, multi: true }]

})
export class ConfirmPasswordDirective implements Validator {


  constructor() { }
  validate(control: AbstractControl | any): ValidationErrors {
    let pass = control.parent.controls.password.value;
    let cpass = control.value;
    if(pass!=cpass)
    {
      return {"Error":true}
    }
    return null
  }
  
}
