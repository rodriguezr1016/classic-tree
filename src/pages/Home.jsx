import React from 'react'
import Jumbotron from '../components/Jumbotron'

const Home = () => {
  return (
    <div>
      <Jumbotron />
      <main className='home'>
      <p className="hidden">
      No one cuts trees quite like Classic Tree Service! When you need work done on your trees, we are the people to call. We will handle your trees with expert care and make sure that you're happy with what you paid for.
      </p>
        <div className="summary">
          <div>
          <img src="/tree.jpeg" alt="tree" />

          </div>
          <div>
            <h2>Small Business</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cum sapiente eos, sunt voluptas vero hic voluptatum dolore sit saepe iure rerum accusantium perspiciatis architecto! Nam quidem maxime aut esse.</p>

          </div>
        </div>
        <div className="summary">
          <div className='item'>
          <h2>Customer Satisfaction Guaranteed</h2>
          <p className='item'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cum sapiente eos, sunt voluptas vero hic voluptatum dolore sit saepe iure rerum accusantium perspiciatis architecto! Nam quidem maxime aut esse.</p>

          </div>
          <div>
          <img className= 'item' src="/tree1.jpeg" alt="tree" />

          </div>
        </div>
        <h1>Services</h1>
      <div className="services">
        <div>
          <h2>
            Trimming
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error maxime temporibus beatae perspiciatis. Consectetur, alias similique adipisci eos nemo voluptas nesciunt explicabo sed officiis dignissimos placeat facere tenetur cum eligendi.
          </p>

        </div>
        <div className='service'>
          <img src="/removalcopy.jpg" alt="removal" />
          <h2>Removal</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus at eveniet odit placeat molestias corrupti, enim iusto laboriosam consectetur ullam architecto repudiandae officia repellendus porro atque dicta aliquid accusamus delectus.</p>
        </div>
        <div className='service'>
          <img src="/palm-tree.jpeg" alt="palm" />
          <h2>
            Consulting
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptas, possimus nihil quam repellat dolore tempora assumenda sequi pariatur velit eveniet voluptates minima consequatur, officiis nemo harum. Asperiores, nulla laudantium!</p>
        </div>
      </div>

        
      </main>
      </div>
  )
}

export default Home