import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/layout/Footer'
import { Header } from './components/layout/header'
function App() {

  return (
    <>
      <div>
          <div className="bg-app">
               <Header />
               <Outlet />
              <Footer/>
          </div>
      </div>
    </>
  )
}

export default App
