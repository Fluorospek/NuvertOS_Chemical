import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { baseUrl, rowPerPage } from '../config';
import { Chemical } from '../chemical';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    HttpClientModule,
    CardComponent,
    CommonModule,
    RouterLink,
    MatToolbarModule
  ],
  templateUrl: './homePage.component.html',
  styleUrl: './homePage.component.scss',
})
export class HomepageComponent implements OnInit {
  rows: Chemical[] = []; 
  rowPerPage: number = rowPerPage;
  currPage: number = 0;
  totalPages: number = 0; 
  httpClient= inject(HttpClient);

  ngOnInit(): void  {
    this.httpClient
      .get<Chemical[]>(`${baseUrl}`)
      .subscribe((data ) => { 
        console.log(data);
        this.rows = data;
        this.totalPages = Math.ceil(this.rows.length / this.rowPerPage) - 1;
      });
  }

 
}