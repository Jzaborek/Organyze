import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesService } from './state/employees/employees.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AppReducer } from './state/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './state/app.effects';
import { SidebarComponent } from './demo/sidebar/sidebar.component';
import { OrgButtonDirective } from './demo/common/directives/org-button/org-button.directive';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { OrgInputDirective } from './demo/common/directives/org-input/org-input.directive';

@NgModule({
  declarations: [
    // Components
    AppComponent,
    EmployeeComponent,
    CreateEmployeeComponent,
    SidebarComponent,
    // Directives
    OrgButtonDirective,
    OrgInputDirective,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    EffectsModule.forRoot(AppEffects),
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(AppReducer),
    FontAwesomeModule,
  ],
  providers: [
    EmployeesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faBars, faTimes);
  }
}
