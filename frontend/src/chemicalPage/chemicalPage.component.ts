import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { baseUrl } from '../config';
import { CommonModule } from '@angular/common';
import { Chemical } from '../chemical';

@Component({
  selector: 'app-detailpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chemicalPage.component.html',
  styleUrl: './chemicalPage.component.scss',
})
export class ChemicalpageComponent implements OnInit {
  id: string = '';
  chemical: Chemical = {
    id: 0,
    compoundName: '',
    strImageSource: '',
    compoundDesc: '',
    strImageAttribution: ''
  };

  constructor(private route: ActivatedRoute, private http: HttpClient) {}  

  ngOnInit() {
    this.route.params.subscribe((params) => {  
      this.id = params['id'];
    });
    this.http
      .get(`${baseUrl}/${this.id}`)
      .subscribe((data) => {
        this.chemical = data as Chemical;
      });
  }

  deleteChemical() {
    this.http
      .delete(`${baseUrl}/${this.id}`)
      .subscribe((data) => {
        window.location.href = '/';
      });
  }
  updateChemical() {
    this.chemical.compoundName=prompt('Edit Chemical Name') || this.chemical.compoundName;
    this.chemical.compoundDesc=prompt('Edit Chemical Description') || this.chemical.compoundDesc;

    this.http
      .put(`${baseUrl}/${this.id}`, this.chemical)
      .subscribe((data) => {});
  }
}