import { Component, OnInit } from '@angular/core';
import { faPrescriptionBottleMedical } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  faprescription = faPrescriptionBottleMedical
}
