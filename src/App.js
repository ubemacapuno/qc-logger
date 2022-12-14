import { useState, useEffect } from 'react'
import supabase from "./config/supabaseClient"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

// pages
import Home from "./pages/Home"
import Create from "./pages/Create"
import Update from "./pages/Update"
import ViewFDGCard from "./pages/ViewFDGCard"
import Footer from './components/Footer'

import Auth from './Auth'
import Account from './Account'

export default function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div className="container">
      {!session ? (
        <Auth />
      ) : (
        <div className="app">
          <BrowserRouter>
          <div className="content-wrap">
            <nav>
              <div className="flex-header">
                <i className="material-icons logo">biotech</i>
                <h1>QC Logger</h1>
              </div>
              <Link to="/">Home</Link>
              <Link to="/create">FDG Report</Link>
              <Account key={session.user.id} session={session} />
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<Create />} />
              <Route path="/:id" element={<Update />} />
              <Route path="/view/:id" element={<ViewFDGCard />} />
            </Routes>
          </div>
          </BrowserRouter>
          <Footer />
        </div>
        
      )}
    </div>
  )
}
