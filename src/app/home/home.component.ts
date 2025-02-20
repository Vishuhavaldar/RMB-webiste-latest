import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,LucideAngularModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], // Corrected: `styleUrls` should be an array
})
export class HomeComponent {}
