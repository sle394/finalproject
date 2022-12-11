import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function TopNav() {
    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand as={Link} to="/">Back to Home</Navbar.Brand>
            </Container>
        </Navbar>
    )
}