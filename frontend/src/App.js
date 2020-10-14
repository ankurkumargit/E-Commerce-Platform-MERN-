import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <h1>Welcome to MetroShop</h1>
        </Container>
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;
