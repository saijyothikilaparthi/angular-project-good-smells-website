import { Component } from '@angular/core';
import { Cards } from 'src/app/models/cards';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-attarinfo',
  templateUrl: './attarinfo.component.html',
  styleUrls: ['./attarinfo.component.css']
})
export class AttarinfoComponent {
details:Cards[]=[];
constructor(private service:CardsService){}
ngOnInit():void{
  this.cinfo()
}
cinfo(){
this.service.getdetails().subscribe(data=>this.details=data)
}

}
