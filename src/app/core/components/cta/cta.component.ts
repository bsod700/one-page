import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { CtaInterface } from '../../interfaces/cta.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule],
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CtaComponent {
  @Input() ctaConfig!: CtaInterface
}
