import React,{useState, useEffect} from 'react';
import './Diagram.css';
import {Bar} from "react-chartjs-2";


function DiagramLogPengunjung() {

  const [rows, setRows] = useState([]);

  useEffect(() => {

		fetch('http://127.0.0.1:8000/api/services/', {
			'method': 'GET',
			headers: {
				'Content-Type': 'application/json',
			}
		})
		.then((response)=> response.json())
		.then((json) => setRows(json))
		.catch(err => console.log(err))

	}, [])

  var occurences = rows.reduce(function (r, row) {
    r[row.jenis] = ++r[row.jenis] || 1;
    return r;
  }, {});

  var result = Object.keys(occurences).map(function (key) {
      return { key: key, value: occurences[key] };
  });

  console.log(result);

  var labels = result.map(function(e) {
    return e.key;
  });
  var dataset = result.map(function(e) {
    return e.value;
  });

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Log Kegiatan Pengunjung',
        data: dataset,
        backgroundColor: [
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],

  };
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
    <h3>Log Kegiatan Pengunjung</h3>
        <Bar
          className="background"
          data={data}
          height={10}
          width={35}
          options={options}
        />
    </>
  )
}

export default DiagramLogPengunjung
