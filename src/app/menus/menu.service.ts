import { Injectable } from '@angular/core';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menus: Menu[] = [
    { name: 'Trang chủ', url: '/index.html' },
    { name: 'Bài 1', url: '/Lab4_1.html' },
    { name: 'Bài 2', url: '/Lab4_2.html' },
    { name: 'Bài 3', url: '/Lab4_3.html'},
    { name: 'Bài 4', url: '/Lab4_4.html' },
  ];

  constructor() { }

  getMenus(): Menu[] {
    return this.menus;
  }

}
