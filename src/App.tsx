import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Home } from "@/pages/Home"
import { Projects } from "@/pages/Projects"
import { Contact } from "@/pages/Contact"

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
