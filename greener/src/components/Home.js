import banner from '../img/sand pots.jpg';
import plant from '../img/plant.jpg';
import photo from '../img/SAVANNAH.jpg';
import Photo1 from '../img/bradley.jpg';

import monstrll from '../img/monstera-plant-in-ceramic-pot-illustration-ai-generative-png.webp';

import png from '../img/pngtree-indoor-plant-png-image_6129530.png';
import intirior from '../img/interior-home-plant-in-pot-png.webp';
import photo2 from '../img/sarah.jpg';


import BestSellingCard from './BestSellingCard';
import Reviews from './Reviews';


function Home() {

   

    const ReviewCards = [
        {
            name: 'Bardely',
            par: 'Lorem ispum dolor sit amet consectetur adipiscing elit.Nam nem eroc ut nunc luctus onsecteturvel ac justo',
            img:Photo1
        },
        {
            name: 'Sarah',
            par: 'Lorem ispum dolor sit amet consectetur adipiscing elit.Nam nem eroc ut nunc luctus onsecteturvel ac justo',
            img:photo2
        },
        {
            name: 'Savannah',
            par: 'Lorem ispum dolor sit amet consectetur adipiscing elit.Nam nem eroc ut nunc luctus onsecteturvel ac justo',
            img:photo
        }
    ]

    const Cards = [
        {
            name: 'Plant 1',
            par: 'Lorem Ipsum DolorSit Amet. ',
            Price: '$20,00',
            btn: 'Buy now',
            img: intirior
        },
        {
            name: 'Plant 2',
            par: 'Lorem Ipsum DolorSit Amet. ',
            Price: '$30,00',
            btn: 'Buy now',
            img:monstrll
        },
        {
            name: 'Plant 3',
            par: 'Lorem Ipsum DolorSit Amet. ',
            Price: '$40,00',
            btn: 'Buy now',
            img:png
        }
    ]

        
      
    return (
        <>
            <div class="container">
                <div class="heading">
                    <h1>make your space<br />
                        <div>
                            <span>Greener</span>
                            <img src="" alt="" />
                        </div>
                        with
                        <span>plants</span>
                    </h1>
                    <p>Lorem ispum dolor sit amet, consectetur adipiscing elit .In<br />orci ligula,</p>
                    <div class="buttons">
                        <a href="#" class="firstChild">Shop Plant
                        </a>
                        <a href="#" class="secondChild">About us
                        </a>
                    </div>
                </div>
                <div class="rightBoxes">
                    <div class="gridBox">
                        <div sec1>
                            <h2>Section 1</h2>
                            <p>Lorem ispum dolor sit amet, consectetur adipiscing<br />elit .In orci ligula. consectetur sit amet</p>
                            <img src="{monstrll}" alt="" />
                        </div>
                        <div class="sec2">
                            <h2>Section 2</h2>
                            <p>Lorem ispum dolor sit amet.</p>
                            <img src="" alt="" />
                        </div>
                        <div class="sec3">
                            <h2>Section 3</h2>
                            <p>Lorem ispum dolor sit amet.</p>
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <section class="greenSec">
                <div class="wrapper">
                <h2>Best Selling <br/>Plant Collection</h2>
                    <div class="container">
                        {
                            Cards.map((Card) => (
                                <BestSellingCard Cards={Card} />
                            ))
                        }
                    </div>
                </div>
            </section>
            <section class="imgPara">
                <div class="img">
                    <img src={plant} alt="tree" />
                </div>
                <div class="info">
                    <div class="about">
                        <h2>What's Best From<br />Our
                            <span>Plants</span>
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br />Quam cum repudiandae sed similique ipsam<br />doloremque iste praesentium est debitis<br />sapientesit atque,libero explicabo impedit<br />quibusdam molestiae commodi ut obcaecati<br />totam sequi earum non ipsa.
                        </p>
                    </div>
                    <div class="buttons">
                        <a href="" class="firstChild">Shop Plant

                        </a>
                        <a href="" class="secondChild">Read More

                        </a>
                    </div>
                </div>
            </section>
            <section class="fourthSec">
                <div class="proverb">
                    <h2>start gardening<br />and grow your<br />own plant!</h2>
                    <img src={banner} alt="" />
                    <div class="paraButton">
                        <p>Lorem ispum dolor sit amet,<br />consectetur adipiscing elit</p>
                        <a href=""> Read More

                        </a>
                    </div>
                </div>
            </section>
            <section class="fifthSec">
                <div class="aboutHouseplnt">
                    <h2>know more about<br />houseplant</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br />Placeat numquam temporibus quaerat ipsum doloribus<br />facere deserunt,autem consequatur ullam ipsam.<br />Donate vulputateorci utmi sodales finibes</p>
                    <div class="buttons">
                        <a href="" class="firstChild">Our Blog
                        </a>
                        <a href="" class="secondChild">Read More
                        </a>
                    </div>
                </div>
                <div class="img">
                    <img src={png} alt="" />
                </div>
            </section>
            <section class="greenSec2">
                <div class="wrapper">
                    <h2> what they say<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reviews</h2>
                    <p>Check out our collection, we got every plant you need here!<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Let's grow it together </p>
                    <div class="container">
                        {
                            ReviewCards.map((ReviewCard) => (
                                <Reviews ReviewCards={ReviewCard} />
                            ))
                        }

                    </div>
                </div>
            </section>
        </>

    )
}

export default Home;