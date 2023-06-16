/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Link from 'next/link';
import { Button, Card, Container } from 'react-bootstrap';

function Home() {
  return (
    <div>
      <Card>
        <Card.Img
          className="toot"
          variant="top"
          src="/toot1.jpg"
          alt="ceo"
          style={
          {
            position: 'absolute', top: '0', start: '100', translate: 'middle', rounded: 'pill',
          }
      } />
      </Card>
      <p className="toot2">@paradisetravelvibes</p>
      <p className="toot2">@paradisetravelvibes</p>

      <Container className="homepage">
        <Link className="ps-relative1" style={{ marginButton: '20px' }} passHref href="/trips/new">
          <Button className="button3">Trip Form</Button>
        </Link>
        <Link className="ps-relative2" passHref href="/cruises/new">
          <Button className="button4">Cruise Form</Button>
        </Link>
        <Link className="ps-relative3" passHref href="/carosel">
          <Button className="button">Summer Getaway Cruise Flyer</Button>
        </Link>
        <Link className="ps-relative3" passHref href="/aboutMe">
          <Button className="button2">About Me</Button>
        </Link>
      </Container>
    </div>
  );
}
export default Home;
