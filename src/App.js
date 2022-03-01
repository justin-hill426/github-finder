import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import {GithubProvider} from './context/github/GithubContext'
import {AlertProvider} from './context/alert/AlertContext'
import Alert from './components/layout/Alert';
import User from './components/pages/User';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col bg-base-content justify-between min-h-screen">
            <Navbar/>

            <main className='container mx-auto px-3 pb-12'>Content</main>
            <Alert/>
              <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/user/:login' element={<User/>} />
                <Route path='/notfound' element={<NotFound/>} />
                <Route path='/*' element={<NotFound/>} />
              </Routes>
            <Footer/>
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
