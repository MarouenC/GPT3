import React from 'react';
import './app.css';
import './index.css';
import {Blog,Features,Footer,Header,Possibility,WhatWeb} from './containers';
import {Cta, Navbar,Brand} from './components';
const App = () => {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatWeb />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />

    </div>
  )
}

export default App