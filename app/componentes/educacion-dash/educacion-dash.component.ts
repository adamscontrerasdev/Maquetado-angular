import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion-dash',
  templateUrl: './educacion-dash.component.html',
  styleUrls: ['./educacion-dash.component.css']
})
export class EducacionDashComponent implements OnInit {

  educacionList:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.educacionList = data.educacion;
    });
  }
}
