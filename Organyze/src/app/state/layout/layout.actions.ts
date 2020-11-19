import { createAction, props } from '@ngrx/store';

export const layoutSidebarExpandedChanged = createAction('[Layout - Sidebar] Expanded Changed', props<{expanded: boolean}>());
