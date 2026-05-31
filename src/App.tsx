import { ThemeProvider } from "./context/ThemeContext"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Home } from "@/pages/Home"
import { Skills } from "@/pages/Skills"
import { Projects } from "@/pages/Projects"
import { Contact } from "@/pages/Contact"

function App() {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <main className="flex flex-col items-center z-10">
          <Home />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
