import React, { useState, useEffect } from 'react';
import './App.scss';

import Header from './components/Header';

const App = () => {
  const PIXABAY_API_KEY = '14893600-3053bf4d93747af2c886bf911';

  const [images, setImages] = useState([]);
  const [term, setTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
      const response = await fetch(
        `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${term}&image_type=photo`
      );
      const data = await response.json();
      setImages(data.hits);
      console.log(data);
    })();
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default App;
