import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-inscription-covid',
  templateUrl: './inscription-covid.component.html',
  styleUrls: ['./inscription-covid.component.scss']
})
export class InscriptionCovidComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //constructor(private _snackBar: MatSnackBar) {}
/*
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000, 
    });
  }
*/
}
