import {Component, OnInit, Input, Output, ViewChild, ElementRef, EventEmitter} from '@angular/core';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import {MatDialog} from '@angular/material';
import * as _ from 'lodash';

import {DeleteDomainDialogComponent} from '../../../dialogs/delete-domain-dialog/delete-domain-dialog.component';
import {CrawlerDialogComponent} from '../../../dialogs/crawler-dialog/crawler-dialog.component';
import {ActivatedRoute} from '@angular/router';
import {GetService} from '../../../services/get.service';

@Component({
  selector: 'app-list-of-domains',
  templateUrl: './list-of-domains.component.html',
  styleUrls: ['./list-of-domains.component.css']
})
export class ListOfDomainsComponent implements OnInit {

  @Output('deleteDomain') deleteDomain = new EventEmitter<number>();
  @Input('domains') domains: Array<any>;

  displayedColumns = [
    //'DomainId',
    'Url',
    'Active',
    //'User',
    'Pages',
    'Start_Date',
    'End_Date',
    //'delete',
    //'see'
  ];

  user: string;

  dataSource: any;
  selection: any;

  @ViewChild('input') input: ElementRef;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dialog: MatDialog,
              private activatedRoute: ActivatedRoute,
              private get: GetService) {
    this.activatedRoute.params.subscribe(params => {
      this.user = _.trim(params.user);
      console.log(this.user);
      if (this.user !== '') {
        this.displayedColumns = [
          'Url',
          'Active',
          'Pages',
          'Start_Date',
          'End_Date',
          'delete'
        ];
      }
    });
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.domains);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string): void {
    filterValue = _.trim(filterValue);
    filterValue = _.toLower(filterValue);
    this.dataSource.filter = filterValue;
  }

  openDeleteDomainDialog(domainId: number): void {
    const deleteDialog = this.dialog.open(DeleteDomainDialogComponent, {
      width: '60vw',
      disableClose: false,
      hasBackdrop: true
    });

    deleteDialog.afterClosed()
      .subscribe(result => {
        if (result) {
          this.deleteDomain.next(domainId);
        }
      });
  }

  openCrawlerDialog(e, url, domainId): void {
    e.preventDefault();

    this.dialog.open(CrawlerDialogComponent, {
      width: '60vw',
      disableClose: false,
      hasBackdrop: true,
      data: {url, domainId}
    });
  }
}
