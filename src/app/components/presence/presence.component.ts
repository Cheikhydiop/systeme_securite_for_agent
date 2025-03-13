import { Component } from '@angular/core';
import { MainLayoutComponent } from '../../components/main-layout/main-layout.component';

interface Guard {
  name: string;
  code: string;
  gender: 'M' | 'F';
  matricule: string;
  declaration: string;
  email: string;
  status: 'actif' | 'inactif';
}
@Component({
  selector: 'app-presence',
  imports: [MainLayoutComponent],
  templateUrl: './presence.component.html',
  styleUrl: './presence.component.css'
})
export class PresenceComponent {
  guards: Guard[] = [
    {
      name: 'Assata Diop',
      code: '1056215',
      gender: 'F',
      matricule: 'RF-12943',
      declaration: '76316492',
      email: 'charles.noel32@gmail.com',
      status: 'actif'
    },
    {
      name: 'Ousmane Guedhiou',
      code: '1056215',
      gender: 'M',
      matricule: 'RF-12943',
      declaration: '76316492',
      email: 'charles.noel32@gmail.com',
      status: 'actif'
    },
    {
      name: 'Cheikh Diop',
      code: '1056215',
      gender: 'M',
      matricule: 'RF-12943',
      declaration: '76316492',
      email: 'charles.noel32@gmail.com',
      status: 'actif'
    }
  ];
}



