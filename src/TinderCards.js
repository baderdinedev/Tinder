import React, { useState } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
function TinderCards() {

    const [people, setPeople] = useState([
        {
            name:'bader',
            imgUrl:'https://scontent.ftun15-1.fna.fbcdn.net/v/t39.30808-6/222948390_509918000240557_8797083550529310118_n.jpg?stp=dst-jpg_p640x640&_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_ohc=s4PfJ2_ZIV8AX9LISy2&_nc_ht=scontent.ftun15-1.fna&oh=00_AT9Z26fp3oR52LasgSvR1vWQFYNGTSkkc0dETZQGB4sngw&oe=6224F673',
        },
        {
            name:'bader',
            imgUrl:'https://scontent.ftun15-1.fna.fbcdn.net/v/t39.30808-1/273041961_626633591902330_710395998010035566_n.jpg?stp=dst-jpg_s200x200&_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=ihR4TfkuptcAX--lQWW&_nc_ht=scontent.ftun15-1.fna&oh=00_AT9UTFUdgFvSrKb1CseU_Bgocf6E0n59kR7-Ezude6l2ag&oe=62243DF6',
        },
    ])

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
      }
      
      const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
      }
  return (
    <div className='tinderCards'>
        <div className='tinderCards__cardContainer'>
            {people.map((person) => (
            <TinderCard 
            className='swipe'
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen('fooBar')} 
            preventSwipe={['right', 'left']}>
                <div className='card' style={{backgroundImage: `url(${person.imgUrl})`}}>
                   <h3>{person.name}</h3>
                </div>
                
            </TinderCard>
            ))}
        </div>
    </div>
  )
}

export default TinderCards