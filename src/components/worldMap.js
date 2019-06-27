import * as d3 from 'd3';
import React, { Component } from 'react'
import worlddata from '../data/world'

class WorldMap extends Component {

  constructor(props) {
    super(props);
  }

   render() {
     const w = this.props.width
     const h = this.props.height

      const projection = d3.geoMercator()
      .scale(150)
      .translate( [w / 2, h / 1.5]);

      const pathGenerator = d3.geoPath()
        .projection(projection)

      const countries = worlddata.features
         .map((d,i) => <path
         key={'path' + i}
         d={pathGenerator(d)}
         fill={ `rgba(38,50,56,${ 1 / worlddata.features.length * i})` }
         stroke="yellow"
         strokeWidth={ 0.5 }
         className='countries'
         />)

     return <svg width={960} height={500}>
     {countries}
     </svg>
   }
}
export default WorldMap
