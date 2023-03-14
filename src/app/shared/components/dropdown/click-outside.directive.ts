import { Directive, ElementRef, EventEmitter, Output, HostListener } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {
  @Output() public clickOutside = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event.target']) public onClick(target: any) {
    console.log('test')
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside) {
      this.clickOutside.emit();
    }
  }
}
