import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { User } from 'src/app/_models/user.interface';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/_services/user.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm', {static: true}) editForm: NgForm;
  user: User;
  photoURL: string;

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    // tslint:disable-next-line:semicolon
    if(this.editForm.dirty) {
      $event.returnValue = true;
    }
  }



  constructor(private route: ActivatedRoute,
              private alertify: AlertifyService,
              private userService: UserService,
              private authService: AuthService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      // tslint:disable-next-line:no-string-literal
      this.user = data['user'];
    });
    this.authService.currentPhotoURL.subscribe(photoURL => this.photoURL === photoURL);
  }

  updateUser() {
    this.userService.updateUser(this.authService.decodedToken.nameid, this.user)
      .subscribe(next => {
        this.alertify.success('Profile updated Successfully');
        this.editForm.reset(this.user);
      }, error => {
        this.alertify.error(error);
      });

  }

  updateMainPhoto(photoURL) {
    this.user.photoURL = photoURL;
  }

}
