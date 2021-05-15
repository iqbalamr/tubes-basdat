import React,{useState, useEffect} from 'react';
import './Diagram.css';
import {Pie} from "react-chartjs-2";

function DiagramPeminjam() {

  const [rows, setRows] = useState([]);

  useEffect(() => {

		fetch('https://f7505cc43e45.ngrok.io/api/borrow/', {
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
    r[row.status_peminjaman] = ++r[row.status_peminjaman] || 1;
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
          '#64dfdf',
          '#5390d9',
        ],
        borderColor: [
          '#64dfdf',
          '#5390d9',
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
    <h3>Status Kepeminjaman Buku</h3>
       <div className="diagram-area">
       <Pie
          className="background"
          data={data}
          height={10}
          width={35}
          options={options}
        />
       </div>
      {/* </div> */}
    </>
  )
}

export default DiagramPeminjam
