import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {

  // a:number = 0;
  // @Input() title:string = 'تصنيف البلاغ';
  // @Output() accordionToggled = new EventEmitter<boolean>();
  // isOpen:boolean = true;
  // accordionId: string = `accordion-${Math.random().toString(36).substr(2, 9)}`;
  // headerId: string = `header-${Math.random().toString(36).substr(2, 9)}`;
  // collapseId: string = `collapse-${Math.random().toString(36).substr(2, 9)}`;

  // toggleAccordion(): void {
  //   const icon = document.getElementsByClassName('icon')[0] as HTMLImageElement;
  //   this.isOpen = !this.isOpen;
  //   this.accordionToggled.emit(this.isOpen);
  //   if(this.isOpen == true)
  //   {
  //     icon.src = "assets/cordicon.svg";
  //   }
  //   else {
  //     icon.src = "assets/corddown.svg";
  //   }
  // }
  

  @Input() title: string = 'تصنيف البلاغ';
  @Output() accordionToggled = new EventEmitter<boolean>();
  isOpen: boolean = true;
  accordionId: string = `accordion-${Math.random().toString(36).substr(2, 9)}`;
  headerId: string = `header-${Math.random().toString(36).substr(2, 9)}`;
  collapseId: string = `collapse-${Math.random().toString(36).substr(2, 9)}`;

  toggleAccordion(icon: HTMLImageElement): void {
    this.isOpen = !this.isOpen;
    this.accordionToggled.emit(this.isOpen);
    
    if (this.isOpen) {
      icon.src = "assets/cordicon.svg";
    } else {
      icon.src = "assets/corddown.svg";
    }
  }

}

