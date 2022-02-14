import { Component, OnInit } from '@angular/core';
import { zip } from 'rxjs';

@Component({
  selector: 'app-input-nom',
  templateUrl: './input-nom.component.html',
  styleUrls: ['./input-nom.component.css']
})
export class InputNomComponent implements OnInit {
  nom : string = "";
  valideNom : string = "";
  nbValider : number = 0;
  nbTenter: number = 0;
  min : number = 4;
  max : number = 10;
  regex : string = "^[a-zA-Z]{"+this.min+","+this.max+"}$";


  constructor() { }

  ngOnInit(): void {
  }


  addName(){
    this.valideNom = this.nom;
    if (this.nom.match(this.regex)){

      this.nbValider++;
  
    }
    this.nbTenter++;
    this.nom="";
  }
}
