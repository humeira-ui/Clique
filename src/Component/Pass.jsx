import React from 'react';

const Pass = ({ header, page, button }) => {
  return (
    <div className="space-y-6">
      {header}
      {page}
      <div className="pt-2">
        {button}
      </div>
    </div>
  );
};

export default Pass;