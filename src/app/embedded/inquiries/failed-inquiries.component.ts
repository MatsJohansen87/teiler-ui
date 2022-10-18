import {Component} from '@angular/core';
import {InquiriesComponent, InquiriesTableItemColumn} from "./inquiries.component";
import {FailedInquiriesService} from "../../teiler/failed-inquiries.service";
import {Router} from "@angular/router";


@Component({
  selector: 'failed-inquiries',
  templateUrl: './inquiries.component.html',
  styleUrls: ['./inquiries.component.css']
})
export class FailedInquiriesComponent extends InquiriesComponent{

  constructor(failedInquiriesService: FailedInquiriesService, router: Router) {
    super(failedInquiriesService, router);
  }

  getInquiriesTableItemColumnsToDisplay(): InquiriesTableItemColumn[]{
    return [
      InquiriesTableItemColumn.NAME,
      InquiriesTableItemColumn.LOOKING_FOR,
      InquiriesTableItemColumn.RECEIVED_AT,
      InquiriesTableItemColumn.ERROR_CODE,
      InquiriesTableItemColumn.AS_OF
    ];
  };

  getTitel(): string {
    return "Fehlerhafte Suchanfragen";
  }

}
