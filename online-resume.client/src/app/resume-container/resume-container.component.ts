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
      descriptions: 'Managing deadlines and progress across the team to ensure the project is delivered on time. While effective communication skills to interact with different teams, suppliers, and colleagues regarding tool requirements or maintenance schedules.',
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
      url: 'fazly715@gmail.com',
      displayText: 'fazly715@gmail.com',
      copyable: true,
      textToCopy:'fazly715@gmail.com'
      
    },
    {
      image: 'assets/icons/whatsapp.svg',
      name: 'Whatsapp',
      url: 'http://wasap.my/60172911227',
      displayText: '+60172911227',
      copyable: true,
      textToCopy:'+60172911227'
    },
    {
      image: 'assets/icons/linkedin.svg',
      name: 'linkedIn',
      url: 'https://www.linkedin.com/in/mohammad-fazly-a44757231/',
      displayText: 'Mohd Fazly',
    },
    {
      image: 'assets/icons/github.svg',
      name: 'GitHub',
      url: 'https://github.com/Fazly715',
      displayText: 'fazly715',
    }
  ];
  
  copyToClipboard(text : string) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
}





