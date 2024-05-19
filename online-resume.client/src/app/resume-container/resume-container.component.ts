import { Component } from '@angular/core';

@Component({
  selector: 'app-resume-container',
  templateUrl: './resume-container.component.html',
  styleUrl: './resume-container.component.css'
})
export class ResumeContainerComponent {
  contacts = [
    { 
      image: 'assets/icons/gmail.svg',
      name: 'Gmail',
      url: 'mailto:fazly715@gmail.com',
      displayText: 'fazly715@gmail.com',
      copyable: true
    },
    {
      image: 'assets/icons/whatsapp.svg',
      name: 'Whatsapp',
      url: 'http://wasap.my/60172911227',
      displayText: '+60172911227',
    },
    {
      image: 'assets/icons/linkedin.svg',
      name: 'linkedIn',
      url: 'google.com',
      displayText: 'fazly715',
    },
    {
      image: 'assets/icons/github.svg',
      name: 'GitHub',
      url: 'google.com',
      displayText: 'fazly715',
    }
  ];
}
