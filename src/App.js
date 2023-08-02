import About from './pages/About';
import ErrorPage from './pages/Error';
import { createContext, useState } from 'react';

import './App.css';
import {
  createHashRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

export const ThemeContext = createContext(null);

const router = createBrowserRouter([
  {
    path: "/Portfolio/",
    element: <About/>,
    errorElement: <ErrorPage />
  }  
]);


function App() {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
}

export default App;
