import React from 'react';
import './Diagram.css';
import DiagramLogPengunjung from './DiagramLogPengunjung';
import DiagramPeminjam from './DiagramPeminjam';

function Diagram() {

  // const moment = require('moment');

  // let rows= [];
  // const [rows, setRows] = useState([]);

  // const request = (async ()=> {
    
  //   const response = await fetch(`http://127.0.0.1:8000/api/borrow`, {
	// 		'method': 'GET',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		}
	// 	})

  //   const data = await response.json();
  //   tgl_peminjaman(data);
    
  // })();

  // function tgl_peminjaman(data){

  //   rows=data;
  
  // }
	
	// useEffect(() => {

	// 	fetch('http://127.0.0.1:8000/api/borrow/', {
	// 		'method': 'GET',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		}
	// 	})
	// 	.then((response)=> response.json())
	// 	.then((json) => setRows(json))
	// 	.catch(err => console.log(err))

	// }, [])

//   const rows = [
//     {
//         "id_peminjam": "999909",
//         "isbn": "0-7475-3269-9",
//         "tanggal_peminjaman": "2021-05-10T16:40:38Z",
//         "tanggal_pengembalian": null,
//         "status_peminjaman": "Belum dikembalikan"
//     },
//     {
//         "id_peminjam": "21386",
//         "isbn": "12312546",
//         "tanggal_peminjaman": "2021-05-12T10:51:07Z",
//         "tanggal_pengembalian": null,
//         "status_peminjaman": "Suda dikembalikan"
//     },
//     {
//         "id_peminjam": "21386",
//         "isbn": "12312546",
//         "tanggal_peminjaman": "2021-05-12T10:51:07Z",
//         "tanggal_pengembalian": null,
//         "status_peminjaman": "Suda dikembalikan"
//     },
//     {
//       "id_peminjam": "999909",
//       "isbn": "0-7475-3269-9",
//       "tanggal_peminjaman": "2021-05-10T16:40:38Z",
//       "tanggal_pengembalian": null,
//       "status_peminjaman": "Belum dikembalikan"
//     },
//     {
//       "id_peminjam": "999909",
//       "isbn": "0-7475-3269-9",
//       "tanggal_peminjaman": "2021-05-10T16:40:38Z",
//       "tanggal_pengembalian": null,
//       "status_peminjaman": "Belum dikembalikan"
//     },
//     {
//         "id_peminjam": "21386",
//         "isbn": "12312546",
//         "tanggal_peminjaman": "2021-05-12T10:51:07Z",
//         "tanggal_pengembalian": null,
//         "status_peminjaman": "Suda dikembalikan"
//     }
// ]

  // let res = {};  

  // setData.tanggal_peminjaman.forEach(item => {
  //     let month = moment(item.date).startOf('month');
  //     res[month] = res[month] || { count: 0, responses: [] };
  //     res[month].count++;
  //     res[month].responses.push(item);
  // });

  
  // console.log(res)
//   var occurences = rows.reduce(function (r, row) {
//     r[row.status_peminjaman] = ++r[row.status_peminjaman] || 1;
//     return r;
//   }, {});

//   var result = Object.keys(occurences).map(function (key) {
//       return { key: key, value: occurences[key] };
//   });

//   console.log(result);

//   var labels = result.map(function(e) {
//     return e.key;
//  });
//  var dataset = result.map(function(e) {
//   return e.value;
// });

//   const data = {
//     labels: labels,
//     datasets: [
//       {
//         label: 'Status kepeminjaman buku',
//         data: dataset,
//         backgroundColor: [
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)',
//         ],
//         borderColor: [
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)',
//         ],
//         borderWidth: 1,
//       },
//     ],

//   };
//   const options = {
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             beginAtZero: true,
//           },
//         },
//       ],
//     },
//   };


  return (
    <div className="diagram">
      <DiagramPeminjam/>
      <br/>
     <DiagramLogPengunjung/>
    </div>
  )
}

export default Diagram
