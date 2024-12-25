import { Component } from '@angular/core';

@Component({
  selector: 'button[appButton]', // Attribute selector - selects html elements with the appButton attribute
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

}
