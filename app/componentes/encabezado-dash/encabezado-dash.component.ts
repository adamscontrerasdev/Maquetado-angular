import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-encabezado-dash',
  templateUrl: './encabezado-dash.component.html',
  styleUrls: ['./encabezado-dash.component.css']
})
export class EncabezadoDashComponent implements OnInit {

  miPortfolio:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPortfolio = data
    });
  }

}
