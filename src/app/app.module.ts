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
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from "./services/api-service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NoteCardComponent,
    NoteFormComponent,
    NoteListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule],
  providers: [
    ApiService,
    NotesService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
