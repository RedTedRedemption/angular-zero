import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabHolderComponent } from './tab-holder/tab-holder.component';
import { TabContentComponent } from './tab-content/tab-content.component';
import { AppRoutingModule } from './/app-routing.module';
import { Tab2ContentComponent } from './tab2-content/tab2-content.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TabHolderComponent,
    TabContentComponent,
    Tab2ContentComponent,
    PersonDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
