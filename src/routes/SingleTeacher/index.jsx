// External dependencies
import React from 'react';

import Navigation from './../../components/Navigation';
import SingleTeacherPage from './../../components/SingleTeacherPage';
import Footer from './../../components/Footer';

const SingleTeacher = () => (
        <div className="page-container">
            <Navigation page={'find-teacher'} />
            <SingleTeacherPage />
            <Footer />
        </div>
);

export default SingleTeacher;