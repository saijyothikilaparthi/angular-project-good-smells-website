import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scenttypes',
  templateUrl: './scenttypes.component.html',
  styleUrls: ['./scenttypes.component.css']
})
export class ScenttypesComponent {
constructor(private router:Router){}
  onclick1(){
    this.router.navigate(['/scent1'])
  }
  onclick2(){
    this.router.navigate(['/scent2'])
  }
  onclick3(){
    this.router.navigate(['/scent3'])
  }

}
