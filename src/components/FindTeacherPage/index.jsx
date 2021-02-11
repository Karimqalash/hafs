import React from 'react';
import { Form, Button } from 'react-bootstrap';
import TeamCard from '../HomeContent/TeamCard';

const FindTeacher = () => (
    <section className="find-teacher">
        <div className="container">
            <div className="find-teacher__content">
                <div className="find-teacher__sidebar">
                    <Form>
                        <Form.Group controlId="formSearch" className="mb-5">
                            <Form.Control type="text" placeholder="Search for teacher" />
                        </Form.Group>
                        <div className="find-teacher__sidebar--title mb-3">
                            <h3>
                                Filter By
                            </h3>
                            <Button className="btn btn--clear">Clear</Button>
                        </div>
                        <Form.Group controlId="formStatus" className="mb-3">
                            <Form.Label>Status:</Form.Label>
                            <Form.Check
                                type='checkbox'
                                id='online'
                                label='Online'
                            />
                            <Form.Check
                                type='checkbox'
                                id='offline'
                                label='Offline'
                            />
                        </Form.Group>
                        <Form.Group controlId="formSubject" className="mb-3">
                            <Form.Label>Subject:</Form.Label>
                            <Form.Check
                                type='checkbox'
                                id='recitation'
                                label='Recitation'
                            />
                            <Form.Check
                                type='checkbox'
                                id='arabic'
                                label='Arabic'
                            />
                            <Form.Check
                                type='checkbox'
                                id='hifz'
                                label='Hifz'
                            />
                            <Form.Check
                                type='checkbox'
                                id='tajweed'
                                label='Tajweed'
                            />
                        </Form.Group>
                        <Form.Group controlId="formLanguages" className="mb-3">
                            <Form.Label>Spoken Languages:</Form.Label>
                            <Form.Check
                                type='checkbox'
                                id='arabic'
                                label='Arabic'
                            />
                            <Form.Check
                                type='checkbox'
                                id='bengali'
                                label='Bengali'
                            />
                            <Form.Check
                                type='checkbox'
                                id='english'
                                label='English'
                            />
                        </Form.Group>
                        <Form.Group controlId="formGender" className="mb-3">
                            <Form.Label>Gender:</Form.Label>
                            <Form.Check
                                type='checkbox'
                                id='male'
                                label='Male'
                            />
                            <Form.Check
                                type='checkbox'
                                id='female'
                                label='Female'
                            />
                        </Form.Group>
                        <Form.Group controlId="formHourRate" className="mb-3">
                            <Form.Label>Hourly Rate:</Form.Label>
                            <Form.Check
                                type='checkbox'
                                id='male'
                                label='Male'
                            />
                            <Form.Check
                                type='checkbox'
                                id='female'
                                label='Female'
                            />
                        </Form.Group>
                    </Form>
                </div>
                <div className="find-teacher__results">
                    <div className="login-warning-box">Note , the invitation and chatting requires having an account, <a href="#">Login now</a></div>
                    <div className="find-teacher__teachers">
                        <TeamCard />
                        <TeamCard />
                        <TeamCard />
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default FindTeacher;