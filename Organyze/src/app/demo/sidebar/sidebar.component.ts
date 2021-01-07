import { Component, HostBinding } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectLayoutSidebarExpanded } from '../../state/layout/layout.selectors';
import { layoutSidebarExpandedChanged } from '../../state/layout/layout.actions';

@Component({
  selector: 'org-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
})
export class SidebarComponent {

  @HostBinding('class.expanded') public expanded = false;
  public expanded$: Observable<boolean>;
  public orgList: string[];

  // TODO: show only icons when collapsed, show icons and name when expanded
  constructor(private store: Store) {
    this.expanded$ = this.store.select(selectLayoutSidebarExpanded);
    // TODO: make org list { name: string, img: string }[];
    // [
    //   { name: 'org1', img: '/assets/img/profile.png' }
    // ]
    this.orgList = [
      'Org1',
      'Org2',
      'Org3',
      'Org4',
      'Org5',
      'Org6',
      'Org7',
      'Org8',
      'Org9',
      'Org10',
      'Org11',
      'Org12',
      'Org13',
      'Org14',
      'Org15',
      'Org16',
      'Org17',
      'Org18',
      'Org19',
      'Org20',
    ];
  }

  public toggleExpanded(): void {
    this.expanded = !this.expanded;
    this.store.dispatch(layoutSidebarExpandedChanged({ expanded: this.expanded }));
  }

}
