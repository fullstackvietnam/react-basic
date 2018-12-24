import * as React from 'react';
import { Link } from 'react-router-dom';
import './about.scss';

export const AboutComponent = () => 
    <div className="about">
        <h2>About component !</h2>
        <Link to="/">Hello</Link>
    </div>