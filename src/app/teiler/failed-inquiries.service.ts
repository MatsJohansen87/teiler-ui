import {Injectable} from '@angular/core';
import {EmbeddedTeilerApps} from "./teiler-app";
import {Router} from "@angular/router";
import {InquiriesService} from "./inquiries.service";
import {InquiriesClientService, Inquiry} from "../embedded/inquiries/inquiries-client.service";

@Injectable({
  providedIn: 'root'
})
export class FailedInquiriesService extends InquiriesService{

  description: string = "Failed Inquiries";
  iconClass: string | undefined = "bi bi-exclamation-triangle";
  iconSourceUrl: string | undefined = undefined;
  title: string = "Failed inquiries";

  constructor(router: Router, private inquiriesClientService:InquiriesClientService) {
    super(EmbeddedTeilerApps.FAILED_INQUIRIES, router);
  }

  fetchInquiries(): Inquiry[] {
    return this.inquiriesClientService.getFailedInquiries();
  }

}
