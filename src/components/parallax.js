import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import React from "react";
import TransitionTitle from './transition_title'
import SpringTitle from './spring_title'

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`


class PortfolioParallax extends React.Component {
    render() {
        return(
        <Parallax ref={(ref) => (this.Parallax = ref)} pages={3}>

             <ParallaxLayer offset={0} speed={1} style={{ backgroundColor: '#1E3D59' }} />
             <ParallaxLayer offset={0.5} speed={1} style={{ backgroundColor: '#1E3D59' }} />
             <ParallaxLayer offset={0.5} speed={0} style={{ backgroundColor: '#1E3D59' }} />
             <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#1E3D59' }} />

             <ParallaxLayer
              offset={1}
              speed={0}
              style={{ background: "linear-gradient(#1E3D59, #F5F0E1)" }}
             />

             <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#F5F0E1' }} />

             <ParallaxLayer
              offset={2}
              speed={0}
              style={{ background: "linear-gradient(#F5F0E1, #FF6E40)" }}
             />


             <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: '#FF6E40' }} />


             <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />



            <ParallaxLayer 
            offset={1} 
            speed={0.5} 
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <TransitionTitle />
            </ParallaxLayer>

            <ParallaxLayer 
            offset={0} 
            speed={0.5}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SpringTitle />
            </ParallaxLayer>
            
        </Parallax>
        )}
}

export default PortfolioParallax;