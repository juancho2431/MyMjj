import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  selectedProject: {
    title: string;
    description: string;
    location: string;
    date: string;
    cover: string;
    images: string[];
    currentImage?: number;
  } | null = null;

  projects = [
    {
      title: 'Montaje de Planta Dosificadora',
      description: 'Instalación completa de sistema de dosificación para concreto.',
      location: 'Medellín, Colombia',
      date: 'Marzo 2024',
      cover: 'aboutus.jpg',
      images: ['aboutus.jpg', 'Fabricacion.png', 'logo.png']
    },
    {
      title: 'Mantenimiento Preventivo de Mezcladora',
      description: 'Revisión técnica y repotenciación de mezcladora industrial.',
      location: 'Bogotá, Colombia',
      date: 'Enero 2024',
      cover: 'Mantenimientogeneral.png',
      images: ['Mantenimientogeneral.png', 'perfil1.png', 'perfil2.png']
    },
    {
      title: 'Automatización de banda transportadora',
      description: 'Integración de sensores y PLC para control de procesos.',
      location: 'Barranquilla, Colombia',
      date: 'Febrero 2024',
      cover: 'perfil3.png',
      images: ['perfil3.png', 'perfil4.png', 'perfil5.png']
    }
  ];

  openGallery(project: any): void {
    this.selectedProject = { ...project, currentImage: 0 };
  }

  closeGallery(): void {
    this.selectedProject = null;
  }

  nextImage(index: number): void {
    if (!this.selectedProject) return;
    const images = this.selectedProject.images;
    this.selectedProject.currentImage = (index + 1) % images.length;
  }

  prevImage(index: number): void {
    if (!this.selectedProject) return;
    const images = this.selectedProject.images;
    this.selectedProject.currentImage = (index - 1 + images.length) % images.length;
  }
}
