import React from 'react'

const Soups = () => {
  return (
    <div>
      <div>
        <div className='centerStyle'>
                        <h3 className='bottomdotted'>
                        Soups
                        </h3>
        </div>
        <div>
            <ul className='menuList'>
                <li>
               <span> Real Eleanor’s Tom Yum Goong Soup</span><span>1.09</span>
               <p>The lemongrass and kaffir lime leaves will remind you of Thailand and rescuing victims of human trafficking.</p>
                </li>
                <li>
               <span> Chidi</span><span>2.01</span>
               <p>Not your typical name, but Chidi is in fact not a soup.</p>
                </li>
                <li style={{paddingBottom:"8rem"}}>
               <span>Chidi’s Regretful Pumpkin Soup</span><span>1.10</span>
               <p>A great decision! (Actually maybe not, better order the risotto.)</p>
                </li>
                
                
                <div className='dottedBorder'>
                <img src='clam-cute.gif' className='clamchowder' alt='illo-clam-chowder'/>
                <div className='imageTitle'>Our Famous Clam Chowder</div>
                <li>
                    <span>Trevor’s Manhattan Clam Chowder</span> <span>1.08</span>
                    <p>A specialty of the Trans-Eternal Railway dining car (closed). Clams in a tomato broth, served room temperature.</p>

                </li>
                <li>
                    <span>Traditional New England Clam Chowder</span> <span>2.02</span>
                    <p>Hot ocean milk with dead animal croutons. A savory latte with bugs in it. Scoop a cup at the chowder fountain or take a dip in the lazy river.</p>
                    
                </li>
                </div>
                <li>
               <span>Shawn’s “Someone” Soup</span><span>2.09</span>
               <p>Extra spicy with hand-tortured human. So random! 😂</p>
                </li>
                <li>
               <span>Michael’s Saltine Cracker</span><span>1.10</span>
               <p>Go out on a low note with this accompaniment. Pretty dry. And too salty.</p>
                </li>
                <div className='centerStyle'>
                        <h3 className='bottomdotted'>
                        FRUITS DE MER
                        </h3>
        </div>
        <li>
               <span>Buzzer Beater Lightly-Expired Cocktail Shrimp</span><span>1.12</span>
               <p>A Coyote Joe’s Marketplace 99¢ special all the way from Phoenix, Arizona.</p>
                </li>
                <li>
               <span>❤️ Big Party Cocktail Shrampies</span><span>1.01</span>
               <p>Save some for later in your bra or your many, many cargo pants pockets.</p>
                </li>
                <li>
               <span>Large Bucket of Popcorn Shrimp</span><span>1.10</span>
               <p>Perfect for movie watching with your soulmate.</p>
                </li>
                <div>
                    <img src='illo-neverending-shrimp.png' alt='illo-neverending-shrimp'className='neverendingshrimp'/>
                    </div>
                <li className='topdotted'> 
                    <span>Eleanor’s Neverending SHRIMP! Dispensary</span> <span>2.01</span>
                    <p>Fill a margarita glass to the brim with lightly-fried shrimp. Then do it again and again. Top it off with one of our signature sauces:</p>
                   
                </li>
             
               <li className='bottomdotted'>
               <ol className='styledlistshrimp' >
                        <li>
                        Mountain Blast
                        </li>
                        <li>
                        All-American Funky Circus Mustard                        </li>
                        <li>
                        Sriracha Sunrise                        </li>
                        <li>
                        Mystery (hint: rhymes with shite shmocolate)                        </li>
                        <li>
                        Cool Ranch                        </li>
                        <li>
                        Garlic                        </li>
                        <li>
                        Cajun                        </li>
                        <li>
                        Lonely Gal Margarita Mix for One                        </li>
                    </ol>
               </li>
               <li style={{paddingTop:"3rem"}}>
                <span>Jason’s Farewell Raw Oyster Bar</span> <span>4.13</span>
               </li>
               <li >
                <span>Lobster Tail</span><span>4.13</span>
                <p>Stand behind your parents and watch them enjoy this classic of the sea with Oscar de la Renta.</p>
               </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Soups
