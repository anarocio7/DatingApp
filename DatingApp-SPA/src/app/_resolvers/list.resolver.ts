import { Injectable } from "@angular/core";
import { AlertifyService } from '../_services/alertify.service';
import { UserService } from '../_services/user.service';
import { User } from '../_models/user.interface';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Basically, a Resolver acts like middleware,
// which can be executed before a component is loaded

@Injectable()
export class ListResolver implements Resolve<User[]>{
  pageNumber = 1;
  pageSize = 5;
  likesParam = 'Likers';

  constructor(private alertifyService: AlertifyService,
              private userService: UserService,
              private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
    return this.userService.getUsers(this.pageNumber, this.pageSize, null, this.likesParam).pipe(
      catchError(error => {
        this.alertifyService.error('There is no retrieving data');
        this.router.navigate(['/home']);
        return of(null);
      })
    )
  }
}
