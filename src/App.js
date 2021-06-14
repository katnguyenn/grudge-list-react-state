import React, { useCallback, useReducer } from 'react';

import id from 'uuid/v4';

import Grudges from './Grudges';
import NewGrudge from './NewGrudge';

import initialState from './initialState';

const reducer = (state, action) => {
  if (action.type === GRUDGE_ADD) {
    return [
      action.payload,
      ...state
    ]
  }

  if (action.type === GRUDGE_FORGIVEN) {
    return state.map(grudge => {
      if (grudge.id !== action.payload.id) return grudge;
      return { ...grudge, forgiven: !grudge.forgiven };
    })

  }
}

const GRUDGE_ADD = 'GRUDGE_ADD';
const GRUDGE_FORGIVEN = 'GRUDGE_FORGIVEN';

const Application = () => {
  const [grudges, dispatch] = useReducer(reducer, initialState);

  const addGrudge = useCallback(({ person, reason }) => {
    dispatch({
      type: GRUDGE_ADD,
      payload: {
        person,
        reason,
        forgiven: false,
        id: id()
      }
    });
  },[dispatch]);

  const toggleForgiveness = useCallback(id => {
    dispatch({
      type: GRUDGE_FORGIVEN,
      payload: {
        id
      }
    })
  },[dispatch]);

  return (
    <div className="Application">
      <NewGrudge onSubmit={addGrudge} />
      <Grudges grudges={grudges} onForgive={toggleForgiveness} />
    </div>
  );
};

export default Application;