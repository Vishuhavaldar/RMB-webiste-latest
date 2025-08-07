import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlashPopupComponent } from '../flash-popup/flash-popup.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FlashPopupComponent], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToProducts(company: string) {
    this.router.navigate(['/products'], { queryParams: { category: company } });
  }
  
}
