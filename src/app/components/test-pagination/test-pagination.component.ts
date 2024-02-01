import { Component , OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-test-pagination',
  standalone: true,
  imports: [ BrowserModule,
    NgxPaginationModule
    ],
  templateUrl: './test-pagination.component.html',
  styleUrl: './test-pagination.component.css'
})
export class TestPaginationComponent implements OnInit{
  items : Array<any>;
  pageOfItems: Array<any>;


    constructor() {
        this.pageOfItems = [];
        this.items = [];
     }

    ngOnInit() {
        // an example array of 150 items to be paged
        this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));


    }

    onChangePage(pageOfItems: Array<any>) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    }
}
