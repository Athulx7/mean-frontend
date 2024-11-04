import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../Services/service.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  products : any;
  constructor(private rouuter: ActivatedRoute, private apiService: ServiceService) { }
  ngOnInit(): void {
    this.rouuter.params.subscribe((res: any) => {
      const id = res.id
      console.log(id)
      this.getProductByIdNotAPi(id)

    })

  }

  getProductByIdNotAPi(id: any) {
    this.apiService.getProductDetailID(id).subscribe({
      next: (res) => {
        console.log(res)
        this.products = res
      },
      error: (res) => {
        console.log(res)
      }
    })
  }

}
