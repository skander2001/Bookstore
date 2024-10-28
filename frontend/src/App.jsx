import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import CreateBooks from './pages/CreateBooks.jsx'
import DeleteBooks from './pages/DeleteBooks.jsx'
import EditBooks from './pages/EditBooks.jsx'
import ShowBook from './pages/ShowBook.jsx'


const App = () => {
  return (
    <Routes>
      <Route path='/'element={Home}></Route>
      <Route path='/books/create'element={CreateBooks}></Route>
      <Route path='/books/delete/:id'element={DeleteBooks}></Route>
      <Route path='/books/edit/:id'element={EditBooks}></Route>
      <Route path='/books/details/:id 'element={ShowBook}></Route>
    </Routes>
  )
}

export default App