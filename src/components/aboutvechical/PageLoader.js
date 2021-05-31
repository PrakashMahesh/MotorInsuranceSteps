import React from 'react';
import {connect} from 'react-redux';
import { Spinner } from 'react-bootstrap';
import './App.css';


function PageLoader(props) {
    if(!props.loading) return null;
    return (
        <div className="loader-container">
                <div className="loader">
                    <Spinner animation="border" />
                </div>
            </div>
    );
}

const mapStateToProps = (state) =>({ loading: state.loader.loading});
export default connect(mapStateToProps)(PageLoader);
