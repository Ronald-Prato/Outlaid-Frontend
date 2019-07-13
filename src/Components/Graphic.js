import React, { useState } from "react";
import Plot from 'react-plotly.js'
import * as F from './PublicClass' 
import Plotly from 'plotly.js'
import { create } from "istanbul-reports";

const Graphic = () => {
    const [d1, setD1] = useState([1, 3, 6])
    const [d2, setD2] = useState([1.1, 2.8, 6.5])
    const transition = {
        duration: 1000,
        easing: 'cubic-in-out'
    }
    const frame = {
        duration: 1000
    }
    const trace1 = {
        type: "scatter",
        mode: "lines",
        x: ['2013-10-04', '2013-11-04', '2013-12-04'],
        y: d1,
        line: { color: '#17BECF' },
    }
    const trace2 = {
        type: "scatter",
        mode: "lines",
        x: ['2013-10-04', '2013-11-04', '2013-12-04'],
        y: d2,
        line: { color: '#7F7F7F' }
    }
    
    const layout = {
        title: 'Custom Range',
        width: 1000,
        // transition:{ transition },  
        // frame:{ frame }
        
        // xaxis: {
        //     range: [1,8],
        //     type: 'integer'
        // },
        // yaxis: {
        //     autorange: true,
        //     range: [86.8700008333, 138.870004167],
        //     type: 'linear'
        // }
    };
    const data = [trace1, trace2]
    
 
    const change = async () => {
        await setD1([1.5, 3.4, 6.7])
        await setD2([2, 3, 7])
        await console.log("%c D1", "color: steelblue; font-weight: bolder", d1)
        await console.log("%c D2", "color: steelblue; font-weight: bolder", d2)
    }

    return (
        <div id="chart">
            <div className="chartId"></div>
            <script>

            </script>
            <Plot 
                data={data} 
                layout={layout}

            />
            <button onClick={create}>Change</button>
        </div>
    )
}

export default Graphic