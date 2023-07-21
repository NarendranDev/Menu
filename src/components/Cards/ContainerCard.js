import React from 'react'
import MainCourse from './MainCourse'
import WelcomeCard from './WelcomeCard'
import './ContainerCard.css'
import BrunchTwo from './BrunchTwo'
import Soups from './Soups'
import Brunch from './Brunch'
const ContainerCard = () => {
  return (
   <div className='wholeContainer'>
     <div  className='containergrid' style={{}} >
      <div>
            <WelcomeCard />
            <MainCourse/>
      </div>
      <div>
            <Soups/>
      </div>
    </div>
    <div className='brunch'><p>BRUNCH</p></div>

    <div  className='containergrid' >
      <div>
           <Brunch />
      </div>
      <div>
        <BrunchTwo/>
      </div>
    </div>

   </div>
    
  )

}

export default(ContainerCard)
