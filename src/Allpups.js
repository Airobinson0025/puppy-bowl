import React, { useEffect, useState } from "react";


const cohort = '2211-FTB-ET-WEB-FT'

const Allpups = () => {
    const [players, setPlayerList] = useState (['']);
    
    
    
useEffect(() => {
        const fetchPlayers = async () => {
            const response = await fetch `https://fsa-puppy-bowl.herokuapp.com/api/{cohort}/players`;
            const playersObj = await response.json();
            setPlayerList(playersObj.data.players);
        }
        fetchPlayers()

    }, [])

    return (
        players.map((player) => {
        return (
        <>
        <div id="all-players-container">
            <div class="single-player-card">
            <div class="header-info">
              <p class="pup-title">{player.name}</p>
              <p class="pup-number">{player.id}</p>
            </div>
            <img src={player.imageUrl} alt="pup"/>
            <button class="detail-button" data-id={player.id}>See details</button>
            <button class="delete-button" data-id={player.id}>Remove from roster</button>
          </div>
          </div>

        </>
            
            
        
           
        )
    }))

  

}    

export default Allpups;







