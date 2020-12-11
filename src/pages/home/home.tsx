import React, { useEffect } from 'react';
import MtButtonComponent from 'class-components/mt-button/mt-button.component';

const Home: React.FC = () => {
  useEffect(() => {}, []);
  return (
    <div>
      Home Page
      <div>
        <MtButtonComponent />
      </div>
    </div>
  );
};

export default Home;
