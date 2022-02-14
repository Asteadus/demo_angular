import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo-binding',
  templateUrl: './demo-binding.component.html',
  styleUrls: ['./demo-binding.component.css']
})
export class DemoBindingComponent implements OnInit {

  nomUser: string = "Aymeric";
  color: string = "blue";



  constructor(private _router: Router) {}


  ngOnInit(): void {
  }

  onClick(param :any){
    console.log(param);
   
  }

  swapColor(){
    this.color = this.color === "blue" ? "red" : "blue";
  }

  alertThenRedirect(){
    alert("Vous allez être redirigé");
    this._router.navigateByUrl('/exo');

    // localhost:4200/produit/2/details
    //this._router.navigate(['produit', 1+1,'details'])
    

  }

}
