import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./context/ThemeContext"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Home } from "@/pages/Home"
import { Projects } from "@/pages/Projects"
import { Contact } from "@/pages/Contact"
import "./App.css"

function App() {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  )
}

export default App
