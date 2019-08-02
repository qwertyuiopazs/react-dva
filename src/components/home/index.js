import React, { Component,Fragment } from 'react';
import {connect} from 'dva'

class Home extends Component {
    render() {
        return (
            <Fragment>
                {
                    this.props.num
                }
                <button onClick={this.props.changeNum}>+++++</button>
            </Fragment>
        );
    }
}

const mapState = (state) => ({
    num: state.home.num
})

const mapDispatch = (dispatch) => ({
    changeNum() {
        dispatch({
            type: 'home/changeNum',
            payload: {num: 888}
        })
    }
})

export default connect(mapState, mapDispatch)(Home);