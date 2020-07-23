import React, { useEffect } from 'react'
import MainLayout from '../layouts/MainLayout'
import { Row, Col, Form, Button, InputGroup } from 'react-bootstrap'
import api from '../api/api'
import { routes } from '../api/routes'

import useSWR, { mutate } from "swr";
import { useAuth } from '../context/auth'
import Router from 'next/router'

import { FaTrash, FaTicketAlt, FaCheck, FaUndo } from 'react-icons/fa'
import { Todo } from '../components/Todo'
import { AddTodoInput } from '../components/AddTodoInput'



export default function dashboard() {
    const { isAuthenticated } = useAuth()

    useEffect(() => {
        if (!isAuthenticated) Router.push('/')
    }, [isAuthenticated])

    const { data, error } = useSWR(isAuthenticated ? routes.todos : null, api.get)

    if (error) return <p> There was an error </p>
    if (!data) return <p> Loading... </p>
    let { data: todos } = data as { data: Todo[] }

    return (
        <MainLayout>
            <Row>
                <Col className="pt-5">
                    <h1>
                        This is your dashboard
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col md="6" className="pt-3">
                    <AddTodoInput />
                </Col>
            </Row>
            <Row>
                <Col md="6" className="pt-5">
                    {todos.map((todo) => (
                        <Todo todo={todo} />
                    ))}
                </Col>
            </Row>
        </MainLayout>
    )
}

