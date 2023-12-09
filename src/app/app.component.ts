import { AfterViewInit,Component, ViewChild } from '@angular/core';
import { PostListComponent } from './post-list/post-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements AfterViewInit {
  title = 'angular-demo';
  
  appVar : string = 'hello from app to post-list';

  @ViewChild(PostListComponent)  childComp! : PostListComponent ;

  constructor(){
    console.log("constructor",this.childComp);
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit",this.childComp);
  }
}
