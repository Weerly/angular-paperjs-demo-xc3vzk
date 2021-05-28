import { Component } from '@angular/core';
import { Project, Path } from 'paper';
import * as paper from 'paper';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  ngOnInit() {
    //window['paper'] = paper;
    // console.log('paper', paper.Project);

    const project1 = new Project('cv1');
    const path = new Path.Circle({
      center: [80, 50],
      radius: 30,
      strokeColor: 'black'
    });

    // const project2 = new Project('cv2');
  }
}
