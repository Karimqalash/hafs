import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useRouteMatch } from 'react-router-dom';

const DashboardSidebar = () => {
    const { path } = useRouteMatch();

    return (
        <div className="dashboard__sidebar">
            <Nav className="flex-column" activeKey={path} >
                <Nav.Item>
                    <Nav.Link eventKey="/student-dashboard" href='/student-dashboard'>
                            My Dashboard
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/student-dashboard/homework" href="/student-dashboard/homework">
                            Home Work
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="5">
                        My Profile
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default DashboardSidebar;