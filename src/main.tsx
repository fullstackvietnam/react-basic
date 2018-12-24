import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';

import { HelloComponent } from './hello/hello';
import { AboutComponent } from './about/about';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact={true} path="/" component={HelloComponent} />
            <Route path="/about" component={AboutComponent} />
        </Switch>
    </HashRouter>,
    document.getElementById('root')
);