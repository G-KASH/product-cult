import React from 'react';
import { Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Name from './Name.js';
import Price from './Price.js';
import Description from './description.js';
import Image from './Image.js';

const firstName = "Alex"; // Change to "" to test fallback

function App() {
  return (
    <>
      <Container className="mt-5">
        <Card style={{ width: '18rem', margin: 'auto' }}>
          <Image />
          <Card.Body>
            <Name />
            <Price />
            <Description />
          </Card.Body>
        </Card>
        <div className="text-center mt-3">
          <h4>Hello, {firstName ? firstName : "there"}!</h4>
          {firstName && (
            <img
              src="https://via.placeholder.com/80"
              alt="User"
              style={{ borderRadius: '50%', marginTop: '10px' }}
            />
          )}
        </div>
      </Container>
    </>
  );
}

export default App;
