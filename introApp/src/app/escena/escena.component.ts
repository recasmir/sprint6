import { preserveWhitespacesDefault } from '@angular/compiler';

import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})

export class EscenaComponent implements OnInit {
  
  @Input() textosEscena:string[]=[];
  
  currentSentence: number = 0;

  
  prev(){
    if(this.currentSentence>0){
      this.currentSentence--;
    }
  }
  next(){
    if(this.currentSentence<3){
      this.currentSentence++;
    }
  }

  constructor() {
 
   }

  ngOnInit(): void {
  }

}