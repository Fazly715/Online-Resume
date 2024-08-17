import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-resume-container',
  templateUrl: './resume-container.component.html',
  styleUrls: ['./resume-container.component.css']  // Updated to styleUrls
})
export class ResumeContainerComponent {
  experiences = [
    {
      title: 'Tooling Coordinator',
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
      skills: ['Problem-solve', 'Smooth talk', 'Time manage']
    },
    {
      title: 'Technician Machining',
      company: 'Vecast Sdn Bhd',
      date: '2018 - 2019',
      descriptions: 'To make sure machining runs smoothly and do daily maintenance',
      skills: ['Code CNC', '5s', 'Fire hazard']
    },
    {
      title: 'Service Advisor',
      company: 'Osaga Service Center',
      date: '2017 - 2018',
      descriptions: 'Check customer record and advise what to service next',
      skills: ['Planning', 'Customer Service', 'Time manage']
    },
  ];

  contacts = [
    { 
      image: 'assets/icons/gmail.svg',
      name: 'Gmail',
      url: 'mailto:fazly715@gmail.com', // Updated URL to use 'mailto:'
      displayText: 'fazly715@gmail.com',
      copyable: true,
      textToCopy: 'fazly715@gmail.com'
    },
    {
      image: 'assets/icons/whatsapp.svg',
      name: 'Whatsapp',
      url: 'http://wasap.my/60172911227',
      displayText: '+60172911227',
      copyable: true,
      textToCopy: '+60172911227'
    },
    {
      image: 'assets/icons/linkedin.svg',
      name: 'LinkedIn',
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

  constructor(private snackBar: MatSnackBar) {}

  copyToClipboard(text: string) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();

    try {
      const successful = document.execCommand('copy');
      document.body.removeChild(textarea);

      if (successful) {
        this.snackBar.open('Copied to clipboard: ' + text, 'OK', {
          duration: 5000,
        });
      } else {
        this.snackBar.open('Failed to copy text', 'Close', {
          duration: 300000,
        });
      }
    } catch (err) {
      document.body.removeChild(textarea);
      this.snackBar.open('Failed to copy text', 'Close', {
        duration: 3000,
      });
      console.error('Failed to copy: ', err);
    }
  }
}
