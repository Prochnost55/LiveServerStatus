import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-form-control',
  standalone: true,
  imports: [],
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.css',
  encapsulation: ViewEncapsulation.ShadowDom, // encapsulation.shadowDom sets the css to be scoped globally as opposed to the default of emulated
  host: { // host is used to set attributes on the host element
    class: 'control' // sets the class attribute on the host element to 'control'

    // you can also add an event listener to the host element by using the following syntax
    // '(click)': 'onClick($event)'
  }
})
export class FormControlComponent {

  // alternative to host property above, you can use the following decorator to set the class attribute on the host element
  // @HostBinding('class') className = 'control'
  // host binding accepts a attribute name to add and a value to set it to

  // Also if you want to add a listner to the host element you can use the following decorator
  // @HostListener('click', ['$event'])
  // onClick(event: Event) {
  //   console.log('click event', event)
  // }

  @Input({required: true}) title!: string;

  // If you want access to the host element you can use the following syntax
  // private el = inject(ElementRef);
  // this.el.nativeElement is the host element
}
