import { Component, Injector } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import {
  PagedListingComponentBase,
  PagedRequestDto
} from '@shared/paged-listing-component-base';
import {
  FloorServiceProxy,
  FloorDto,
  FloorDtoPagedResultDto
} from '@shared/service-proxies/service-proxies';
import { FloorDetailsComponent } from './floor-details/floor-details.component';



class PagedRolesRequestDto extends PagedRequestDto {
  keyword: string;
}

@Component({
  selector: 'app-floors',
  templateUrl: './floors.component.html',
  styleUrls: ['./floors.component.css']
})
export class FloorsComponent extends PagedListingComponentBase<FloorDto> {
  floors: FloorDto[] = [];
  keyword = '';

  constructor(
    injector: Injector,
    private _floorsService: FloorServiceProxy,
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

    this._floorsService
      .getAll(request.keyword, request.skipCount, request.maxResultCount)
      .pipe(
        finalize(() => {
          finishedCallback();
        })
      )
      .subscribe((result: FloorDtoPagedResultDto) => {
        this.floors = result.items;
        this.showPaging(result, pageNumber);
      });
  }

  delete(role: FloorDto): void {
    abp.message.confirm(
      this.l('RoleDeleteWarningMessage', role.displayName),
      undefined,
      (result: boolean) => {
        if (result) {
          this._floorsService
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

  editRole(role: FloorDto): void {
    this.showCreateOrEditRoleDialog(role.id);
  }

  showCreateOrEditRoleDialog(id?: number): void {
    let createOrEditRoleDialog: BsModalRef;
    if (!id) {
      createOrEditRoleDialog = this._modalService.show(
        FloorDetailsComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditRoleDialog = this._modalService.show(
        FloorDetailsComponent,
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
