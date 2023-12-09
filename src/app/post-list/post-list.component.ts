import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {

  postList1 : string = "helloe from post list variable";
  
  @Input() appVarReference! : string;
}
