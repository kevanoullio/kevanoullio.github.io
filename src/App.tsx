import { ThemeProvider } from "./context/ThemeContext"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Home } from "@/pages/Home"
import { Projects } from "@/pages/Projects"
import { Contact } from "@/pages/Contact"
import { CrtOverlay } from "@/components/CrtOverlay"

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-background text-foreground font-mono">
        {/* CRT Overlay — renders scanlines + vignette on top of everything */}
        <CrtOverlay />
        
        <Navbar />
        <main className="flex-1 relative z-10">
          <section id="home">
            <Home />
          </section>
          <section id="skills">
            {/* Skills section will be added here in Phase 3 */}
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
