import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import React from "react";


class PortfolioParallax extends React.Component {
    render() {
        return(
        <Parallax ref={(ref) => (this.Parallax = ref)} pages={3}>
            <ParallaxLayer offset={0} speed={0.5}>
                <span onClick={() => this.parallax.scrollTo(1)}>Layers can contain anything</span>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.5}>
                <span onClick={() => this.parallax.scrollTo(1)}>Layers can contain anything</span>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.5}>
                <span onClick={() => this.parallax.scrollTo(1)}>Layers can contain anything</span>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.5}>
                <span onClick={() => this.parallax.scrollTo(1)}>Layers can contain anything</span>
            </ParallaxLayer>            <ParallaxLayer offset={0} speed={0.5}>
                <span onClick={() => this.parallax.scrollTo(1)}>Layers can contain anything</span>
            </ParallaxLayer>
        </Parallax>
        )}
}

export default PortfolioParallax;