import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useRouteMatch } from 'react-router-dom';

const StudentDashboardSidebar = () => {
    const { path } = useRouteMatch();

    return (
        <div className="dashboard__sidebar">
            <Nav className="flex-column" activeKey={path} >
                <Nav.Item>
                    <Nav.Link eventKey="/dashboard" href='/dashboard'>
                            My Dashboard
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/dashboard/classroom" href='/dashboard/classroom'>
                            Classroom
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/dashboard/schedule" href='/dashboard/schedule'>
                            Schedule
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/dashboard/homework" href='/dashboard/homework'>
                            Home Work
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/dashboard/profile" href='/dashboard/profile'>
                        My Profile
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default StudentDashboardSidebar;