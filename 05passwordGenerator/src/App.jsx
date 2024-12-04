import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  //Use of useState Hook
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //Use of useRef Hook
  const passwordRef = useRef(null) //Element ka reference leke ushke sath manipulation kar sakte hai

  //Use of useCallback Hook
  const passwordGenerator = useCallback(() => {
    let pass=""
    let str=
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numberAllowed) {
      str+="0123456789"
    }
    if(charAllowed) {
      str+="!@#$%^&*()_+-={}[]|\:;'<>,.?/`~"
    }

    for(let i=1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length+1)
      pass += str.charAt(char)

    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed/*, setPassword //ye bhi dalsakte hai optimization ke liye aur ha agar sirf 'password' dediye toh infinite loop me fas jayenge */])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    //passwordRef.current?.setSelectionRange(0,8);//Select karne ke liye Range dena ki click ke baad kitna select ho
    window.navigator.clipboard.writeText(password)
  }, [password])

  //Use of useEffect Hook
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-blue-50 bg-fuchsia-800'>

        <h1 className='text-white text-center my-3'>Generate Password</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          
          <input
          type="text"
          value={password}
          className="outline-none text-rose-950 w-full py-1 px-3"
          placeholder="||′′′•••...H_R_HM_S_R_...•••′′′||"
          readOnly
          ref={passwordRef}
          />

          <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-red-600 text-white px-3 py-0.5 shrink-0'>
           Copy Password
          </button>

        </div>

          <div className='flex text-sm gap-x-2'>

            <div className='flex items-center gap-x-1'>
              <input
              type="range"
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
              />
              <label>Length: {length}</label>
            </div>

            <div className="flex items-center gap-x-l">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                setNumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div> 

            <div className="flex items-center gap-x-l">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="caracterInput"
                onChange={() => {
                setCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="charscterInput">Characters</label>
           </div> 
          </div>
      </div>

                      <h1 className='text-5xl text-center text-white'>hi harsh</h1>
    </>
  )
}



export default App
