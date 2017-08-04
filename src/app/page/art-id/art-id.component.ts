import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-art-id',
  templateUrl: './art-id.component.html',
  styleUrls: ['./art-id.component.css']
})
export class ArtIdComponent implements OnInit {
  id: string;
  constructor(private router: ActivatedRoute) {
    router.params.subscribe(params => {
      this.id = params['id'];
      console.log('接受的参数是:', this.id);
    });
  }


  ngOnInit() {
  }

}
