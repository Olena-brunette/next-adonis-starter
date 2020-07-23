import React from 'react'
import MainLayout from '../layouts/MainLayout'
import { Row, Col, Form, Button } from 'react-bootstrap'

import api from '../api/api'
import { routes } from '../api/routes'
import { useAuth } from '../context/auth'
import AuthForm from '../components/AuthForm'



export default function login() {
    return (
        <AuthForm route={routes.login} title={"Login"} />
    )
}
