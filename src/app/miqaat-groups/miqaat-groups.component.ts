import { Component, Injector } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import {
  PagedListingComponentBase,
  PagedRequestDto
} from '@shared/paged-listing-component-base';
import {
  MiqaatGroupServiceProxy,
  MiqaatGroupDto,
  MiqaatGroupDtoPagedResultDto
} from '@shared/service-proxies/service-proxies';
import { MiqaatGroupDetailsComponent } from './miqaat-group-details/miqaat-group-details.component';



class PagedRolesRequestDto extends PagedRequestDto {
  keyword: string;
}

@Component({
  selector: 'app-miqaat-groups',
  templateUrl: './miqaat-groups.component.html',
  styleUrls: ['./miqaat-groups.component.css']
})
export class MiqaatGroupsComponent extends PagedListingComponentBase<MiqaatGroupDto> {
  miqaatGroups: MiqaatGroupDto[] = [];
  keyword = '';

  constructor(
    injector: Injector,
    private _miqaatGroupsService: MiqaatGroupServiceProxy,
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

    this._miqaatGroupsService
      .getAll(request.keyword, request.skipCount, request.maxResultCount)
      .pipe(
        finalize(() => {
          finishedCallback();
        })
      )
      .subscribe((result: MiqaatGroupDtoPagedResultDto) => {
        this.miqaatGroups = result.items;
        this.showPaging(result, pageNumber);
      });
  }

  delete(role: MiqaatGroupDto): void {
    abp.message.confirm(
      this.l('RoleDeleteWarningMessage', role.displayName),
      undefined,
      (result: boolean) => {
        if (result) {
          this._miqaatGroupsService
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

  editRole(role: MiqaatGroupDto): void {
    this.showCreateOrEditRoleDialog(role.id);
  }

  showCreateOrEditRoleDialog(id?: number): void {
    let createOrEditRoleDialog: BsModalRef;
    if (!id) {
      createOrEditRoleDialog = this._modalService.show(
        MiqaatGroupDetailsComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditRoleDialog = this._modalService.show(
        MiqaatGroupDetailsComponent,
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

