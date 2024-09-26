import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button, Container, Form, Nav, NavDropdown, Navbar, Offcanvas, Stack } from 'react-bootstrap'

const Header = () => {
    const navigation = [
        
        {name: 'Product', href : '/' },
        {name: 'Solutions', href : '/' },
        {name: 'Pricing', href : '/' },
        {name: 'Resources', href : '/' },
    ] 
  return (
    <>
<>
<Navbar  expand="lg" className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="/"><Image src="/images/webapp-logo.png"  alt ="logo" width={149} height={40} /> </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand}`}>
                <Image src="/images/webapp-logo.png"  alt ="logo" width={149} height={40} /> 
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                    {navigation.map((item)=>(
                        <Nav.Link href={item.href} key={item.name}>
                           {item.name}
                        </Nav.Link>
                    ))}
                
               
                </Nav>
                <Stack direction="horizontal" gap={0}>
                    <Link href="/" className='btns  btn_md border-0 gray-text'>Schedule demo</Link>
                    <Link href="/" className='btns btn_md btn_primary'>Get started</Link>
                </Stack>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
    </>
  )
}

export default Header