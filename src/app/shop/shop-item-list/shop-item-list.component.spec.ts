/* tslint:disable:no-unused-variable */
import {  ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopItemListComponent } from './shop-item-list.component';
import { WebAPIService } from '../../services/webAPI.service';
import { ToolbarService } from '../../services/toolbar.service';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { ShopItem } from '../../Models/ShopItem';

describe('ShopItemListComponent', () => {
  let component: ShopItemListComponent;
  let fixture: ComponentFixture<ShopItemListComponent>;
  //create spy to detect when navigate its called
  let router = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopItemListComponent ],
      imports:[MatCardModule,
        MatIconModule,
        MatDividerModule,
        MatListModule,
        MatBadgeModule],
      providers:[WebAPIService,
        ToolbarService,
        { provide: Router, useValue: router }

      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    
    fixture = TestBed.createComponent(ShopItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should throw error', () =>{

    let item: ShopItem = {Id:1,Name:'Mocked',Description:'mocked',Price:0,Image:''};
    component.cafeList = [item];
    expect(() => component.navigateToDetails({Id:0,Name:'',Description:'',Price:0,Image:''})).toThrow();

  });

  it('should route', () =>{
    let item: ShopItem = {Id:1,Name:'Mocked',Description:'mocked',Price:0,Image:''};
    component.cafeList = [item];
    component.navigateToDetails(item);
    expect(router.navigate).toHaveBeenCalled();
    
  });
});


