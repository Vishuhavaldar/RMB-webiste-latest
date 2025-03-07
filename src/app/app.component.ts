import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,  HeaderComponent,FooterComponent], // Add RouterModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected `styleUrls`
})
export class AppComponent {
  title = 'RMB';
}
