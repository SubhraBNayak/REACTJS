import React from 'react'

const App = () => {

  function btnClicked(){
    console.log("button is clicked!") 
  }

  function mouseEntered(){
    console.log("mouse entered!")
  }
  
  function inputChanging(){
    console.log("user is typing....")
  }

  return (
    <div>
      <div className="mouseMove" onMouseMove={function(elem){
        console.log("mouse moving")
        console.log(elem.clientX)
        console.log(elem.clientY)
      }}>

      </div>
    </div>
  )
}

export default App
