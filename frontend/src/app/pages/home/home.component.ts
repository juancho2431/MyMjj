import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselService } from '../services/carousel.service';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    ScrollAnimateDirective,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  private carousel = new CarouselService();
  private autoplayTimer: number | undefined;
  selectedIndex = 0;

  // 🎞️ Slides
  slides = [
    { image: 'SeguridadIndustrial.png', title: 'Seguridad Industrial', description: 'Protección y prevención en entornos de alto riesgo' },
    { image: 'Mantenimientogeneral.png', title: 'Mantenimiento General', description: 'Soluciones integrales para equipos y maquinaria' },
    { image: 'Fabricacion.png', title: 'Fabricación', description: 'Diseño y producción de estructuras industriales' },
    { image: 'Pinturaindustrial.png', title: 'Pintura Industrial', description: 'Protección anticorrosiva y acabado profesional' },
    { image: 'Sistemasneumaticos.png', title: 'Sistemas Neumáticos', description: 'Montaje, ajuste y mantenimiento de circuitos de aire' }
  ];

  // 🧩 Servicios
  services = [
    { title: 'Seguridad Industrial', description: 'Sistemas y protocolos de seguridad para entornos industriales de alto riesgo.', icon: 'security', bgColor: 'bg-primary text-white', route: '/servicios/seguridad-industrial' },
    { title: 'Sistemas Eléctricos', description: 'Instalaciones, cableado y control industrial eléctrico.', icon: 'electrical_services', bgColor: 'bg-white text-black border border-greyLight', route: '/servicios/sistemas-electricos' },
    { title: 'Sistemas Mecánicos', description: 'Ensamblajes, ajustes y revisiones mecánicas industriales.', icon: 'construction', bgColor: 'bg-greyDark text-white', route: '/servicios/sistemas-mecanicos' },
    { title: 'Automatización', description: 'Integración de sensores, controladores y PLC para procesos automáticos.', icon: 'memory', bgColor: 'bg-primaryDark text-white', route: '/servicios/automatizacion' },
    { title: 'Repuestos', description: 'Suministro de partes específicas para plantas y maquinaria.', icon: 'settings', bgColor: 'bg-white text-black border border-greyLight', route: '/servicios/repuestos' },
    { title: 'Asesorías Técnicas', description: 'Diagnóstico, evaluación y solución de problemas técnicos.', icon: 'support_agent', bgColor: 'bg-greyLight text-black', route: '/servicios/asesorias' },
    { title: 'Fabricación Industrial', description: 'Diseño y manufactura de componentes metálicos.', icon: 'precision_manufacturing', bgColor: 'bg-primary text-white', route: '/servicios/fabricacion' },
    { title: 'Mantenimiento General', description: 'Soporte preventivo y correctivo de maquinaria industrial.', icon: 'build', bgColor: 'bg-primaryDark text-white', route: '/servicios/mantenimiento' },
    { title: 'Sistemas Hidráulicos', description: 'Instalación y mantenimiento de circuitos hidráulicos de alta presión.', icon: 'water', bgColor: 'bg-primary text-white', route: '/servicios/sistemas-hidraulicos' },
    { title: 'Sistemas Neumáticos', description: 'Diseño y ajuste de líneas neumáticas para automatización.', icon: 'air', bgColor: 'bg-greyDark text-white border border-greyLight', route: '/servicios/sistemas-neumaticos' },
    { title: 'Pintura Industrial', description: 'Recubrimientos especiales, pintura anticorrosiva y de alto tráfico.', icon: 'format_paint', bgColor: 'bg-greyDark text-white', route: '/servicios/pintura-industrial' },
  ];

  // 🔢 Contadores en Áreas de Experiencia
  experienceStats = [
    { icon: 'build', title: 'Mantenimiento Mecánico', description: 'Diagnóstico y reparación de maquinaria industrial pesada.', final: 30, current: 0, label: 'equipos atendidos', suffix: '+' },
    { icon: 'engineering', title: 'Montajes Electromecánicos', description: 'Instalación de sistemas eléctricos, motores y estructuras.', final: 50, current: 0, label: 'montajes realizados', suffix: '+' },
    { icon: 'precision_manufacturing', title: 'Fabricación Metálica', description: 'Diseño y fabricación de estructuras para la industria.', final: 50, current: 0, label: 'componentes fabricados', suffix: '+' },
    { icon: 'memory', title: 'Automatización Industrial', description: 'Automatización con PLC, sensores y controladores.', final: 10, current: 0, label: 'sistemas automatizados', suffix: '+' },
    { icon: 'water', title: 'Hidráulica y Neumática', description: 'Diseño e instalación de líneas y sistemas de fluidos.', final: 20, current: 0, label: 'líneas implementadas', suffix: '+' },
    { icon: 'support_agent', title: 'Asesoría Técnica', description: 'Soluciones expertas en diagnóstico y planificación.', final: 10, current: 0, label: 'asesorías realizadas', suffix: '+' }
  ];

  // 💬 Testimonios en tarjetas individuales
  testimonials = [
    {
      name: 'Carlos Mendoza',
      position: 'Supervisor de Planta',
      company: 'Concremix S.A.S',
      image: 'perfil1.png',
      quote: 'Gracias al equipo de JJ pudimos reducir el tiempo de inactividad en un 40%.',
    },
    {
      name: 'Laura Torres',
      position: 'Ingeniera de Producción',
      company: 'Megaconcreto',
      image: 'perfil2.png',
      quote: 'Profesionales, responsables y cumplidos. ¡Excelente servicio!',
    },
    {
      name: 'Julián Ríos',
      position: 'Director Técnico',
      company: 'Indumix',
      image: 'perfil3.png',
      quote: 'Confío en JJ para todos nuestros montajes industriales.',
    },
    {
      name: 'Mariana Díaz',
      position: 'Gerente de Mantenimiento',
      company: 'Proconcretos',
      image: 'perfil4.png',
      quote: 'Siempre atentos, eficientes y con soluciones a medida.',
    },
    {
      name: 'Andrés Ramírez',
      position: 'Encargado de obra',
      company: 'Hormicreto',
      image: 'perfil5.png',
      quote: 'Excelente atención postventa y acompañamiento constante.',
    },
    {
      name: 'Diana López',
      position: 'Jefe de operaciones',
      company: 'Mixcol',
      image: 'perfil6.png',
      quote: 'Gracias a JJ nuestra planta opera sin contratiempos.',
    }
  ];

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      setTimeout(() => {
        this.carousel.initCarousel('.embla', {
          loop: true,
          onSelect: (index: number) => (this.selectedIndex = index),
        });

        const autoplay = () => {
          this.carousel.scrollNext();
          this.autoplayTimer = window.setTimeout(() => requestAnimationFrame(autoplay), 6000);
        };

        requestAnimationFrame(autoplay);
      });
    }
  }

  animateStats(): void {
    this.experienceStats.forEach((stat) => {
      const step = Math.ceil(stat.final / 50);
      const interval = setInterval(() => {
        stat.current += step;
        if (stat.current >= stat.final) {
          stat.current = stat.final;
          clearInterval(interval);
        }
      }, 30);
    });
  }

  scrollTo(index: number): void {
    if (index !== this.selectedIndex) {
      this.carousel.scrollTo(index);
    }
  }

  next(): void {
    this.carousel.scrollNext();
  }

  prev(): void {
    this.carousel.scrollPrev();
  }

  ngOnDestroy(): void {
    this.carousel.destroy();
    if (this.autoplayTimer) clearTimeout(this.autoplayTimer);
  }
}
