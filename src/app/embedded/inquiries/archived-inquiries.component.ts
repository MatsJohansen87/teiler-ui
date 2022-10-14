import {Component} from '@angular/core';
import {InquiriesComponent, InquiriesTableItem, InquiriesTableItemElement} from "./inquiries.component";


@Component({
  selector: 'archived-inquiries',
  templateUrl: './inquiries.component.html',
  styleUrls: ['./inquiries.component.css']
})
export class ArchivedInquiriesComponent extends InquiriesComponent{

  constructor() {
    super();
  }

  fetchInquiriesTableItems(): InquiriesTableItem[]{
    //TODO
    return [];
  }
  getInquiriesTableItemElementToDisplay(): InquiriesTableItemElement[]{
    return [
      InquiriesTableItemElement.NAME,
      InquiriesTableItemElement.LOOKING_FOR,
      InquiriesTableItemElement.RECEIVED_AT,
      InquiriesTableItemElement.ARCHIVED_AT
    ];
  };

}
