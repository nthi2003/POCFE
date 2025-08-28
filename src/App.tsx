import './App.css'
import Footer from './components/layout/Footer'
import { Home } from './pages/Home'
function App() {

  return (
    <>
      <div>
          <div className="bg-app">
              <Home />
              <Footer/>
          </div>
      </div>
    </>
  )
}

export default App
