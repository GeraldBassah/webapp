import React from "react";
import { Line } from 'react-chartjs-2';

class Linechart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['Asokwa', 'Adum', 'Tech Junction', 'Faadee'],
                datasets: [
                    {
                        label: 'Tolls',
                        data: [
                            22,
                            10,
                            5,
                            8
                        ],
                        backgroundColor: [
                            'red',
                            'yellow',
                            'green',
                            'blue'
                        ]
                    }
                ]
            }
        }

    }

    render() {
        return (
            <div className="chart">
                <Line
                    data={this.state.chartData}
                    width={100}
                    height={300}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            </div>
        );
    }
}

export default Linechart;
