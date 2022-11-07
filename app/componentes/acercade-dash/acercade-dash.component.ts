import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-acercade-dash',
  templateUrl: './acercade-dash.component.html',
  styleUrls: ['./acercade-dash.component.css']
})
export class AcercadeDashComponent implements OnInit {

  miPortfolio:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPortfolio = data
    });
  }

}
