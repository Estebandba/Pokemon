import React from 'react';
import Pokecard from './Pokecard'
import './Pokecard.css'

class Pokedex extends React.Component{

    render(){

        const pokemons = this.props.pokemonHand[0];

        console.log(this.props.isWinner)
   
      
        return(

            <div >
                {this.props.isWinner ? <h1 style={{color:'green'}}>Winner!!</h1> : <h1 style={{color:'red'}}>Loser</h1> }
                <div className="header">
                    
                    <h1>Pokedex</h1>
                </div>
                
                <div className="grid-container" >

                    {pokemons.map((pokemon)=>{

                        return <Pokecard pokemon={pokemon} key={pokemon.id} />

                    })}

                </div>

            </div>

        )
    }
}

export default Pokedex;


