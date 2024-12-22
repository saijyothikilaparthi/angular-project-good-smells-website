import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfumetypes',
  templateUrl: './perfumetypes.component.html',
  styleUrls: ['./perfumetypes.component.css']
})
export class PerfumetypesComponent {
constructor(private router:Router){}
  onclick1(){
    this.router.navigate(['/perfume1'])
  }
  onclick2(){
    this.router.navigate(['/perfume2'])
  }
  onclick3(){
    this.router.navigate(['/perfume3'])
  }

}
