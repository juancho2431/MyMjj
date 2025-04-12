import EmblaCarousel, {
    EmblaOptionsType,
    EmblaCarouselType,
  } from 'embla-carousel';
  
  type OnSelectCallback = (index: number) => void;
  
  export class CarouselService {
    private embla: EmblaCarouselType | null = null;
    private onSelectCallback: OnSelectCallback | null = null;
  
    initCarousel(selector: string, options?: EmblaOptionsType & { onSelect?: OnSelectCallback }) {
      const node = document.querySelector(selector) as HTMLElement;
      if (node) {
        const { onSelect, ...emblaOptions } = options || {};
        this.embla = EmblaCarousel(node, emblaOptions);
        this.onSelectCallback = onSelect || null;
  
        if (this.embla && this.onSelectCallback) {
          this.embla.on('select', () => {
            const index = this.embla!.selectedScrollSnap();
            this.onSelectCallback!(index);
          });
  
          // Ejecutar una vez al cargar
          const initialIndex = this.embla.selectedScrollSnap();
          this.onSelectCallback(initialIndex);
        }
      }
    }
  
    scrollNext() {
      this.embla?.scrollNext();
    }
  
    scrollPrev() {
      this.embla?.scrollPrev();
    }
  
    scrollTo(index: number) {
      this.embla?.scrollTo(index, true);
    }
  
    destroy() {
      this.embla?.destroy();
      this.embla = null;
      this.onSelectCallback = null;
    }
  }
  