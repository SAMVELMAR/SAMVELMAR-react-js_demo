import React from 'react';
import Product from './Components/Product';
import Input from './Components/input';

function App() {
  return (
    <div>
      <Input/>
      <Product 
      price = '1$'
      name ='Bananas'
      description = 'Fresh bananas from Ecuador'
      />
    </div>
  );
}

export default App;
