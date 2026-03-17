import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({pricingPromise}) => {
  const pricingData = use(pricingPromise)
  
  return (
    <section>
      <h2 className='text-black font-bold text-[40px] text-center mt-3'>Get Our Membership</h2>
      <div className= 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-5'>
        {
        pricingData.map(card=> <PricingCard 
        card = {card}
        key={card.id}
        ></PricingCard>)
        }
      </div>
    </section>
  );
};

export default PricingOptions;