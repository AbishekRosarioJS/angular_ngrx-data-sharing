import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCustomer from '../reducer/customer.reducer'
import { state } from '@angular/animations';

export const selectCustomerState = createFeatureSelector<fromCustomer.CustomerState>(
    fromCustomer.customerFeatureKey
)

export const selectCustomers = createSelector(
    selectCustomerState,
    (state:fromCustomer.CustomerState)=>state.customers
);