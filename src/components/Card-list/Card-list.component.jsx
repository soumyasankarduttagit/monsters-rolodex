import React from 'react';
import './Card-list.style.css';
import {Card} from '../Card/Card.component';
export const Cardlist = (props)=>(

<div className='card-list'>{props.monsters.map((monster)=><Card key={monster.id} monster={monster}/>)}</div>

)
