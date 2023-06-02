import { RouterProvider } from 'react-router-dom';
import './App.css';

import router from './Routes/router';

function App() {
  return (
    <div className="App text-accent">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
