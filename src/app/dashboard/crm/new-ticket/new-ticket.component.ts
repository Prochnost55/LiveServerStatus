import { Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormControlComponent } from '../../../shared/form-control/form-control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, FormControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  // ViewChild is used to get a reference to a child component or element in the template
  // The decorator takes a selector as an argument. This can be a component or a template reference variable not a css class.
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  onSubmit(title: string, description: string) {
    console.log('title:', title, 'description:', description);

    // Reset the form after submission. nativeElement is used to access the native element of the element ref
    this.form?.nativeElement.reset();
  }
}
