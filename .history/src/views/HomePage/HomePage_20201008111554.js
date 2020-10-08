import React from 'react';
import NavigationBar from '../../components/NavigationBar';
import '../GeneralStyles.css';

 const HomePage = () => {
    return (
      <div>
        <NavigationBar/>
        <p>
          Welcome to the career manager!
        </p>
      </div>
    );
}

export default HomePage;