import React from "react";
import {Spring} from 'react-spring/renderprops'


class SpringTitle extends React.Component {
    render() {
        return(
            <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}>
            {props => <div style={props}>Louis!</div>}
            </Spring>

)}
}


export default SpringTitle;