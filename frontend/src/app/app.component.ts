import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './core/footer/footer.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ScrollTopButtonComponent } from './../shared/scroll-top-button.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent , FooterComponent, ScrollTopButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
