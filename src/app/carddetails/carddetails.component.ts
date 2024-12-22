import { Component } from '@angular/core';
import { CardsService } from '../services/cards.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carddetails',
  templateUrl: './carddetails.component.html',
  styleUrls: ['./carddetails.component.css']
})
export class CarddetailsComponent {
  card: any
  constructor(private service: CardsService,private route:ActivatedRoute) { }
  ngOnInit(): void {
    const id=Number(this.route.snapshot.paramMap.get('id'))
    this.service.getdetails().subscribe(data => { this.card = data.find(c=>c.id ===id) })
  }
}
