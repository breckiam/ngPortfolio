import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_a79wapg', 'template_62up146', e.target as HTMLFormElement, 'NcwQS3d88b3dOJhru')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error: { text: any; }) => {
        console.log(error.text);
      });
  }

}
