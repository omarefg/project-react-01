import React from 'react';

const Cronological = ({ date, site, job, description }) => {
  return (
    <div>
      <p>{date}</p>
      <div>
        <p>
          {site}
          {job && (
            <span>
              /
              {job}
            </span>
          )}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Cronological;
