import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactConfigService {

  getPageConfig(): any {
    return {
      title: "Contact",
      form: {
        name: {
          text: 'name',
          lable: 'name'
        },
        email: {
          text: 'email',
          lable: 'email'
        }
      }
    }
  }
}
