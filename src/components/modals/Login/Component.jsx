import React, { useState } from 'react';
import { Alert, Modal, Form, Button } from 'react-bootstrap';


const Component = props => {
    const { loginModal, closeLoginModal, submitLogin, isTeacher, error, resetLoginError } = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = event => {
        event.preventDefault();
        submitLogin({
            email,
            password
        });
    }

    return (
        <Modal
            show={loginModal}
            onHide={closeLoginModal}
            aria-labelledby="login-modal"
            className="signup"
        >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="form-wrapper">
                <Form onSubmit={submitForm} >
                    <Alert variant="danger" show={error}>
                        Invalid email or password
                    </Alert>
                    <Form.Group controlId="formLoginEmail">
                        <Form.Control 
                            type="email" 
                            placeholder="Email address *" 
                            value={email} 
                            onChange={e => {
                                setEmail(e.target.value);
                                if (error) {
                                    resetLoginError();
                                } 
                            }} 
                            required 
                        />
                    </Form.Group>
                    <Form.Group controlId="formLoginPassword">
                        <Form.Control 
                            type="password" 
                            placeholder="Password *" 
                            value={password} 
                            onChange={e => {
                                setPassword(e.target.value);
                                if (error) {
                                    resetLoginError();
                                } 
                            }} 
                            pattern=".{6,}" 
                            required 
                        />
                    </Form.Group>
                    <Button className="btn btn--forget" >Forget password</Button>
                    <Button className="btn btn--primary" type="submit" >Login</Button>
                </Form>
            </div>
        </Modal.Body>
      </Modal>
    )
}

export default Component;