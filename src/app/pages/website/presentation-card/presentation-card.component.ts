import { Component, OnInit,Input, OnDestroy, ChangeDetectorRef,ChangeDetectionStrategy, ViewChild, AfterViewInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';


import { MatTableDataSource } from '@angular/material/table';

import { ThrowStmt } from '@angular/compiler';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
//import { EvaluationService } from '../../services/evaluation.service';
interface element{
  uri: string;
  roles: string[];
  tags: string[];
}
interface tablevalue{
  uri:string;
  presentation: number;
}

@Component({
    selector: 'app-presentation-card',
    templateUrl: './presentation-card.component.html',
    styleUrls: ['./presentation-card.component.css']
  })
  export class PresentationCardComponent implements OnInit, OnDestroy ,AfterViewInit {
    @Input("dataSourceO") dataSourceO: Array<any>;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    auxdataSource : tablevalue[] =[];
    dataSource: any;
    displayedColumns: string[];
    tags: string[];
    obj : element[] = [];
    auxR: string;
    auxT: string;
    presentation: string;
    auxn: number;
    auxf: string;
    auxg: string[]
    constructor() {
      }
    ngOnInit():void{
      this.displayedColumns = ['Uri', 'Presentation'];
      for(let i = 0; i<=(this.dataSourceO.length-1); i++){
          this.obj.push({uri:"",roles:[],tags:[]})
      }
      this.presentation = "presentation";    
  }

  ngAfterViewInit():void{

    //colocar os valores dentro do obj
    for(let i = 0; i<=(this.dataSourceO.length-1); i++){
      this.obj[i].uri = this.dataSourceO[i].Uri;
      this.auxR =this.dataSourceO[i].Element_Count.slice(1,-1); 
      this.obj[i].roles = this.auxR.split(",");
      this.auxT = this.dataSourceO[i].Tag_Count.slice(1,-1);
      this.obj[i].tags = this.auxT.split(",");
  }
 
  for(let g = 0; g<= (this.obj.length-1);g ++){
  for (let j = 0; j<=(this.obj[g].roles.length-1); j++){
      if((this.obj[g].roles[j]).includes(this.presentation) === true && (this.auxdataSource.length-1) === g){
        this.auxdataSource.push({uri:"",presentation:0});
        this.auxn = j;
        this.auxdataSource[g].uri = this.obj[g].uri; 
        this.auxf = this.obj[g].roles[j];
        this.auxg = this.auxf.split(":");
        this.auxdataSource[g].presentation = parseInt(this.auxg[1]);
      }
      else if((this.obj[g].roles[j]).includes(this.presentation) === true && (this.auxdataSource.length-1) < g){
        this.auxdataSource.push({uri:"",presentation:0});
        let f =(this.auxdataSource.length-1);
        this.auxn = j;
        this.auxdataSource[f].uri = this.obj[g].uri; 
        this.auxf = this.obj[g].roles[j];
        this.auxg = this.auxf.split(":");
        this.auxdataSource[f].presentation = parseInt(this.auxg[1]);
      }
  }


  }
  let compareTotal = function (a:tablevalue,b: tablevalue){
    if (a.presentation > b.presentation){
    return -1;

    }
    if(a.presentation < b.presentation){
      return 1;

    }
    if (a.presentation === b.presentation){
      return 0;
    
    }
  
}   
    let sortedArray = this.auxdataSource.sort(compareTotal);


  this.dataSource = new MatTableDataSource (sortedArray);
  if(this.dataSource !== null && this.dataSource !== undefined){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
 
  ngOnDestroy():void{
       
    }

  }