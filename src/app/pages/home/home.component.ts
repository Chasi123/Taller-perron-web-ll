import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('slider', { static: true }) sliderRef!: ElementRef;
  @ViewChild('slideControl', { static: true }) controlRef!: ElementRef;
  @ViewChild('modal', { static: true }) modalRef!: ElementRef;
  @ViewChild('modalContent', { static: true }) modalContentRef!: ElementRef;

  slideIndex = 0;

  ngAfterViewInit(): void {
    const slides = this.sliderRef.nativeElement.getElementsByClassName('slide');
    const controlItems = this.controlRef.nativeElement.getElementsByClassName('slide-control-item');

    // Mostrar solo el primer slide
    this.activateSlide(this.slideIndex, slides, controlItems);

    const controls = Array.from(controlItems) as HTMLElement[];

    controls.forEach((el, index) => {
      el.addEventListener('click', () => {
        this.slideIndex = index;
        this.activateSlide(index, slides, controlItems);
      });
    });

    this.setupModalEvents();
  }

 activateSlide(index: number, slides: HTMLCollectionOf<Element>, controls: HTMLCollectionOf<Element>) {
  Array.from(slides).forEach((slide, i) => {
    slide.classList.remove('active');
  });

  Array.from(controls).forEach((control, i) =>
    control.classList.toggle('active', i === index)
  );

  // 🪄 Delay para permitir animación
  setTimeout(() => {
    slides[index].classList.add('active');
  }, 50); // Pequeño delay para disparar transiciones
}

  setupModalEvents(): void {
    const closeBtn = this.modalRef.nativeElement.querySelector('#modal-close') as HTMLElement;
    const moreImages = document.getElementsByClassName('more-images-item');
    const previewImages = document.getElementsByClassName('img-preview');

    closeBtn.onclick = () => {
      this.modalRef.nativeElement.style.display = 'none';
    };

    Array.from(moreImages).forEach((el: Element) => {
      el.addEventListener('click', () => {
        const imgItems = el.parentElement?.querySelectorAll('img') || [];
        imgItems.forEach((item, index) => {
          const preview = previewImages[index] as HTMLImageElement;
          preview.src = item.getAttribute('src') || '';
        });

        const selectedImg = el.querySelector('img');
        const modalContent = this.modalContentRef.nativeElement as HTMLImageElement;
        modalContent.src = selectedImg?.getAttribute('src') || '';

        // Reiniciar animación del modal
        modalContent.classList.remove('modal-content');
        void modalContent.offsetWidth;
        modalContent.classList.add('modal-content');

        this.modalRef.nativeElement.style.display = 'block';
      });
    });
  }
}
