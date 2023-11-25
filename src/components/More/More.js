import React from 'react';

function More({ loadMore }) {
  return (
        <button className='more-btn' onClick={loadMore}>Ещё</button>
  );
}

export default More;
