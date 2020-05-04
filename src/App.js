import React from 'react';
import './App.css';
import store from './store';
import * as action from './action';
function App() {

  const unSubscribe = store.subscribe(() => {
    console.log("Store Change!", store.getState());

  });

  action.addBug('bug1')
  action.addBug('Bug2')
  action.resolveBug(2)


  console.log(store.getState());

  return (
    <div className="App">

    </div>
  );
}

export default App;
