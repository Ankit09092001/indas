import React, { useEffect, useState } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
// import './Card.css'; // Import your CSS file

export default function App() {
  const [animatedText, setAnimatedText] = useState('');
  const [textToAnimate] = useState("Connecting Global Markets, Delivering Excellence.");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < textToAnimate.length) {
        setAnimatedText(textToAnimate.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50); // Adjust the timing here to control the speed of animation
  }, []);

  return (
    <>
      <MDBCard alignment='center' style={{ backgroundColor: '#FFFFE8' }}>
        <MDBCardBody>
          <MDBCardTitle>Welcome to Aarna Enterprise</MDBCardTitle>
          <MDBCardText>
            <span className="animated-text">{animatedText}</span>
          </MDBCardText>
          <MDBBtn href='/menu'>Go to Menu</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </>
  );
}

