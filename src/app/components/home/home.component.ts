import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@Component ({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule, MatButtonModule, MatDividerModule, MatExpansionModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public menuOpen = false;
  public toggleMenu(event?: Event): void { if (event) event.preventDefault(); this.menuOpen = !this.menuOpen; }
  public closeMenu(): void { this.menuOpen = false; }
  public scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
