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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonFormComponent } from './common-form/common-form.component';
import { HomeComponent } from './home/home.component';
import { InputTextModule } from 'primeng/inputtext';
// import { CommonFormsComponent } from './common/common-forms/common-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentGatewayComponent,
    CommonTableComponent,
    TopMenuBarComponent,
    CommonFormComponent,
    HomeComponent
    // CommonFormsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
    InputTextModule
  ],
  providers: [TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
