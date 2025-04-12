import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ✅ importa esto

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule // ✅ agrégalo aquí
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuOpen = false;
  servicesMenuOpen = false;

  services = [
    { title: 'Seguridad Industrial', route: '/servicios/seguridad-industrial' },
    { title: 'Sistemas Eléctricos', route: '/servicios/sistemas-electricos' },
    { title: 'Sistemas Mecánicos', route: '/servicios/sistemas-mecanicos' },
    { title: 'Automatización', route: '/servicios/automatizacion' },
    { title: 'Repuestos', route: '/servicios/repuestos' },
    { title: 'Asesorías Técnicas', route: '/servicios/asesorias' },
    { title: 'Fabricación Industrial', route: '/servicios/fabricacion' },
    { title: 'Mantenimiento General', route: '/servicios/mantenimiento' },
    { title: 'Sistemas Hidráulicos', route: '/servicios/sistemas-hidraulicos' },
    { title: 'Sistemas Neumáticos', route: '/servicios/sistemas-neumaticos' },
    { title: 'Pintura Industrial', route: '/servicios/pintura-industrial' }
  ];

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
    this.servicesMenuOpen = false;
  }

  toggleServicesMenu(): void {
    this.servicesMenuOpen = !this.servicesMenuOpen;
  }
}