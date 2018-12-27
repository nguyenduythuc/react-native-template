/**
 * @flow
 */

'use strict';

import AppNavigator from '../navigations'

export const navState = (state, action) => {
  switch (action.type) {
    default:
      if (action.type === 'Navigation/NAVIGATE') {
        const { routes } = state;
        const { routeName } = action;

        const currentRoute = routes[routes.length - 1];
        if (currentRoute.routeName === routeName) {
          return state;
        }
      }

      return AppNavigator.router.getStateForAction(action, state);
  }
};
