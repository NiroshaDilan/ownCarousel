import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {animate, state, style, transition, trigger, useAnimation} from "@angular/animations";
import {fadeIn, fadeOut, scaleIn, scaleOut} from "./carousel.animation";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [useAnimation(scaleIn, {params: {time: '500ms'}})]),
      transition('* => void', [useAnimation(scaleOut, {params: {time: '500ms'}})])
    ])
  ]
})
export class CarouselComponent implements OnChanges {

  @Input() slides: any;
  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();

  currentSlide = 0;
  currentMessage: string = '';

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.currentMessage = this.slides[this.currentSlide].msg;
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
    this.currentMessage = this.slides[this.currentSlide].msg;
    this.prev.emit();
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
    this.currentMessage = this.slides[this.currentSlide].msg
    this.next.emit();
  }

}
