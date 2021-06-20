import { ACTION_STATUS } from '../../constants/ACTION_STATUS';
import { bindActionDetail } from '../../helpers/functions/bindActionDetail';
import { getActionDetail } from '../../helpers/functions/getActionDetail';
import { removeFromArray } from '../../helpers/functions/removeFromArray';
import { DEFAULT_STATE } from './defaultState';

const initialState = DEFAULT_STATE.loaders;

const loaderReducer = (state = initialState, action: { type: string }) => {
  // console.log('actions', action);
  const { type } = action;
  const actionStatus = getActionDetail(type).status;
  const actionName = getActionDetail(type).name;
  const progressAction = bindActionDetail(ACTION_STATUS.IN_PROGRESS, actionName);

  switch (actionStatus) {
    case ACTION_STATUS.IN_PROGRESS: {
      return [...state, type];
    }
    case ACTION_STATUS.SUCCESS: {
      return [...removeFromArray(state, progressAction), type];
    }
    case ACTION_STATUS.FAILURE: {
      return [...removeFromArray(state, progressAction), type];
    }
    default: {
      return state;
    }
  }
};

export default loaderReducer;
