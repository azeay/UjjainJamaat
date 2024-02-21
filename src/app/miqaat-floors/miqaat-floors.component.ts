import { Component, Injector } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import {
  PagedListingComponentBase,
  PagedRequestDto
} from '@shared/paged-listing-component-base';
import {
  MasjidServiceProxy,
  MasjidDto,
  MasjidDtoPagedResultDto
} from '@shared/service-proxies/service-proxies';
import { MasjidDetailsComponent } from './masjid-details/masjid-details.component';



class PagedRolesRequestDto extends PagedRequestDto {
  keyword: string;
}

@Component({
  selector: 'app-miqaat-floors',
  templateUrl: './miqaat-floors.component.html',
  styleUrls: ['./miqaat-floors.component.css']
})
export class MiqaatFloorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
