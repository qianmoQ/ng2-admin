/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {NgModule} from '@angular/core';
import {LayoutRouting} from './layout.routing';

import {LayoutComponent} from './layout.component';

import {PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ButtonsModule} from 'ngx-bootstrap';
import {HeaderComponent} from './header/header.component';
import {NavigationTriggerComponent} from './header/navigation-trigger/navigation-trigger.component';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        NavigationTriggerComponent
    ],
    imports: [
        CommonModule,
        LayoutRouting,
        FormsModule,
        BsDropdownModule.forRoot(),
        ButtonsModule.forRoot(),
        PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG)
    ]
})

export class LayoutModule {
}
