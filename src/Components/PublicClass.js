import Plotly from 'plotly.js'

const al = id => {
    var data = [
        {
            x: ['2013-10-04', '2013-11-04', '2013-12-04'],
            y: [1, 3, 6],
            type: 'scatter'
        }
    ];

    Plotly.newPlot(id, data);
}


export {al}