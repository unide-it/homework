import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { NotesService } from "../../services/notes-service";
import { map } from "rxjs/operators";

@Injectable()
export class HttpLoadingInterceptor implements HttpInterceptor {

  constructor(private noteService: NotesService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.noteService.changeLoadingStatus(true);
    return next.handle(request)
      .pipe(
        map( (event :HttpEvent<any>)=> {
          if(event instanceof HttpResponse){
            if(event.body === null || event.body.next === null){
              this.noteService.changeLoadingStatus(false);
            }
          }
          return event
        }),
        catchError( (err) => {
          this.noteService.changeLoadingStatus(false);
          throw err
        })
      )
  }

}
