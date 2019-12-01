import React from  'react'
import { Card } from '../Card/Card';
import './CardList.css'

export const CardList = props => {
  return (
    <div className='card-list'>
      {props.monsters.map(monster => (
        <Card monster={monster} key={monster.id} />
      ))}
    </div>
  )
}
