import { ACTION_STATUS } from '../../constants/ACTION_STATUS';
import { bindActionDetail } from '../../helpers/functions/bindActionDetail';
import { getActionDetail } from '../../helpers/functions/getActionDetail';
// import { removeFromArray } from '../../helpers/functions/removeFromArray';
import { DEFAULT_STATE } from './defaultState';

const initialState = DEFAULT_STATE.loaders;

const loaderReducer = (state = initialState, action: { type: string; response: any }) => {
  // console.log('actions', action);
  const { type, response } = action;
  const actionStatus = getActionDetail(type).status;
  const actionName = getActionDetail(type).name;
  const progressAction = bindActionDetail(ACTION_STATUS.IN_PROGRESS, actionName);
  const failureAction = bindActionDetail(ACTION_STATUS.FAILURE, actionName);
  const removedInProgress = state.filter((x: any) => x.type !== progressAction);
  const removedFailure = state.filter((x: any) => x.type !== failureAction);

  switch (actionStatus) {
    case ACTION_STATUS.IN_PROGRESS: {
      return [...removedFailure, { type, response }];
    }
    case ACTION_STATUS.SUCCESS: {
      return [...removedInProgress, { type, response }];
    }
    case ACTION_STATUS.FAILURE: {
      return [...removedInProgress, { type, response }];
    }
    default: {
      return state;
    }
  }
};

export default loaderReducer;
