import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { CommonTableComponent } from './common/common-table/common-table.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TopMenuBarComponent } from './common/top-menu-bar/top-menu-bar.component';
import { TransactionService } from './services/transaction-service.service';
import { HttpClientModule } from '@angular/common/http';
// import { CommonFormsComponent } from './common/common-forms/common-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentGatewayComponent,
    CommonTableComponent,
    TopMenuBarComponent,
    // CommonFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
