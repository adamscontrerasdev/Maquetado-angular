import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia-dash',
  templateUrl: './experiencia-dash.component.html',
  styleUrls: ['./experiencia-dash.component.css']
})
export class ExperienciaDashComponent implements OnInit {

  miPortfolio:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPortfolio = data.experiencia;
    });
  }
}
