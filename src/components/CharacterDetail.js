import React from 'react';

const CharacterDetail = (props) => {
  if(!props.character) return null
  return (
    <div>
      <h3> Your character's name: {props.character.name} </h3>
      <h3> Your character's house: {props.character.house} </h3>
      <h3> Your character's ancestry: {props.character.ancestry} </h3>
      <h3> Your character's patronus: {props.character.patronus} </h3>
      <h3> Your character's wand: {props.character.wand.core} </h3>
      <img width='100px' height='auto' style={{marginLeft: 2 + 'em'}} src={props.character.image}/>
    </div>
  )
}

export default CharacterDetail;
