import { Component, Input, OnInit } from '@angular/core';
import { UserRegistrationService } from '../fetch-api-data.service'
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss']
})
export class UserProfilePageComponent implements OnInit{
  @Input() userData = { Username: '', Password: '', Email: '' };

  constructor(
      public fetchApiData: UserRegistrationService,
      public snackBar: MatSnackBar,
      public router: Router) { }

  ngOnInit(): void {
  }
  updateUser(): void {
    this.fetchApiData.editUser(this.userData).subscribe((result) => {
      // Logic for a successful user registration goes here! (To be implemented)
        localStorage.setItem('user', result.user)
        this.snackBar.open(result, 'Updated User', {
            duration: 2000
        })
    })
  }
}
