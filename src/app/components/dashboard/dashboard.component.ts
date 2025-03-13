import { Component } from '@angular/core';
import { MainLayoutComponent } from '../../components/main-layout/main-layout.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MainLayoutComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
