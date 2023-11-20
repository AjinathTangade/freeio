import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Services() {
  return (
    <div>
      <div className='container mx-auto'>
        <div className='text-center'>
          <h2 className='text-2xl lg:text-4xl font-bold'>Need something done?</h2>
          <p className="text-center text-base font-normal leading-8 text-gray-600 pt-1">
            Most viewed and all-time top-selling services
          </p>
          <div className='grid grid-cols-4 gap-10'>
            <div className=''>
              <FontAwesomeIcon icon={faUser} />
              <h3>Post a job</h3>
              <p>It’s free and easy to post a job. Simply fill in a title, description.</p>
            </div>
            <div className=''>
              <FontAwesomeIcon icon={faUser} />
              <h3>Post a job</h3>
              <p>It’s free and easy to post a job. Simply fill in a title, description.</p>
            </div>
            <div className=''>
              <FontAwesomeIcon icon={faUser} />
              <h3>Post a job</h3>
              <p>It’s free and easy to post a job. Simply fill in a title, description.</p>
            </div>
            <div className=''>
              <FontAwesomeIcon icon={faUser} />
              <h3>Post a job</h3>
              <p>It’s free and easy to post a job. Simply fill in a title, description.</p>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  )
}

export default Services;