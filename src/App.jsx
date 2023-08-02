import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import pathRoutes from './routes'
import React from 'react'
import Header from './components/Header'
function App() {
  
  return (
    <BrowserRouter>

      <Header />
      <Routes>
        { pathRoutes.map(({ element, path }) => {
            const Component = React.createElement(element);
            return(
            <Route
              key={path}
              path={path}
              element={Component}
            />
            )
        })
          
        }
    </Routes>
    </BrowserRouter>
  )
}

export default App
