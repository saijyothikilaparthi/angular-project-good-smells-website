import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attartypes',
  templateUrl: './attartypes.component.html',
  styleUrls: ['./attartypes.component.css']
})
export class AttartypesComponent {
constructor(private router:Router){}
  onclick1(){
    this.router.navigate(['/attar1'])
  }
  onclick2(){
    this.router.navigate(['/attar2'])
  }
  onclick3(){
    this.router.navigate(['/attar3'])
  }

}
