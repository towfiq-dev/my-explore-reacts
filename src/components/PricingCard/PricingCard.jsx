import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({card}) => {
  const {name, price, description, features, popular} = card
  return (
    <section className='bg-amber-100 p-4 rounded flex flex-col gap-2.5 text-justify'>
      <div className='bg-blue-200 p-4 rounded'>
      <p className='text-bolder text-4xl'>{name}</p>
      <h2 className='text-bold text-xl'>{price}</h2>
      {popular && <p className='badge badge-xs badge-warning py-2.5'>Most Popular</p>}
      </div>
      <div className=' bg-green-300 p-4 rounded grid gap-2.5 flex-1'>
      <p className='text-semibold'>{description}</p>
      {
        features.map((pricingData, index)=> <PricingFeatures 
        key={index}
        pricingData = {pricingData}
        ></PricingFeatures>)
      }
      </div>
      <div>
        <button className="btn w-full">Subscribe</button>
      </div>
    </section>
  );
};

export default PricingCard;