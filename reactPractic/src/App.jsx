
import './App.css'
import Home from './pages/Home'
import Quote from './projects/quotes/Quote'
import Quotes from './projects/quotes/Quotes'
import { BrowserRouter } from 'react-router-dom'
import UserData from './projects/userdata/UserData'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'

import Dashboard from './projects/see/VideoCard'
import Auth from './projects/authService/Auth'
import Products from './projects/productlisting/Products'
import Jokes from './projects/jokesviewer/Jokes'

function App() {


  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserData />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/jokes" element={<Jokes />} />
      </Routes>
   
  );
}

export default App
