import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-greetings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './greetings.component.html',
  styleUrl: './greetings.component.css'
})
export class GreetingsComponent {

}
