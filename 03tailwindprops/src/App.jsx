import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "harsh",
    age: "21"
  }
  let newArr = [1, 2, 3]
  
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounde-xl mb-4'>Tailwind Test</h1>
      <Card ai="Actor India" user="SRK" link="https://i1.wp.com/godofindia.com/wp-content/uploads/2017/05/shahrukh-khan-5.jpg" someObje={myObj} Array={newArr} />
      <Card ai="Actor US" user="Robert Downey Jr" link="https://papers.co/wallpaper/papers.co-bh56-ironman-hero-marvel-art-40-wallpaper.jpg"/>

    </>
  )
}

export default App










 {/* SRK Wala Folder */}
      
      {/* <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded rounded-full mx-auto" src="https://i1.wp.com/godofindia.com/wp-content/uploads/2017/05/shahrukh-khan-5.jpg" alt="" width="384" height="512"/>
  <div class="pt-6 md:p-8 text-center space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Shah Rukh Khan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Actor, India
      </div>
    </figcaption>
  </div>
</figure> */}