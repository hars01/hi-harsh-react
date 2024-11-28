import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
 

function MyApp() {
  return (
    <div>
      <h1>Harsh Mishra</h1>
    </div>
  )
}

// Yeh nahi chalega kyoki ye syntax jsx me kaam nahi karta

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
       <a href="http://google.com" target="_blank">Visit Google</a>
)

const anotherUser = "Tanu"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target:'_blank'},
  'Click me to visit google',
  // Yaha pe anotherUser direct esh tarike se inject ho jata hai
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).
render(
//   <StrictMode>
//   <App />
//   <MyApp/>
  
//  </StrictMode>,

//  anotherElement
 
 reactElement
  
)
