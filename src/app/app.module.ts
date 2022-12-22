import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './Home/home.component';
import { LoginComponent } from './Login/login.component';
import { RegisterComponent } from './register/register.component';
import {CardModule} from 'primeng/card';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import { ChipModule } from 'primeng/chip';
import {DividerModule} from 'primeng/divider';
import { ShowMoviesComponent } from './show-movies/show-movies.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RadioButtonModule} from 'primeng/radiobutton';
import { ReviewComponent } from './review/review.component';
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ShowMoviesComponent,
    MovieInfoComponent,
    ReviewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    InputTextModule,
    NgbModule,
    CardModule,
    FormsModule,
    ButtonModule,
    CarouselModule,
    ChipModule,
    DividerModule,
    InputTextareaModule,
    BrowserAnimationsModule,
    RadioButtonModule,
    DialogModule,
    ToastModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
