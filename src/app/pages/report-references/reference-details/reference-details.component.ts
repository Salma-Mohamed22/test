import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reference-details',
  templateUrl: './reference-details.component.html',
  styleUrls: ['./reference-details.component.css']
})
export class ReferenceDetailsComponent implements OnInit {
 
  // reportNo:string|null = ''
  // constructor(private route:ActivatedRoute){ }
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      const reportNo = params.get('reportNo');
      console.log(reportNo);
    });
  }
  ngOnInit(): void {
  
  }

}
