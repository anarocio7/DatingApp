import { Injectable } from "@angular/core";
import { AlertifyService } from '../_services/alertify.service';
import { UserService } from '../_services/user.service';
import { User } from '../_models/user.interface';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';

// Basically, a Resolver acts like middleware,
// which can be executed before a component is loaded

@Injectable()
export class MemberEditResolver implements Resolve<User>{
  constructor(private alertifyService: AlertifyService,
              private auth: AuthService,
              private userService: UserService,
              private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    // tslint:disable-next-line:no-string-literal
    return this.userService.getUser(this.auth.decodedToken.nameid).pipe(
      catchError(error => {
        this.alertifyService.error('Problem retrieving data');
        this.router.navigate(['/members']);
        return of(null);
      })
    )
  }
}
