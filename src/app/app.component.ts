import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { SeverStatusComponent } from "./dashboard/sever-status/sever-status.component";
import { TrafficViewerComponent } from "./dashboard/traffic-viewer/traffic-viewer.component";
import { CrmComponent } from "./dashboard/crm/crm.component";
import { DashboardItemComponent } from "./dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, SeverStatusComponent, TrafficViewerComponent, CrmComponent, DashboardItemComponent],

})
export class AppComponent {}
