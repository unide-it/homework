import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { NoteFormComponent } from './components/note-form/note-form.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { HeaderComponent } from './components/header/header.component';
import { NotesService } from './services/notes-service';
import {HttpClientService} from './services/http-client.service';
import {ApiService} from './services/api-service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NoteCardComponent,
    NoteFormComponent,
    NoteListComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [NotesService, HttpClientService, ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
