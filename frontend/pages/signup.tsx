import React from 'react'
import MainLayout from '../layouts/MainLayout'
import { Row, Col, Form, Button } from 'react-bootstrap'

import api from '../api/api'
import { routes } from '../api/routes'
import { useAuth } from '../context/auth'
import AuthForm from '../components/AuthForm'


export default function login() {
    return (
        <AuthForm route={routes.signup} title={"Signup"} />
    )
}
// }
// export default function signup() {

//     const { setToken } = useAuth()

//     const handleFormSubmit = (e) => {
//         e.preventDefault()
//         const email = e.target.elements['email'].value;
//         const password = e.target.elements['password'].value;

//         api.post(routes.signup, { email, password })
//             .then((response) => {
//                 const token = response.data
//                 setToken(token)
//             })
//     }

//     return (
//         <div>
//             <MainLayout>
//                 <Row className="justify-content-md-center">
//                     <Col md="auto" className="pt-5">
//                         <h3>
//                             Signup
//                         </h3>
//                     </Col>
//                 </Row>

//                 <Row className="justify-content-md-center">
//                     <Form onSubmit={handleFormSubmit}>
//                         <Form.Group controlId="formBasicEmail">
//                             <Form.Label>Email address</Form.Label>
//                             <Form.Control name="email" type="email" placeholder="Enter email" />
//                             <Form.Text className="text-muted">
//                                 We'll never share your email with anyone else.
//                         </Form.Text>
//                         </Form.Group>

//                         <Form.Group controlId="formBasicPassword">
//                             <Form.Label>Password</Form.Label>
//                             <Form.Control name="password" type="password" placeholder="Password" />
//                         </Form.Group>
//                         <Form.Group controlId="formBasicCheckbox">
//                             <Form.Check type="checkbox" label="Check me out" />
//                         </Form.Group>
//                         <Button variant="primary" type="submit" className="btn-block">
//                             Submit
//                         </Button>
//                     </Form>
//                 </Row>

//             </MainLayout>
//         </div>
//     )
// }
