import { Component, OnInit } from '@angular/core';
import { ProductList} from '../../data/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products=ProductList;
  constructor(private _activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activateRoute.params.subscribe(param=>{
      console.log(param)
      let Id=param["Id"];
      if(Id!=null)
      this.products=ProductList.filter(item=>{
        return item.CatId==Id
      })
    })
  }

}
