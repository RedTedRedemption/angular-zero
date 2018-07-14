import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabContentComponent } from './tab-content/tab-content.component';
import { Tab2ContentComponent } from './tab2-content/tab2-content.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';

const routes: Routes = [
{ path: '', component: TabContentComponent },
{ path: 'tab2', component: Tab2ContentComponent },
{ path: 'person-detail', component: PersonDetailComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}


