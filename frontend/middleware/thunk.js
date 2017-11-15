//store handles the NEXT part.
//if there is any more middleware, then next sends the action to that next middleware
//if not, the next sends it into the root reducer
const thunk = ({dispatch, getState}) => next => action => {
    if (typeof action === 'function'){
      return action(dispatch,getState);
    }
    return next(action);
};

export default thunk;
