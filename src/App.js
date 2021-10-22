import React from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import notes from './notes'

function createnotes(eachnote) {
  return <Note title={eachnote.title} content={eachnote.content} />
}

function App() {
  return (
    <div className="App">
      <Header />
      {notes.map(createnotes)}
      <Footer />
    </div>
  )
}

export default App
