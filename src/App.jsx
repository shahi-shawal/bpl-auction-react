
import { useState } from 'react'
import './App.css'
import Cart from './Component/Cart/Cart'
import Hader from './Component/Hader/Hader'
import Player from './Component/Player/Player'


function App() {
  const [playerAuction,setAuction]= useState([]);
  const [isBtnDisable, setDisable]= useState(false)
  
  const auctionBtn =(auction)=>{
      // const dis = [...isBtrue]
    setDisable (true)
    // console.log("click",auction);
    const newAuction = [...playerAuction,auction];
      setAuction(newAuction)
}

 

  return (
    <>
      <Hader></Hader>
       <div className="flex ">
       <Player auctionBtn={auctionBtn} isBtnDisable={isBtnDisable}></Player>
       <Cart  playerAuction={playerAuction} ></Cart>
       </div>
    </>
  )
}

export default App
