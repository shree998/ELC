import React from 'react';


function Cards({name, id, picture, price}) {

    const card = {
        boxShadow: "0 4px 8px 0 rgba(0.5,0,0,0.2)",
    transition: "0.3s",
    width: "40%"
    }

    const container = {
        padding: "2px 16px"
    }
   		return(
            <div className="card" style={card}>
                <img alt="image" src={picture}></img>
			<div key={id} className="container" style={container}>
				<h1>{name}</h1>
				<p>{price}</p>
			</div>
            </div>
		);
	
}

module.exports = Cards;