import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css',
  providers: [HttpClient]
})
export class EditarComponent implements OnInit {


  constructor(){}

  ngOnInit(): void {

  }


}
