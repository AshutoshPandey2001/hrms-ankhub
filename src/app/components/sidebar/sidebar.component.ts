import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MAIN_ROUTES } from 'app/shared/route.interface';
declare const $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  displaySublist=false;
  selectedMenu: any;
  lastURL: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = MAIN_ROUTES.filter(menuItem => menuItem.display);
    let currentOpenMenu = this.router.url.split('/')[1];
    let currentOpenSubMenu = this.router.url.split('/')[2];
    
    console.log('this.currentOpenMenu', currentOpenMenu)
    console.log('currentOpenSubMenu', currentOpenSubMenu)
    this.menuItems.forEach(menuItem => {
      if(menuItem.path===currentOpenMenu){
        menuItem.showChildren=true;
      }
    });

  }
  
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };

  openSubMenu(menuItem){
    this.selectedMenu=menuItem;
    this.lastURL = this.router.url.split('/')[1];
    if(this.lastURL === menuItem.path ){
      menuItem.showChildren=!menuItem.showChildren;
    }else{
      this.menuItems.forEach(menuItem => menuItem.showChildren=false);
      menuItem.showChildren=!menuItem.showChildren;
    }
  }
}
