import React from 'react';
import { extent } from 'd3-array';
import { line } from 'd3-shape';
import { select } from 'd3-selection';
import { scaleLinear, scaleTime } from 'd3-scale';
import { axisLeft, axisBottom } from 'd3-axis';

export default class Chart extends React.PureComponent {
    constructor(props) {
        super(props);
        this.createChart = this.createChart.bind(this);
    }

    componentDidMount() {
        this.createChart();

        window.addEventListener('resize', this.createChart);
    }

    componentDidUpdate() {
        this.createChart()
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.createChart)
    }

    createChart() {
        const { node, props: { params, data } } = this;
        const innerWidth = node.scrollWidth - params.marginLeft - params.marginRight;

        this.node.innerHTML = '';

        select(node)
            .attr('width', params.width)
            .attr('height', params.height);

        const g = select(node)
            .append('g')
            .attr('transform', `translate(${params.marginLeft},${params.marginTop})`);

        const x = scaleTime().rangeRound([0, innerWidth]);
        const y = scaleLinear().rangeRound([params.innerHeight, 0]);
        const lines = line()
            .x(d => x(d.date))
            .y(d => y(d.value));

        x.domain(extent(data, d => d.date));
        y.domain(extent(data, d => d.value));

        g.append('g')
            .attr('transform', `translate(0,${350})`)
            .call(axisBottom(x))
            .select('.domain')
            .remove();

        g.append('g')
            .call(axisLeft(y))
            .append('text')
            .attr('fill', '#000')
            .attr('transform', 'rotate(-90)')
            .attr('y', 6)
            .attr('dy', '14px')
            .attr('text-anchor', 'end')
            .text('Price (USD)');

        g.append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', 'steelblue')
            .attr('stroke-linejoin', 'round')
            .attr('stroke-linecap', 'round')
            .attr('stroke-width', 1.5)
            .attr('d', lines);
    }

    render() {
        return (
            <React.Fragment>
                <h1>BTC cost chart</h1>
                <svg ref={node => this.node = node} />
            </React.Fragment>
        );
    }
}