
import PropTypes from 'prop-types';

import { useEffect } from "react";
import { useState } from "react";
import Auctionplayer from "../Auction/Auctionplayer";
const Player = ({auctionBtn, isBtnDisable}) => {
    const [player, setPlayer]=useState([]);
    useEffect(()=>{
         fetch ("players.json")
         .then(res=> res.json())
         .then(data=>setPlayer(data.players))
    },[])

   
    return (
        <div className="">
            <h1>Player Auction: {player.length}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {
                player.map((player,idx)=> <Auctionplayer key={idx} player={player} isBtnDisable={isBtnDisable} auctionBtn={auctionBtn}></Auctionplayer>)
            }

        </div>
        </div>
    );
};

Player.propTypes = {
    auctionBtn: PropTypes.func.isRequired
};

export default Player;

