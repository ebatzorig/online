import React, { useState } from "react";
import { Form } from '@themesberg/react-bootstrap';
import { Button } from '@themesberg/react-bootstrap';


export const FooterOfLock = () => {
    return (
            <Form>
            <Form.Group>
                <Form.Label>Зарын хэсэг</Form.Label>
                <Form.Control as="textarea" rows="4" placeholder="Бид таны барааг түргэн шуурхай хүргэх үйлчилгээг үзүүлж байна" />
                <Button variant="primary" className="m-1">Хадгалах</Button>
            </Form.Group>
            </Form>
    );
};