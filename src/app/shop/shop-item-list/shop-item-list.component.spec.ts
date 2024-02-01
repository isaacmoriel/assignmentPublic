/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import SpyObj = jasmine.SpyObj;

import { ShopItemListComponent } from './shop-item-list.component';
import { WebAPIService } from '../../services/webAPI.service';
import { ToolbarService } from '../../services/toolbar.service';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { SharedModule } from '../../shared/shared.module';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';

describe('ShopItemListComponent', () => {
  let component: ShopItemListComponent;
  let fixture: ComponentFixture<ShopItemListComponent>;
  //let webApiService: SpyObj<WebAPIService>;
  // let toolbarService: SpyObj<MatCardModule>;
  // let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopItemListComponent ],
      imports:[MatCardModule,
        MatIconModule,
        MatDividerModule,
        MatListModule,
        MatBadgeModule],
      providers:[WebAPIService,
        ToolbarService,
        Router
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopItemListComponent);
    //webApiService = createSpyObj('webService', ['getItemList']);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


