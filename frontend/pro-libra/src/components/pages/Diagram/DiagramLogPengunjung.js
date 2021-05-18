import React,{useState, useEffect} from 'react';
import './Diagram.css';
import {Bar} from "react-chartjs-2";


function DiagramLogPengunjung() {

  const [rows, setRows] = useState([]);

  useEffect(() => {

		fetch('https://prolibra-api.loca.lt/api/services/', {
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

  // console.log(result);

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
          '#fcbf49',
          '#ef233c',
        ],
        borderColor: [
          '#fcbf49',
          '#ef233c',
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
    <div className="diagram-area">
      <Bar
          className="background"
          data={data}
          height={10}
          width={35}
          options={options}
        />
    </div>
    </>
  )
}

export default DiagramLogPengunjung
