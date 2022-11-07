import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyectos-dash',
  templateUrl: './proyectos-dash.component.html',
  styleUrls: ['./proyectos-dash.component.css']
})
export class ProyectosDashComponent implements OnInit {

  miPortfolio:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPortfolio = data
    });
  }

}
