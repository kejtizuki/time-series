import * as d3 from 'd3';
import React, { Component } from 'react'
import worlddata from './world'

class WorldMap extends Component {

   render() {
     const w = 960
     const h = 500

      const projection = d3.geoMercator()
      .scale(150)
      .translate( [w / 2, h / 1.5]);

      const pathGenerator = d3.geoPath()
        .projection(projection)

      const countries = worlddata.features
         .map((d,i) => <path
         key={'path' + i}
         d={pathGenerator(d)}
         className='countries'
         />)
   return <svg width={960} height={500}>
   {countries}
   </svg>
   }
}
export default WorldMap
