// 配置路由规则
import React from 'react';
import {Router, Route, NavLink, Switch, Redirect} from 'dva/router'
import Home from '../components/home'

let fn = function ({history, app}) {
    return (
        <Router history={history}>
            <React.Fragment>
                <Route path="/home" exact component={Home} />
            </React.Fragment>
        </Router>
    )
}

export default fn