import { Component } from '@angular/core';
import { FAppApiService } from './f-app-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  toastMessage = '';

  constructor(
    public fAppApiService: FAppApiService
  ) {
    
  }

  showToast(): void {
    this.fAppApiService.api.toastHandler.showToast(this.toastMessage)
    .then(() => {
      this.toastMessage = '';
    });
  }

}
