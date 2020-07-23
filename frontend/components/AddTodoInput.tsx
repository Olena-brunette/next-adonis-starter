import React from 'react'
import api from '../api/api';
import { routes } from '../api/routes';
import { mutate } from 'swr';
import { InputGroup, Form, Button } from 'react-bootstrap';


export const AddTodoInput = () => {
    const handleAddTodo = async (e) => {
        e.preventDefault();
        const { data } = await api.post(routes.todos, { text: e.target.elements['text'].value })
        mutate(routes.todos)
    }
    return (
        <Form onSubmit={handleAddTodo}>
            <InputGroup>
                <Form.Control name="text" placeholder="Learn React" />
                <InputGroup.Append>
                    <Button type="submit">
                        Create Todo
                    </Button>
                </InputGroup.Append>
            </InputGroup>

        </Form>
    )
}