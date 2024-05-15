import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-bai1',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterOutlet],
  templateUrl: './bai1.component.html',
  styleUrls: ['./bai1.component.css']
})
export class Bai1Component {
  services: any[] = [{
    name: 'Chocolate freeze',
    price: 69,
    active: true
  }, {
    name: 'Phindi Hạnh Nhân',
    price: 50,
    active: false
  }, {
    name: 'Cà Phê Sữa',
    price: 40,
    active: false
  }, {
    name: 'Trà Sen Vàng',
    price: 40,
    active: false
  }
  ]
  Total() {
    let total = 0;
    for (let i = 0; i < this.services.length; i++) {
      if (this.services[i].active) {
        total += this.services[i].price;
      }
    }
    return total;
  }
  Check_Active(item: any) {
    item.active = !item.active;
  }
}
