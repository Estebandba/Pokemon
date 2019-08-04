import React from 'react';
import Pokedex from './Podekex';

class Pokegame extends React.Component{

    render(){

        const pokemonList = [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]          

          //const pokeHand = () =>{}
          const dragCards = (pokemon) =>{
                        
            const selectedPokemon = [];
            
            for(let i=0 ; i<=3 ; i++){

                let x = Math.floor(Math.random() * pokemon.length );
                selectedPokemon.push(pokemon[x]);
            }
            return(selectedPokemon);

          };

          const totalExp1 = (pokeList)=>{

                let exp = pokeList.map((pokeExp)=>{

                let total = 0; 
                total += parseInt(pokeExp.base_experience);
                return(total);

              });

              return exp
          }
          const firstHand = ()=>{
              
            const pokemons = dragCards(pokemonList) 
            const totalExp = totalExp1(pokemons);
            const pokemonHand = [pokemons,totalExp]  
            return pokemonHand;
          }

          const oneHand = firstHand()
          const twoHand = firstHand()

          const sumup1 = oneHand[1].reduce((a, b) => a + b, 0)
          const sumup2 = twoHand[1].reduce((a, b) => a + b, 0)          

          console.log(sumup1,sumup2)

        return(
            <div>

                <Pokedex pokemonHand={oneHand} isWinner={sumup1>sumup2} />
                <Pokedex pokemonHand={twoHand} isWinner={sumup1<sumup2} />


            </div>
        );
    }

}

export default Pokegame;