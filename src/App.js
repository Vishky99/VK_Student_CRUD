import React from 'react'
import Nav from './NavComponent/Nav'
import {Home} from './StudentComponent/Home'
// import EditStudent from './StudentComponent/EditStudent'
import {AddStudent} from './StudentComponent/AddStudent'
import {Routes, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import { CheckVal } from './StudentComponent/CheckVal'
import { Footer } from './StudentComponent/Footer'

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Nav/>
        <Routes>
          <Route path="/add" element={<AddStudent/>} />
          <Route path="/home" element={<Home/>} />
          {/* <Route path="/edit-student/:id" element={<EditStudent animate={true}/>} /> */}
          <Route path="/edit/:id" element={<CheckVal/>} />
          <Route path="/" exact={true} element={<Home></Home>} />
          <Route path='*' element={PageNF()} />
        </Routes>
      </div>
      <br/><br/><br/>
      <Footer />
    </Provider>
  );
}

const PageNF = () => (
  <div>
    <h4>Sorry !!! Page not found.</h4>
  </div>
);

export default App;
