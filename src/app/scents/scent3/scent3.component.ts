import { Component } from '@angular/core';
import { Cards } from 'src/app/models/cards';
import { CardsService } from 'src/app/services/cards.service';
import { Scent3Service } from './scent3services/scent3.service';

@Component({
  selector: 'app-scent3',
  templateUrl: './scent3.component.html',
  styleUrls: ['./scent3.component.css']
})
export class Scent3Component {
details:Cards[]=[];
constructor(private service:Scent3Service){}
ngOnInit():void{
  this.cinfo()
}
cinfo(){
this.service.getdetails().subscribe(data=>this.details=data)
}
}
