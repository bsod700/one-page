import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';
import { CtaComponent } from '../cta/cta.component';
import { LogoInterface } from '../../interfaces/logo.interface';
import { CtaInterface } from '../../interfaces/cta.interface';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LogoComponent, CtaComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() navbarConfig!: {
    logoConfig: LogoInterface,
    ctaConfig: CtaInterface
  }
}
