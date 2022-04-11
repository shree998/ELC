import React from 'react';
import Cards from './cards';

function List({element}){

       const products = {
              display: 'flex'
       }
  
    const productList = element.props.map((user, i) => 
  
            {
              
             return(
                    <Cards key={i} id = {user._id} name = {user.name} picture = {user.picture}  price= {user.price}/>
                    )
                    });
             return(
                    <div style={products}>
                    {productList}
                    </div>
            );
} 

module.exports = List;