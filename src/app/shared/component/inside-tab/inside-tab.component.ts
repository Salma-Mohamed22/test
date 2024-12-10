import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inside-tab',
  templateUrl: './inside-tab.component.html',
  styleUrls: ['./inside-tab.component.css']
})
export class InsideTabComponent {
  index: number = 0;
  @Input() appearTab:boolean = true
  @Input() tabs:string[] = ['تفاصيل البلاغ','salma'];


  changeTab(tabIndex: any) {
    this.index = tabIndex
   }

  
}
