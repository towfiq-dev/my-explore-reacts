import { CircleCheck } from 'lucide-react';
import React from 'react';

const PricingFeatures = ({pricingData}) => {
  return (
    <div className=''>
      <p className='flex'><CircleCheck className='mr-2'></CircleCheck>{pricingData}</p>
    </div>
  );
};

export default PricingFeatures;