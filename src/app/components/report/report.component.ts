import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogListRowsComponent } from '../dialogs/dialog-list-rows/dialog-list-rows.component';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [HttpClientModule, CommonModule, MatDialogModule],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {
  public report = {
    inheritance: 0,
    linesOfCode: 0,
    classCoupling: 0
  };

  constructor(private httpClient: HttpClient, private dialog: MatDialog) {
    this.getDepthOfInheritance();
    this.getLinesOfCode();
    this.getClassCoupling();
  }

  getDepthOfInheritance(): void {
    this.httpClient.get('http://localhost:5071/api/reports/depth-inheritance').subscribe((value: any) => {
      this.report.inheritance = value;
    });
  }

  getLinesOfCode(): void {
    this.httpClient.get('http://localhost:5071/api/reports/lines-code').subscribe((value: any) => {
      this.report.linesOfCode = value;
    });
  }

  getClassCoupling(): void {
    this.httpClient.get('http://localhost:5071/api/reports/class-coupling').subscribe((value: any) => {
      this.report.classCoupling = value;
    });
  }

  listValues(type: string): void {
    this.dialog.open(DialogListRowsComponent, {
      width: '980px',
      data: {
        type
      }
    });
  }
}
