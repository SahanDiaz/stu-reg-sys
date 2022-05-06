import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminAddStuComponent } from './components/admin-add-stu/admin-add-stu.component';
import { AdminViewStuComponent } from './components/admin-view-stu/admin-view-stu.component';
import { StuLoginComponent } from './components/stu-login/stu-login.component';
import { StuPanelComponent } from './components/stu-panel/stu-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AdminLoginComponent,
    AdminPanelComponent,
    AdminAddStuComponent,
    AdminViewStuComponent,
    StuLoginComponent,
    StuPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
