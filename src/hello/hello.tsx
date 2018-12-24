import * as React from 'react';
import { Link } from 'react-router-dom';

export const HelloComponent = () =>
  <div>
    <h2>Hello component !</h2>
    <Link to="/about">About</Link>
  </div>
