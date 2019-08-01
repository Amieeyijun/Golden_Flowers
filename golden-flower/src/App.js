import React from 'react';
import './App.css';
import routes from './routes';
import { BrowserRouter} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
function App() {
    return (
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    );
  }

export default App;
