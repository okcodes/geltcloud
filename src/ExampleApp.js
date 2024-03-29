import React, {Component} from 'react';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {Chart} from 'react-chartjs-2';
import {ThemeProvider} from '@material-ui/styles';
import validate from 'validate.js';

import {chartjs} from './helpers';
import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.css';
import validators from './common/validators';
import ExampleRoutes from './ExampleRoutes';

const browserHistory = createBrowserHistory();

Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
    draw: chartjs.draw
});

validate.validators = {
    ...validate.validators,
    ...validators
};

export default class ExampleApp extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Router history={browserHistory}>
                    <ExampleRoutes/>
                </Router>
            </ThemeProvider>
        );
    }
}
