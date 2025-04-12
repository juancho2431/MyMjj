import {
  Directive,
  ElementRef,
  Renderer2,
  Output,
  EventEmitter,
  Input,
  AfterViewInit
} from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]',
  standalone: true
})
export class ScrollAnimateDirective implements AfterViewInit {
  @Output() visible = new EventEmitter<boolean>();
  @Input('appScrollAnimate') animationClass = 'animate-fade-in-up';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return;

    // Estado inicial
    this.renderer.addClass(this.el.nativeElement, 'opacity-0');
    this.renderer.addClass(this.el.nativeElement, 'invisible');
    this.renderer.setStyle(this.el.nativeElement, 'will-change', 'opacity, transform');
    this.renderer.addClass(this.el.nativeElement, 'transition-opacity');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Espera un frame para asegurar que Safari re-renderice
          requestAnimationFrame(() => {
            this.renderer.removeClass(this.el.nativeElement, 'opacity-0');
            this.renderer.removeClass(this.el.nativeElement, 'invisible');
            this.renderer.addClass(this.el.nativeElement, 'opacity-100');
            this.renderer.addClass(this.el.nativeElement, this.animationClass);
            this.visible.emit(true);
            observer.unobserve(this.el.nativeElement);
          });
        }
      },
      {
        threshold: 0.35,
        rootMargin: '0px 0px -15% 0px' // más tolerancia en iOS
      }
    );

    observer.observe(this.el.nativeElement);
  }
}
