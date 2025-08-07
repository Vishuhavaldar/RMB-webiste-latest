import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-flash-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flash-popup.component.html',
  styleUrl: './flash-popup.component.css'
})

export class FlashPopupComponent implements OnInit {
  showPopup = false;

  ngOnInit(): void {
    const today = new Date();
    const endDate = new Date('2025-08-14'); // Show popup until 14th August 2025

    if (today <= endDate) {
      this.showPopup = true;
    }
  }

  closePopup() {
    this.showPopup = false;
  }
}
