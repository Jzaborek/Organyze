import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { LayoutState } from './layout.state';

export const featureKey = 'layout';

export const selectLayoutFeature = createFeatureSelector<AppState, LayoutState>(featureKey);

export const selectLayoutSidebarExpanded = createSelector(
  selectLayoutFeature,
  (state: LayoutState) => state.sidebarExpanded,
);
