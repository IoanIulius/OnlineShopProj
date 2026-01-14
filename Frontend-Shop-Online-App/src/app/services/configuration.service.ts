import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor() {
  }

  public footerConfig() {
    return {
      author: 'Ionutas Ioan',
      group: 'UAV WEB2',
      projectTitle: 'Online Shop'
    }
  }

}
