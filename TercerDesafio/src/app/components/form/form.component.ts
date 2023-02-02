import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  firstName = new FormControl('', [
    Validators.required,
    Validators.pattern("[a-zA-Z ]*"),
    Validators.minLength(5),
    Validators.maxLength(20)
  ])

  lastName = new FormControl('', [
    Validators.required,
    Validators.pattern("[a-zA-Z ]*"),
    Validators.minLength(5),
    Validators.maxLength(20)
  ])

  cedula = new FormControl('', [
    Validators.required,
    Validators.pattern("^[0-9]*"),
    Validators.maxLength(8),
    Validators.minLength(7)
  ])

  email = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.minLength(5)
  ])

  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8)
  ])

  signedTermsForUser = new FormControl(
    false,
    [Validators.requiredTrue]
  )

  dataForm = new FormGroup({
    firstName: this.firstName,
    lastName: this.lastName,
    dni: this.cedula,
    email: this.email,
    password: this.password,
    signedTermsForUser: this.signedTermsForUser
  })

  dataFormSubmit() {
    console.log(this.dataForm.value)
  }
}