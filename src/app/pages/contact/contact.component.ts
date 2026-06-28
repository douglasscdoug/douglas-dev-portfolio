import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

import AOS from 'aos';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environments';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit{
  private fb = inject(FormBuilder);
  private toastr = inject(ToastrService);

  isSending = false;

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required]
  })

  sendEmail(): void {
    if(this.contactForm.invalid) return;

    this.isSending = true;

    emailjs.send(
      environment.emailJsServiceId,
      environment.emailJsTemplateId,
      {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        subject: this.contactForm.value.subject,
        message: this.contactForm.value.message
      },
      environment.emailJsPublicKey
    )
    .then(() => {
      this.toastr.success("Mensagem enviada com sucesso!", "Sucesso");
      this.contactForm.reset();
    })
    .catch(() => {
      this.toastr.error("Erro ao enviar mensagem!", "Erro");
    })
    .finally(() => {
      this.isSending = false;
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  AOS.init({
    once: true,
    duration: 700
  });
}
}
