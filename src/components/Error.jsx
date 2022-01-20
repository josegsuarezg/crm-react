import React from 'react';

const Error = ({children}) => {
  return (
    <div className="text-red-700 italic font-bold text-sm">
      {children}
    </div>
  );
};

export default Error;
