import React from "react";
import {Transition} from 'react-spring/renderprops'

var toggle = [
    {props: 'Louis Walsh'},
    {props: 'Software Developer'}
  ]; 

class TransitionTitle extends React.Component {
    render() {
        return(
                <Transition
                items={toggle}
                from={{ position: 'absolute', opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}>
                {toggle =>
                    toggle
                    ? props => <div style={props}>Louis Walsh</div>
                    : props => <div style={props}>Software Engineer</div>
                }
                </Transition>


)}
}


export default TransitionTitle;