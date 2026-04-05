import React from 'react'
import { Cable } from 'lucide-react';
import { Earth } from 'lucide-react';
import { Users } from 'lucide-react';
import { ChartNoAxesCombined } from 'lucide-react';

const Center = () => {
  return (
    <div className='flex p-10'>
      <div>
        <hr class="mx-3 border-t border-gray-200" />
        <div className='pt-10 pb-10'>
            <Cable strokeWidth={2} size={20} />
        </div>
        <div className='font-serif text-lg'>Amplify Insights</div>
        <p className='text-sm tracking-wider pt-8 text-gray-500 pr-4'>Unlock data-driven decisions with
            comprehensive analytics, revealing key
            opportunities for strategic regional growth.
        </p>
      </div>
      <div>
        <hr class="mx-3 border-t border-gray-200" />
        <div className='pt-10 pb-10'>
            <Earth />
        </div>
        <div className='font-serif text-lg'>Control Your Global Presence</div>
        <p className='text-sm tracking-wider pt-8 text-gray-500 pr-4'>Manage and track satellite offices, ensuring 
            consistent performance and streamlined 
            operations everywhere.
        </p>
      </div>
      <div>
        <hr class="mx-3 border-t border-gray-200" />
        <div className='pt-10 pb-10'>
            <Users />
        </div>
        <div className='font-serif text-lg'>Remove Language Barriers</div>
        <p className='text-sm tracking-wider pt-8 text-gray-500 pr-4'>Adapt to diverse markets with built-in
            localization for clear communication and 
            enhanced user experience.
        </p>
      </div>
      <div className='flex flex-col'>
        <hr class="mx-3 border-t border-gray-200" />
        <div className='pt-10 pb-10'>
            <ChartNoAxesCombined />
        </div>
        <div className='font-serif text-lg'>Visualize Growth</div>
        <p className='text-sm tracking-wider pt-8 text-gray-500 pr-4'>Generate precise, visually compelling 
            reports that illustrate your growth
            trajectories across all regions.
        </p>
      </div>
    </div>
  )
}

export default Center
