import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  formContact = this.fb.group({
    name: ["", [
      Validators.minLength(4),
      Validators.required
    ]],
    subject: ["", [
      Validators.minLength(20),
      Validators.required
    ]],
    phone: ["", [
      Validators.minLength(11),
      Validators.required
    ]],
    email: ["", [
      Validators.email,
      Validators.required
    ]],
    message: ["", [
      Validators.minLength(20),
      Validators.required
    ]]
  })

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  formSend() {
    alert("Mensagem enviada com sucesso");
    this.formContact.reset();
  }

}
