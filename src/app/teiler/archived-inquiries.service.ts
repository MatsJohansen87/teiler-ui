import { Injectable } from '@angular/core';
import {EmbeddedTeilerApp, EmbeddedTeilerApps, TeilerRole} from "./teiler-app";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ArchivedInquiriesService extends EmbeddedTeilerApp{

  description: string = "Archived inquiries";
  iconClass: string | undefined = "bi bi-archive";
  iconSourceUrl: string | undefined = undefined;
  roles: TeilerRole[] = [TeilerRole.TEILER_USER];
  title: string = "Archived inquiries";

  constructor(router: Router) {
    super(EmbeddedTeilerApps.ARCHIVED_INQUIRIES, router);
  }

}
