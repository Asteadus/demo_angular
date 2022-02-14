import { Component, OnInit } from '@angular/core';
import { Chrono } from 'src/app/models/chrono.model';
import { ChronoFormatPipe } from 'src/app/shared/pipes/chrono-format.pipe';

@Component({
  selector: 'app-exo-chrono',
  templateUrl: './exo-chrono.component.html',
  styleUrls: ['./exo-chrono.component.css']
})
export class ExoChronoComponent implements OnInit {

  timeInterval : any ;
  chrono : Chrono = {
    seconde: 0,
    minute: 0,
    };
  
  constructor() { }

  ngOnInit(): void {
  }

  interval(){
    this.timeInterval=setInterval(this.chronoFunc,1000)
  }
  chronoFunc(){
    console.log(this.chrono)
    this.chrono.seconde += 1;

    if (this.chrono.seconde>=60){
      this.chrono.minute++;
      this.chrono.seconde=0;
  }

 }
}
