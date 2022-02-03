import { EscenaComponent } from './../escena/escena.component';
import { Component, Input, OnInit} from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {


public textos: string[]=[

  "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial.",

  "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",

  "L'heroi va decidir travessar la porta que el portava a casa.",

  "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció..."

]

@Input() currentSentence:number=0;

historia: boolean=false;
start:boolean=true;

iniciarHistoria(){
this.historia=true;
this.start=false;
}

  constructor() { }

  ngOnInit(): void {
  }

}



