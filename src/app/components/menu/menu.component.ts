import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from "primeng/menubar";
import { MenuItem, PrimeNGConfig } from "primeng/api";
import { DialogModule } from "primeng/dialog";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { RegistrationComponent } from "../registration/registration.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, MenubarModule, DialogModule],
  providers: [DialogService],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

  ref!: DynamicDialogRef;

  constructor(
    private primeNGConfig: PrimeNGConfig,
    public dialogService: DialogService
  ) {}

  items!: MenuItem[];

  ngOnInit() {
    this.primeNGConfig.ripple = true;

    this.items = [
      {
        label: 'Bejelentkezés',
        icon: 'pi pi-fw pi-user',
      },
      {
        label: 'Regisztráció',
        icon: 'pi pi-fw pi-id-card',
        command: () => {
          this.ref = this.dialogService.open(
            RegistrationComponent,
            {
              dismissableMask: true,
              header: "Regisztráció"
            }
          );
        }
      },
      {
        label: 'Kijelentkezés',
        icon: 'pi pi-fw pi-id-card',
        visible: false
      }
    ];
  }

  ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close();
    }
  }
}
