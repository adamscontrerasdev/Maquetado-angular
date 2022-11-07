import { Component, OnInit } from '@angular/core';
import { CargarScriptsService} from "./../../cargar-scripts.service"

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private _cargaScript:CargarScriptsService) {
    _cargaScript.Carga(["modal"]);
  }

  ngOnInit(): void {
  }

}
