import React,{useState, useEffect} from 'react';
import './Diagram.css';
import {Doughnut} from "react-chartjs-2";

function DiagramKategoriBuku() {

  const [rows, setRows] = useState([]);

  useEffect(() => {

		fetch('http://127.0.0.1:8000/api/books/', {
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
    r[row.kategori] = ++r[row.kategori] || 1;
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
        label: 'Status Kepeminjaman Buku',
        data: dataset,
        backgroundColor: [
          '#cdb4db',
          '#fcbf49',
          '#f72585',
          '#7209b7',
          '#3f37c9',
          '#4895ef',
        ],
        borderColor: [
          '#cdb4db',
          '#fcbf49',
          '#f72585',
          '#7209b7',
          '#3f37c9',
          '#4895ef',
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
       <h3>Banyak Buku per Kategori</h3>
       <div className="diagram-area">
       <Doughnut
          className="background"
          data={data}
          height={10}
          width={10}
          options={options}
        />
       </div>
    </>
  )
}

export default DiagramKategoriBuku
