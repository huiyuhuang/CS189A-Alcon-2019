import React from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar{
    background-color:#222;
  }
  .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;


export const NavigationBar = () => (
  <Styles>
    <Navbar expand='lg'>
      <Navbar.Brand href="/">Eyelights </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic=navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/watch">Watch</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/upload">Upload</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/test">Test</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)
