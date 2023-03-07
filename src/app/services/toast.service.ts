import { Injectable } from '@angular/core';
import { MessageService } from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private messageService: MessageService
  ) { }

  successToast(message: string){
    this.messageService.add({severity:'success', summary:'Sikeres', detail: message});
  }

  errorToast(message: string) {
    this.messageService.add({severity:'error', summary:'Hiba', detail: message});
  }
}
