import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bai4',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bai4.component.html',
  styleUrls: ['./bai4.component.css']
})
export class Bai4Component {
  allSelected: boolean = false;
  choice: any | undefined;
  filter: any ;
  filteredSanpham: any[] = [];
  soluong: { [key: number]: number } = {}; // Store quantity for each product
  selectedProducts: { [key: string]: boolean } = {}; // Store checkbox state for each product
  tongtien: number = 0;
  sanpham: any[] = [
    { hanghoa: 'iPhone9', dongia: 700, soluong: 0, active: false },
    { hanghoa: 'Samsung', dongia: 400, soluong: 0, active: false },
    { hanghoa: 'Nokia', dongia: 100, soluong: 0, active: false },
    { hanghoa: 'Sony Xperia', dongia: 450, soluong: 0, active: false },
    { hanghoa: 'Motorola', dongia: 180, soluong: 0, active: false },
    { hanghoa: 'Oppo', dongia: 600, soluong: 0, active: false },
    { hanghoa: 'bPhone', dongia: 90, soluong: 0, active: false }
  ];


  filterprice() {
    if (this.choice == undefined || this.choice == 0 || this.choice == "Mức giá") {
      return this.filteredSanpham = this.sanpham;
    } else if (this.choice < 200) {
      return this.filteredSanpham = this.sanpham.filter(item => item.dongia < 200);
    } else if (this.choice > 500) {
      return this.filteredSanpham = this.sanpham.filter(item => item.dongia > 500);
    } else {
      return this.filteredSanpham = this.sanpham.filter(item => item.dongia >= 200 && item.dongia <= 500);
    }
  }

  filterProducts() {
    this.choice = this.filter;
    this.filterprice();
    this.calculateTotal();
  }

  calculateTotal() {
    this.tongtien = this.filteredSanpham.reduce((acc, item, index) => {
      if (this.selectedProducts[item.hanghoa]) {
        const quantity = this.soluong[index] || 0;
        return acc + (item.dongia * quantity);
      }
      return acc;
    }, 0);
  }

  onQuantityChange(index: number, event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.soluong[index] = parseInt(inputElement.value, 10) || 0;
    this.calculateTotal();
  }

  onCheckboxChange(item: any, event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.selectedProducts[item.hanghoa] = inputElement.checked;
    this.calculateTotal();
  }

  toggleSelectAll(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.allSelected = inputElement.checked;
    this.filteredSanpham.forEach(item => {
      this.selectedProducts[item.hanghoa] = this.allSelected;
    });
    this.calculateTotal();
  }
}
