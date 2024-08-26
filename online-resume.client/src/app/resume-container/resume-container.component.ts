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
      descriptions: 'Manage deadlines and team progress to ensure timely project delivery. Utilize effective communication skills to interact with teams, suppliers, and colleagues regarding tool requirements and maintenance schedules. ',
      skills: ['Lean', '5s', '3s']
    },
    {
      title: 'Soundman Engineering',
      company: 'Panther Sound System Entertainment',
      date: '2019 - 2021',
      descriptions: 'Set up sound systems for clients and manage event-space sound operations throughout the day.',
      skills: ['Problem-solving', 'Communication', 'Time management']
    },
    {
      title: 'Technician Machining',
      company: 'Vecast Sdn Bhd',
      date: '2018 - 2019',
      descriptions: 'Ensure smooth operation of machining processes and perform daily maintenance.',
      skills: ['CNC Programming', '5s', 'Fire Hazard Management']
    },
    {
      title: 'Service Advisor',
      company: 'Osaga Service Center',
      date: '2017 - 2018',
      descriptions: 'Review customer records and provide recommendations for upcoming services.',
      skills: ['Planning', 'Customer Service', 'Communication']
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
