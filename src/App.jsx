import Hero from './components/hero';
import Demo from './components/demo';
import './App.css';

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />

        <div className="app">
          <Hero />
          <Demo />
        </div>
      </div>
    </main>
  )
}

export default App