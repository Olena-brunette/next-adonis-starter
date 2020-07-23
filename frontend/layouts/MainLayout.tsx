import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Navbar from '../components/Navbar'




type ChildrenType = React.ReactNode

export default function MainLayout({ children }: { children: ChildrenType }) {
    return (
        <>
            <Navbar></Navbar>
            <Container>
                <Row>
                    <Col>
                        {children}
                    </Col>
                </Row>
            </Container>
        </>
    )
}
