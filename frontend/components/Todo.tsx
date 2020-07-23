import React from 'react'
import { routes } from '../api/routes'
import api from '../api/api'
import { mutate } from 'swr'
import { Row, Col, Button } from 'react-bootstrap'
import { FaTrash, FaUndo, FaCheck } from 'react-icons/fa'



export interface Todo {
    id: number,
    text: string,
    completed: boolean
}
export const Todo = ({ todo }: { todo: Todo }) => {
    const handleDelete = async () => {
        const { data } = await api.delete(routes.todos + `/${todo.id}`)
        mutate(routes.todos)
    }
    const handleComplete = async () => {
        const { data } = await api.put(routes.todos, { id: todo.id, completed: !todo.completed })
        mutate(routes.todos)
    }
    return (
        <Row className="pb-4">
            <Col>
                <p className={todo.completed ? 'text-success' : ''}>
                    {todo.text}
                </p>
            </Col>
            <Col md="auto">
                <Button onClick={handleDelete} variant="danger">
                    <FaTrash />
                </Button>
            </Col>
            <Col md="auto">
                <Button onClick={handleComplete} variant="primary">
                    {todo.completed ?
                        <FaUndo /> :
                        <FaCheck />
                    }
                </Button>
            </Col>
        </Row>
    )
}