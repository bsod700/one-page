import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { ContactForm } from 'src/app/shared/interfaces/contact-form.interface';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactConfigService } from './contact-config.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() componentConfig!: {
    title: string,
    form: ContactForm;
  }
  contactForm!: FormGroup;
  formBuilder: FormBuilder = inject(FormBuilder)
  contactConfigService: ContactConfigService = inject(ContactConfigService)
  message: boolean = false
  ngOnInit() {
    this.componentConfig = this.contactConfigService.getPageConfig()
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    if(this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.message = true;
      emailjs.sendForm(environment.emailjs.SERVICE_ID, environment.emailjs.TEMPLATE_ID, e.target as HTMLFormElement,  environment.emailjs.PUBLIC_KEY)
      .then((result: EmailJSResponseStatus) => {
        this.message = true;
        this.contactForm.reset()
        console.log(result.text);
      }, (error: { text: any; }) => {
        console.log(error.text);
      });
    }
    else {
      console.log('not valid');
      
    }
    
  }
}
