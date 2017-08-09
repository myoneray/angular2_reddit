import { NgModule, Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute, Router, Routes} from '@angular/router';


/*
 * Components
 */

import { MainComponent } from './main/main.component';
import { InterestComponent } from './interest/interest.component';
import { SportifyComponent } from './sportify/sportify.component';
import { ByIdComponent } from './by-id/by-id.component';
import { BooksComponent } from './books/books.component';
import { PhoneComponent } from './phone/phone.component';
import { ComputerComponent } from './computer/computer.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  goToProduct(id: string): void {
    this.router.navigate(['./', id], { relativeTo: this.route });
  }

  ngOnInit() {
    console.log('ProductsComponent')
  }

}


//定义routes常量
export const routes: Routes = [
  //设置空的path,为了在访问：/products时重定向到main路由上。
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  // 当用户访问不存在的路由时，此路由就会垫底，/后的传递过来的一切就会当做路由参数
  { path: 'main', component: MainComponent },
  { path: 'interest', component: InterestComponent },
  { path: 'sportify', component: SportifyComponent },
  { path: 'book', component: BooksComponent },
  { path: 'phone', component: PhoneComponent },
  { path: ':id', component: ByIdComponent },
  { path: 'computer', component: ComputerComponent }
];

@NgModule({
  declarations: [
    ProductsComponent,
    MainComponent,
    InterestComponent,
    SportifyComponent,
    ByIdComponent,
    BooksComponent,
    PhoneComponent,
    ComputerComponent
  ],
  exports: [
    ProductsComponent,
    MainComponent,
    InterestComponent,
    SportifyComponent,
    ByIdComponent,
    BooksComponent,
    PhoneComponent,
    ComputerComponent
  ],
  imports: [RouterModule]
})

export class ProductsComponentModule { }
