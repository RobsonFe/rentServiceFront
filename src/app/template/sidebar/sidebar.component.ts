import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  anoAtual: number = Date.now();

  constructor(){
    this.atualizarAnoAtual();
  }

  atualizarAnoAtual(){
    this.anoAtual = new Date().getFullYear();
  }
}
