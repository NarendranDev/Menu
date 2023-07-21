import { Box } from '@mui/material'
import React from 'react'
const MainCourse = () => {
  return (
  <div>
        <div >
            <div className='solidBorder'>
                  <div className='centerStyle'>
                      <h3 className='bottomdotted'>
                      HORS D’OEUVRES
                      </h3>
                  </div>
              <div>
                  <div >
                      <div>
                        <ul className='menuList' style={{padding:0}} >
                            <li>
                            <span>Madison’s Delish Nachos</span> <span>2.12</span>
                            <p>Definitely not vegetarian.</p>
                            </li>
                            <li>
                            <span>#1 Human Stuff Nachos</span> <span>4.04</span>
                            <p>Salty, crunchy, cheesey, with a little bit of a kick.</p>
                            </li>
                            <li>
                            <span>Eleanor’s Pre-Spider-Man 2 Chips & Salsa</span> <span>1.09</span>
                            </li>
                            <li>
                            <span>Donkey Doug’s Pepperoni Hot Pockets</span> <span>3.05</span>
                            <p>Served in its microwave cardboard sleeve.</p>
                            </li> <li>
                            <span>Larry Hemsworth’s Vegemite Canape</span> <span>3.03</span>
                            <p>The Australian fare you crave (like those other, more accomplished Hemsworth brothers).</p>
                            </li> <li style={{marginBottom:'0'}}>
                            <span>Torture Simulation Salmon Crudite</span> <span>4.11</span>
                            <p>Farm-raised salmon canape. We support sustainable fishing.</p>
                            </li>
                              <img src='giphy.gif' className='imagePosition' alt='cheese -plate'/>
                            <li className='imagelist' >
                              <Box className='imagecontent'>
                              <p style={{fontWeight:'bolder'}}>P.T.A. Meeting Cheese Plate</p>
                              <p>Enjoy a paper plate piled high with sliced and cubed deli cheeses.</p>
                              <p style={{fontWeight:'bolder'}}>3.06</p>
                              </Box>
                            </li>
                            <li style={{paddingTop:"2rem"}}>
                              <span>Museum of Human Misery Platter</span><span>2.10</span>
                              </li>
                              <p className='containsAnotherList'>As terrible as you’d expect it to be: <p><ol className='styledlist'>
                                <li>
                                Soul food from Maine
                                </li>
                                <li>
                                Bagels from Arkansas
                                </li>
                                <li>
                                Hawaiian pizza
                                </li>
                                <li>Egg salad from a hospital vending machine in Azerbaijan
                                </li>
                                </ol></p></p>
                            
                            <li>
                              <span>Thursday Night Drinks Mozzarella Sticks</span> <span>1.02</span>
                              <p>Perfect for an evening drive through the giant loophole in the system you accidentally discovered.</p>
                            </li>
                            <li>
                              <span>Pigs in a Blanket</span> <span>4.12</span>
                              <p>Perfect for a Florizona British Library Extravaganza.</p>
                            </li>
                            <img src='illo-jalapeno-poppers.png' className='imagePosition' alt='cheese -plate'/>

                            <li className='imagelist' >
                              <Box className='imagecontent'>
                              <p style={{fontWeight:'bolder'}}>Jason’s Jalapeño Poppers Challenge</p>
                              <p>Eat 50 poppers in under two minutes to break the record and impress all the workers at the nearby hospital.
                              </p><p>Comes with cheesy fries with Donkey Sauce and the cool hat.</p>
                              <p style={{fontWeight:'bolder'}}>1.09</p>
                              </Box>
                            </li>
                        </ul>
                        <div>
                  
                  </div>
                </div>
                      
                    
                      
              </div>
                  
              </div>
            </div> 
        </div>
  </div>
  )
}

export default MainCourse
