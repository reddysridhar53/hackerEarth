import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { searchPipe } from './filters/search.pipe';
import { OrderrByPipe } from './filters/orderBy.pipe'
import { UtilityService } from './services/utils.service';
import { AppComponent } from './components/root/app.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        searchPipe,
        OrderrByPipe
    ],
    providers: [
        UtilityService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
