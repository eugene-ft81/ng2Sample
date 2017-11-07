import { ApiService } from '../api.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'add-user',
  templateUrl: 'add-user.component.html'
})
export class AddUserComponent implements OnInit {
  @ViewChild('f') ngForm;

  form: any;

  private excludedCharsNameRegex = '^[^$%#@]*$';
  name = new FormControl('', [Validators.required, Validators.maxLength(20), Validators.pattern(this.excludedCharsNameRegex)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  age = new FormControl('', [Validators.required, Validators.min(1), Validators.max(100)]);

  constructor(private apiService: ApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      age: this.age
    });
  }

  add() {
    this.apiService.add({
      name: this.form.get('name').value,
      email: this.form.get('email').value,
      age: this.form.get('age').value
    });
    this.ngForm.resetForm();
  }

  getNameErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a value' :
      this.name.hasError('maxLength') ? 'Name is longer than 20 characters' :
        this.name.hasError('pattern') ? 'Forbidden character(s) in name' :
            '';
  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  getAgeErrorMessage() {
    return this.age.hasError('required') ? 'You must enter a value' :
      this.age.hasError('min') ? 'Age is less than 1' :
        this.age.hasError('max') ? 'Age is greater than 100' :
            '';
  }
}
