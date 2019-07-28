import React from 'react';
import { grey } from 'ansi-colors';

class Pokecard extends React.Component{

    render(){

        const id = this.props.pokemon.id;


        const newID = (id)=>{
            switch ((id.toString()).length){
                case (1) : return('00'+id); break;
                case (2) : return('0'+id); break;
                default : return(id);
            }
        }

        const url= "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"+newID(id)+".png";
        return(
            <div>
                {id <= 4 ? (

                <div className="row">

                    <div className="col-12" style={{backgroundColor: grey}}>

                        <h2>{this.props.pokemon.name}</h2>
                        <div><img src={url}  alt={this.props.pokemon.name} /></div>
                        <div>Type: {this.props.pokemon.type}</div>
                        <div>Exp: {this.props.pokemon.base_experience}</div>

                    </div>
                    
                </div>
                )
                    
                    : (

                <div className="row">

                    <div className="col-12">

                        <h2>{this.props.pokemon.name}</h2>
                        <div><img src={url}  alt={this.props.pokemon.name} /></div>
                        <div>Type: {this.props.pokemon.type}</div>
                        <div>Exp: {this.props.pokemon.base_experience}</div>
                        
                    </div>
                    
                </div>
                    )
                    
                }
            </div>
        );
                 
    }        
}   

export default Pokecard;