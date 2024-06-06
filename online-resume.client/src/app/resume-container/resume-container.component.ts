import { Component } from '@angular/core';

@Component({
  selector: 'app-resume-container',
  templateUrl: './resume-container.component.html',
  styleUrl: './resume-container.component.css'
})
export class ResumeContainerComponent {
  experiences = [
    {
      title: 'Tooling coordinator',
      company: 'Fieldcore GE Sdn Bhd',
      date: '2021 - Present',
      descriptions: 'Manage tooling to client smooth and repair major or overhaul tooling',
      skills: ['Lean', '5s', '3s']
    },
    {
      title: 'Soundman Engineering',
      company: 'Panther Sound System Entertainment',
      date: '2019 - 2021',
      descriptions: 'Setup sound system for client or take event-space for all days',
      skills: ['Problem-solve', 'Smooth talk', 'time manage']
    },
    {
      title: 'Technician Machining ',
      company: 'Vecast Sdn Bhd',
      date: '2018 - 2019',
      descriptions: 'To make sure machining run smooth and do daily maintaniner',
      skills: ['Code CNC', '5s', 'Fire hazard']
    },
    {
      title: 'Service adviso',
      company: 'Osaga service centra',
      date: '2017 - 2018',
      descriptions: 'Check customer record and adivice what to service next',
      skills: ['Planning', 'Customer Service', 'Time manage']
    },
    
  ]
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




