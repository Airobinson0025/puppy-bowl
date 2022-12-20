import React from "react";





const Nav = () => {
    return (
        <div className='nav'>
      <nav>
         <form>
            <label htmlFor="name">Name:</label>
            <input id="nameInput"></input>
            <label htmlFor="breed">Breed:</label>
            <input id="breedInput"></input>
            <label htmlFor="team">Team:</label>
            <input id="teamInput"></input> 
            <button type="submit">submit</button>       
          </form>
      </nav>
    </div>
    )
}





export default Nav; 