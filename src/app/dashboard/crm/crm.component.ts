import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";

@Component({
  selector: 'app-crm',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './crm.component.html',
  styleUrl: './crm.component.css'
})
export class CrmComponent {

}
