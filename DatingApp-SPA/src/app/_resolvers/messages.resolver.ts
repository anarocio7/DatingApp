import { Injectable } from "@angular/core";
import { AlertifyService } from '../_services/alertify.service';
import { UserService } from '../_services/user.service';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Message } from '../_models/message.interface';
import { AuthService } from '../_services/auth.service';

// Basically, a Resolver acts like middleware,
// which can be executed before a component is loaded

@Injectable()
export class MessagesResolver implements Resolve<Message[]> {
  pageNumber = 1;
  pageSize = 5;
  messageContainer = 'Unread';

  constructor(private alertifyService: AlertifyService,
              private userService: UserService,
              private authService: AuthService,
              private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Message[]> {
    return this.userService.getMessages(this.authService.decodedToken.nameid, this.pageNumber, this.pageSize, this.messageContainer).pipe(
      catchError(error => {
        this.alertifyService.error('There is no retrieving messages');
        this.router.navigate(['/home']);
        return of(null);
      })
    )
  }
}
