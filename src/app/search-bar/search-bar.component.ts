import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  description = "";

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  productSearch() {
    if(this.description) {
      this.router.navigate(["produtos"], {queryParams: { description: this.description }});
      return;
    }
    else {
      this.router.navigate(["produtos"]);
    }
  }

}
