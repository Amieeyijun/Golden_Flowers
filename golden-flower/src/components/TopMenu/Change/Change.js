import React from 'react';
import Load from './load/Load'
import People from './people/People'
function Change() {
    let userone = JSON.parse(window.sessionStorage.getItem("user"));
    if (userone) {
      return <People />;
    }else{
        return <Load />;
    }
    
  }

export default Change;