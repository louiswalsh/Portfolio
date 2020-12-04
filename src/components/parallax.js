import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import React from "react";
import ReactDOM from 'react-dom'

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`


class PortfolioParallax extends React.Component {
    render() {
        return(
        <Parallax ref={(ref) => (this.Parallax = ref)} pages={3}>
             <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73', backgroundSize: '180%', }} />
             <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
             <ParallaxLayer offset={0} speed={1} style={{ backgroundColor: '#909090' }} />

             <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />

            <ParallaxLayer 
            offset={0} 
            speed={0.5}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span>Louis Walsh Portfolio Site</span>
            </ParallaxLayer>

            <ParallaxLayer 
            offset={1} 
            speed={0.5} 
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span>Louie</span>
            </ParallaxLayer>

            <ParallaxLayer 
            offset={2} 
            speed={0.5}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span>Walsh</span>
            </ParallaxLayer>
            
        </Parallax>
        )}
}

export default PortfolioParallax;