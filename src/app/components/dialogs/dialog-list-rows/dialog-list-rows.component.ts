import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-list-rows',
  standalone: true,
  imports: [HttpClientModule, CommonModule, MatDialogActions, MatDialogContent, MatDialogTitle, MatDialogClose],
  templateUrl: './dialog-list-rows.component.html',
  styleUrl: './dialog-list-rows.component.css'
})
export class DialogListRowsComponent {
  public values: any[] = [];

  constructor(private httpClient: HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.httpClient.get(`http://localhost:5071/api/reports/get-values/${this.data.type}`).subscribe((response: any) => {
      this.values = response;
    });
  }
}
