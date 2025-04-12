import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    ScrollAnimateDirective
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  experienceStats = [
    {
      icon: 'build',
      title: 'Mantenimiento Mecánico',
      description: 'Diagnóstico y reparación de maquinaria industrial pesada.',
      final: 30,
      current: 0,
      suffix: '+',
      label: 'equipos atendidos'
    },
    {
      icon: 'engineering',
      title: 'Montajes Electromecánicos',
      description: 'Instalación de sistemas eléctricos, motores y estructuras.',
      final: 50,
      current: 0,
      suffix: '+',
      label: 'montajes realizados'
    },
    {
      icon: 'precision_manufacturing',
      title: 'Fabricación Metálica',
      description: 'Diseño y fabricación de estructuras para la industria.',
      final: 50,
      current: 0,
      suffix: '+',
      label: 'componentes fabricados'
    },
    {
      icon: 'memory',
      title: 'Automatización Industrial',
      description: 'Automatización con PLC, sensores y controladores.',
      final: 10,
      current: 0,
      suffix: '+',
      label: 'sistemas automatizados'
    },
    {
      icon: 'water',
      title: 'Hidráulica y Neumática',
      description: 'Diseño e instalación de líneas y sistemas de fluidos.',
      final: 20,
      current: 0,
      suffix: '+',
      label: 'líneas implementadas'
    },
    {
      icon: 'support_agent',
      title: 'Asesoría Técnica',
      description: 'Soluciones expertas en diagnóstico y planificación.',
      final: 10,
      current: 0,
      suffix: '+',
      label: 'asesorías realizadas'
    }
  ];

  animateStats(): void {
    this.experienceStats.forEach(stat => {
      stat.current = 0;
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
}
