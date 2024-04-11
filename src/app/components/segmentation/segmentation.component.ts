import { Component, OnInit } from '@angular/core';
import { SegmentService } from 'src/app/service/segment.service';

@Component({
  selector: 'app-segmentation',
  templateUrl: './segmentation.component.html',
  styleUrls: ['./segmentation.component.css']
})
export class SegmentationComponent implements OnInit{
  data: any[] = [];
  constructor(private service:SegmentService){}
  ngOnInit(): void {
    this.getData();
  }
  getData(): void {
    this.service.getData().subscribe(data => {
      this.data = data;
      console.log(data)
    });
  }

}
