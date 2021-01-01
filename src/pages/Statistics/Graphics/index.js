import React, { useState, useEffect } from 'react';
import { Access, Graphs } from './styles';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

const Graphics = ({ data }) => {
  const [graph, setGraph] = useState([]);
  const [totalAccess, setTotalAccess] = useState(0);

  useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });

    setTotalAccess(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b)
    );

    setGraph(graphData);
  }, [data]);

  return (
    <section>
      <Access>
        <p>Access: {totalAccess}</p>
      </Access>
      <Graphs></Graphs>
    </section>
  );
};

export default Graphics;
