import './App.css'
import Demo from './layouts/Demo'
import Hero from './layouts/Hero'

function App() {
  return (
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <Hero />
        <Demo />
      </div>
    </main>
  )
}

export default App
