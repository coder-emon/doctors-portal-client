import { RouterProvider } from 'react-router-dom';
import './App.css';

import router from './Routes/router';
import { Toaster } from 'react-hot-toast';
import ForgetModal from './Components/ForgetModal/ForgetModal';

function App() {
  return (
    <div className="App text-accent">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
      <ForgetModal></ForgetModal>
    </div>
  );
}

export default App;
