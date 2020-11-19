import { createReducer, on } from '@ngrx/store';
import { initialLayoutState, LayoutState } from './layout.state';
import { layoutSidebarExpandedChanged } from './layout.actions';

const sidebarExpandedReducer = createReducer(
  initialLayoutState,
  on(layoutSidebarExpandedChanged, (state, { expanded }) => ({
    ...state,
    sidebarExpanded: expanded,
  })),
);

export function layoutReducer(state, action): LayoutState {
  return {
    ...sidebarExpandedReducer(state, action),
  };
}
