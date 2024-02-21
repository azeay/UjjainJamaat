import { Component, Injector } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import {
  PagedListingComponentBase,
  PagedRequestDto
} from '@shared/paged-listing-component-base';
import {
  MiqaatServiceProxy,
  MiqaatDto,
  MiqaatDtoPagedResultDto
} from '@shared/service-proxies/service-proxies';
import { MiqaatDetailsComponent } from './miqaat-details/miqaat-details.component';



class PagedRolesRequestDto extends PagedRequestDto {
  keyword: string;
}
@Component({
  selector: 'app-miqaats',
  templateUrl: './miqaats.component.html',
  styleUrls: ['./miqaats.component.css']
})
export class MiqaatsComponent extends PagedListingComponentBase<MiqaatDto> {
  miqaats: MiqaatDto[] = [];
  keyword = '';

  constructor(
    injector: Injector,
    private _miqaatsService: MiqaatServiceProxy,
    private _modalService: BsModalService
  ) {
    super(injector);
  }

  list(
    request: PagedRolesRequestDto,
    pageNumber: number,
    finishedCallback: Function
  ): void {
    request.keyword = this.keyword;

    this._miqaatsService
      .getAll(request.keyword, request.skipCount, request.maxResultCount)
      .pipe(
        finalize(() => {
          finishedCallback();
        })
      )
      .subscribe((result: MiqaatDtoPagedResultDto) => {
        this.miqaats = result.items;
        this.showPaging(result, pageNumber);
      });
  }

  delete(role: MiqaatDto): void {
    abp.message.confirm(
      this.l('RoleDeleteWarningMessage', role.displayName),
      undefined,
      (result: boolean) => {
        if (result) {
          this._miqaatsService
            .delete(role.id)
            .pipe(
              finalize(() => {
                abp.notify.success(this.l('SuccessfullyDeleted'));
                this.refresh();
              })
            )
            .subscribe(() => {});
        }
      }
    );
  }

  createRole(): void {
    this.showCreateOrEditRoleDialog();
  }

  editRole(role: MiqaatDto): void {
    this.showCreateOrEditRoleDialog(role.id);
  }

  showCreateOrEditRoleDialog(id?: number): void {
    let createOrEditRoleDialog: BsModalRef;
    if (!id) {
      createOrEditRoleDialog = this._modalService.show(
        MiqaatDetailsComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditRoleDialog = this._modalService.show(
        MiqaatDetailsComponent,
        {
          class: 'modal-lg',
          initialState: {
            id: id,
          },
        }
      );
    }

    createOrEditRoleDialog.content.onSave.subscribe(() => {
      this.refresh();
    });
  }
}
