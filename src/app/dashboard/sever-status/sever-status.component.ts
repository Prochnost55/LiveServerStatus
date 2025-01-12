import { Component, DestroyRef, inject } from '@angular/core';

@Component({
  selector: 'app-sever-status',
  standalone: true,
  imports: [],
  templateUrl: './sever-status.component.html',
  styleUrl: './sever-status.component.css'
})
export class SeverStatusComponent {
  destroyRef = inject(DestroyRef);

  currentStatus = 'online';
  interval = setInterval(() => {
    this.currentStatus = Math.random() < 0.8 ? 'online' : Math.random() > 0.5 ? 'offline' : 'unknown';
    
    // ngOnDestroy is called when the component is destroyed. This is useful for cleaning up resources like intervals
    // we can also use destroyRef to call the ngOnDestroy method. 
    this.destroyRef.onDestroy(() => clearInterval(this.interval)); 
  }, 3000);

  // // This is a lifecycle hook that is called when the component is destroyed
  // ngOnDestroy() {
  //   clearInterval(this.interval);
  // }
}
