---
slug: '/blog/understanding-redux'
path: '/blog/understanding-redux'
date: '2019-01-18'
title: 'Understanding Redux in 4 Steps'
readtime: '5 min read'
tags: 'React, React-Redux'
---

### REDUX in 4 STEPS

1. Store requires: Reducer & State
2. Reducer requires: State & Action
3. Subscribe - Listens for the store to change
4. Dispatch action - Do the action

```javascript
import React, { Component } from 'react';
import { createStore } from 'redux';

class ReduxDemo extends Component {
  render() {
    // Step 2: Create Reducer: State & Action
    const reducer = (state, action) => {
      if (action.type === 'attack') {
        return action.payload;
      }
      if (action.type === 'greenattack') {
        return action.payload;
      }
      return state;
    };
    // Step 1: Create Store: reducer and state
    const store = createStore(reducer, 'Peace');

    // Step 3: Subscribe - Listens for the store to change
    store.subscribe(() => {
      console.log('Store is now', store.getState());
    });

    // Step 4: Dispatch action
    store.dispatch({ type: 'attack', payload: 'Iron Man' });
    store.dispatch({ type: 'greenattack', payload: 'Hulk' });
    return <div>Hello</div>;
  }
}

export default ReduxDemo;
```
