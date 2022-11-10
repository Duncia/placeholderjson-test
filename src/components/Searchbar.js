import React from "react";
/*Čia sudėtingiau - paduodam tris funkcijų parametrus iškart deconstruction darydami.
Tada visus juos pakišam į kodą. Onchange bus funkcija. */
const Searchbar = ({ className, placeholder, onChangeHandler }) => (
    <div className="search">
        <input
            className={`search__input ${className}`}
            type='search'
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    </div>
  );
  
  export default Searchbar;