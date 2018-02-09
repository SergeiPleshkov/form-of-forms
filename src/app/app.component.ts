import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule, Form, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  fg1: FormGroup;
  fg2: FormGroup;
  fg3: FormGroup;

  parentGroup = new FormGroup({
  })
  constructor(fb: FormBuilder) { }

  ngOnInit() {
    this.fg1 = new FormGroup({
      'firstName': new FormControl('Vasily', Validators.required),
      'lastName': new FormControl('Pupkin', Validators.required),
      'birthDate': new FormControl('dd-mm-yyyy', Validators.required)
    });
    this.fg2 = new FormGroup({
      'phone': new FormControl('+1234567890', [Validators.required, Validators.pattern('[\+][0-9]*')]),
      'email': new FormControl('foo@bar.zz', [Validators.required, Validators.email]),
      'adress': new FormControl('Start with ZIP-code, please', [Validators.required, Validators.pattern('[0-9]{6}(.*)')])
    });
    this.fg3 = new FormGroup({
      'gender': new FormControl('', Validators.required),
      'spam': new FormControl('checked')
    })
    this.parentGroup.addControl('fg1', this.fg1)
    this.parentGroup.addControl('fg2', this.fg2)
    this.parentGroup.addControl('fg3', this.fg3)
  }

  submit(form) {
    console.log(form.value);
  }
}