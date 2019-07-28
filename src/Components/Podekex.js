import React from 'react';
import Pokecard from './Pokecard'
import './Pokecard.css'

class Pokedex extends React.Component{

    render(){

        const pokemons = this.props.defaultProps;

        //console.log(this.props.defaultProps);
        return(

            <div className="">
                <div className="header">
                    <h1>Pokedex</h1>
                </div>
                
                <div className="grid-container">

                    {pokemons.map((pokemon)=>{

                        return <Pokecard pokemon={pokemon} key={pokemon.id} />

                    })}

                </div>

            </div>

        )
    }
}

export default Pokedex;


