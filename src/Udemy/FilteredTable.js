import React from 'react';
import './style.css';

export default function App() {
  const res = [
    { name: 'Jhon', description: 'Browser to write', date: '18-08-2019' },
    { name: 'Wick', description: 'Statements Reference', date: '23-06-2020' },
    { name: 'Steams', description: 'reserved words', date: '09-02-2021' },
    { name: 'Victor', description: 'Constant value', date: '12-07-2022' },
    {
      name: 'Corner',
      description: 'following table lists',
      date: '27-01-2023',
    },
  ];
  const [data, setData] = React.useState([...res]);

  const handleChange = (query) => {
    const filteredData = res.filter((item) => {
      return query.toLowerCase() === ''
        ? item
        : item.name.toLowerCase().includes(query);
    });
    setData(filteredData);
  };

  return (
    <div>
      <h1>
        Filter table by name
        <input onChange={(e) => handleChange(e.target.value)} />
      </h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Start Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((x, index) => (
            <tr key={index}>
              <td>{x.name}</td>
              <td>{x.description}</td>
              <td>{x.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      ****************************
    </div>
  );
}
