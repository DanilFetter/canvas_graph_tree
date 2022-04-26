import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import * as d3Scale from 'd3';
import * as d3Shape from 'd3';
import * as d3Array from 'd3';
import * as d3Axis from 'd3';

interface commitI{
  id: number;
  name: string;
  discribe: string; 
  autor: string;
} 

@Component({
  selector: 'app-chart-area',
  templateUrl: './chart-area.component.html',
  styleUrls: ['./chart-area.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ChartAreaComponent implements OnInit {

   commitData:commitI[]=[
    {id:1, name: "init commit", discribe:"", autor: "Viktor Amogus"},
    {id:2, name: "add schema ship", discribe:"schema Krarov", autor: "Denis Abobus"}

  ];

  constructor() { }

  ngOnInit(): void {
    const lastpoint = d3.select('.graph-start')
    lastpoint.append('div')
    .attr('class', "commit-block")
    .property('textContent', "start")
  }

  addCommit(commitElem: commitI):void{
    const lastpoint = d3.select('.graph-start')

    lastpoint.append("svg")
    .attr('width', '100px')
    .attr('height', '40px')

    .append('line')
    .attr("x1",'50%')  
    .attr("y1","0%")  
    .attr("x2",'50%')  
    .attr("y2","76%")  
    .attr("stroke","#673ab7")  
    .attr("stroke-width",2)  
    .attr("marker-end","url(#arrow)");  
    

    lastpoint.append('div')
    .attr('class', "commit-block")
    .property('textContent', commitElem.name)
    this.commitCounter();

  }
  
  commitRender(){
    
    let activeCommits = this.commitCounter();
    if( activeCommits < this.commitData.length){
      this.addCommit(this.commitData[activeCommits]);
    }
  }

  commitCounter(){
      return d3.selectAll(".commit-block").size()-1;
  }

}
