import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from '@app/home/home.component';
import { AboutComponent } from '@app/about/about.component';
// tenants
import { TenantsComponent } from '@app/tenants/tenants.component';
import { CreateTenantDialogComponent } from './tenants/create-tenant/create-tenant-dialog.component';
import { EditTenantDialogComponent } from './tenants/edit-tenant/edit-tenant-dialog.component';
// roles
import { RolesComponent } from '@app/roles/roles.component';
import { CreateRoleDialogComponent } from './roles/create-role/create-role-dialog.component';
import { EditRoleDialogComponent } from './roles/edit-role/edit-role-dialog.component';
// users
import { UsersComponent } from '@app/users/users.component';
import { CreateUserDialogComponent } from '@app/users/create-user/create-user-dialog.component';
import { EditUserDialogComponent } from '@app/users/edit-user/edit-user-dialog.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';
import { ResetPasswordDialogComponent } from './users/reset-password/reset-password.component';
// layout
import { HeaderComponent } from './layout/header.component';
import { HeaderLeftNavbarComponent } from './layout/header-left-navbar.component';
import { HeaderLanguageMenuComponent } from './layout/header-language-menu.component';
import { HeaderUserMenuComponent } from './layout/header-user-menu.component';
import { FooterComponent } from './layout/footer.component';
import { SidebarComponent } from './layout/sidebar.component';
import { SidebarLogoComponent } from './layout/sidebar-logo.component';
import { SidebarUserPanelComponent } from './layout/sidebar-user-panel.component';
import { SidebarMenuComponent } from './layout/sidebar-menu.component';
import { MasjidListComponent } from './masjid-list/masjid-list.component';
import { MasjidDetailsComponent } from './masjid-list/masjid-details/masjid-details.component';
import { FloorsComponent } from './floors/floors.component';
import { MiqaatsComponent } from './miqaats/miqaats.component';
import { MiqaatGroupsComponent } from './miqaat-groups/miqaat-groups.component';
import { MiqaatFloorsComponent } from './miqaat-floors/miqaat-floors.component';
import { SeatReservationsComponent } from './seat-reservations/seat-reservations.component';
// import { MasjidsComponent } from './masjids/masjids.component';
// import { MasjidDetailComponent } from './masjids/masjid-detail/masjid-detail.component';
// import { FloorComponent } from './floor/floor.component';
// import { FloorsComponent } from './floors/floors.component';
// import { FloorDetailComponent } from './floors/floor-detail/floor-detail.component';

// import { MiqaatDetailComponent } from './miqaats/miqaat-detail/miqaat-detail.component';
// import { MiqaatGroupsComponent } from './miqaat-groups/miqaat-groups.component';
// import { MiqaatGroupsDetailComponent } from './miqaat-groups/miqaat-groups-detail/miqaat-groups-detail.component';
// import { MiqaatFloorsComponent } from './miqaat-floors/miqaat-floors.component';
// import { MiqaatFloorsDetailComponent } from './miqaat-floors/miqaat-floors-detail/miqaat-floors-detail.component';
// import { SeatReservationsComponent } from './seat-reservations/seat-reservations.component';
// import { SeatReservationDetailComponent } from './seat-reservations/seat-reservation-detail/seat-reservation-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    // tenants
    TenantsComponent,
    CreateTenantDialogComponent,
    EditTenantDialogComponent,
    // roles
    RolesComponent,
    CreateRoleDialogComponent,
    EditRoleDialogComponent,
    // users
    UsersComponent,
    CreateUserDialogComponent,
    EditUserDialogComponent,
    ChangePasswordComponent,
    ResetPasswordDialogComponent,
    // layout
    HeaderComponent,
    HeaderLeftNavbarComponent,
    HeaderLanguageMenuComponent,
    HeaderUserMenuComponent,
    FooterComponent,
    SidebarComponent,
    SidebarLogoComponent,
    SidebarUserPanelComponent,
    SidebarMenuComponent,    
    MasjidListComponent, MasjidDetailsComponent, FloorsComponent, MiqaatsComponent, MiqaatGroupsComponent, MiqaatFloorsComponent, SeatReservationsComponent,
    
    // MasjidDetailComponent,
    // FloorComponent,
    // FloorsComponent,
    // FloorDetailComponent,
    // MiqaatsComponent,
    // MiqaatDetailComponent,
    // MiqaatGroupsComponent,
    // MiqaatGroupsDetailComponent,
    // MiqaatFloorsComponent,
    // MiqaatFloorsDetailComponent,
    // SeatReservationsComponent,
    // SeatReservationDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ModalModule.forChild(),
    BsDropdownModule,
    CollapseModule,
    TabsModule,
    AppRoutingModule,
    ServiceProxyModule,
    SharedModule,
    NgxPaginationModule,
  ],
  providers: [],
  entryComponents: [
    // tenants
    CreateTenantDialogComponent,
    EditTenantDialogComponent,
    // roles
    CreateRoleDialogComponent,
    EditRoleDialogComponent,
    // users
    CreateUserDialogComponent,
    EditUserDialogComponent,
    ResetPasswordDialogComponent,
  ],
})
export class AppModule {}
