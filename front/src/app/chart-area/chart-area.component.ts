import { Component, OnInit } from '@angular/core';
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
  styleUrls: ['./chart-area.component.scss']
})

export class ChartAreaComponent implements OnInit {

   commitData:commitI[]=[
    {id:1, name: "init commit", discribe:"", autor: "Viktor Amogus"},
    {id:2, name: "add schema ship", discribe:"schema Krarov", autor: "Denis Abobus"}

  ];

  constructor() { }

  ngOnInit(): void {
    const svg = d3.select('.graph-start')

    svg.append('rect')
    .style('width', "100px")
    .style('height', "20px")
    .attr('x', '50%')
    .attr('fill', "#673ab7" )
    .attr('stroke', "#673ab7" )
  
    svg.append("line")
    .attr("x1",'calc(50% + 50px)')  
    .attr("y1",20)  
    .attr("x2",'calc(50% + 50px)')  
    .attr("y2",70)  
    .attr("stroke","#673ab7")  
    .attr("stroke-width",1.3)  
    .attr("marker-end","url(#arrow)")
  }


}
