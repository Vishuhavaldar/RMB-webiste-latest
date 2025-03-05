import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { Contact } from 'lucide-angular';
import { ContactComponent } from './contact/contact.component';
import { ProductSectionComponent } from './products/products.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {path:'about',component:AboutUsComponent},
    {path:'contact',component:ContactComponent},
    {path:'products',component:ProductSectionComponent}
];
