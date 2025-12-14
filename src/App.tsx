// import { useState } from 'react'
// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Match from './pages/match-fixsture/Match';
import MatchDetails from './pages/match-details/MatchDetails';


function App() {

  return (
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Match />}/>
                {/* <Route path='matchdetails/:eventId' element={<MatchDetails />} /> */}
                <Route path="/matchdetails/:eventId/:time" element={<MatchDetails />} />

            </Route>
          </Routes>
       </BrowserRouter>
  )
}

export default App
