import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About'

import './App.scss';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
      </main>
    </>
  );
}

export default App;
