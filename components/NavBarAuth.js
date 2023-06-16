import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBarAuth() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>
            <Image src="/TOOT.png" alt="Stack Overflow" height={50} width={180} style={{ objectFit: 'cover', height: '100%' }} />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <Nav.Link>Home</Nav.Link>
            </Link>
            {/* <Link passHref href="/pages/profile">
              <Nav.Link>Profile</Nav.Link>
            </Link> */}
            <Link className="ps-relative" passHref href="/trips/new">
              <Nav.Link className="nav-topic">Trip Form</Nav.Link>
            </Link>
            <Link className="ps-relative" passHref href="/trips">
              <Nav.Link className="nav-topic">Trips</Nav.Link>
            </Link>
            <Link className="ps-relative" passHref href="/cruises/new">
              <Nav.Link className="nav-topic">Cruise Form</Nav.Link>
            </Link>
            .{' '}
            <Link className="ps-relative" passHref href="/cruise">
              <Nav.Link className="nav-topic">Cruise</Nav.Link>
            </Link>
            <Link className="ps-relative" passHref href="/user">
              <Nav.Link className="nav-topic">User</Nav.Link>
            </Link>
            <Link className="ps-relative" passHref href="/aboutMe">
              <Nav.Link className="nav-topic">About Me</Nav.Link>
            </Link>
            <Link className="ps-relative" passHref href="/admin">
              <Nav.Link className="nav-topic">Admin</Nav.Link>
            </Link>
            <Button variant="danger" onClick={signOut}>
              Sign Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
