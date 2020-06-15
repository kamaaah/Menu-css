import { Component, Input, OnInit } from '@angular/core';
import * as M from 'src/assets/js/bootstrap-4.5.0.min.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent implements OnInit {
  elements = {};
  options = {};

 ngOnInit(): void {
  //  this.init();
  }
  
   // navbarOpen = false;
  // klass = 'nav-list';
  // // onclick = false;
  // // title = 'Menu-css';
  // toggleNavbar(){
  //   this.navbarOpen = !this.navbarOpen;
  // }
//   toggleNavbar($event){
//   var nav = document.querySelector('.fas.fa-bars');
// var toggleState = function (elem, one, two) {
//   var elem = document.querySelector(elem);
//   elem.setAttribute('data-state', elem.getAttribute('data-state') === one ? two : one);
// };

// nav.onclick = function (e) {
//   toggleState('.nav ul', 'closed', 'open');
//   e.preventDefault();
// };
//   }
// init(){
//   document.addEventListener('DOMContentLoaded', function () {
//     var elements = document.querySelectorAll('nav-list');
//     var instances = M.List.init(elements, this.options);
//   });
// }
 
}
