import React, {useState, useEffect} from 'react';
import {
  Table,
  Col
} from 'react-bootstrap';
import './TableList.css';

function BorrowerList(){

  const [data, setData] = useState([]);

	useEffect(() => {

		fetch('http://127.0.0.1:8000/api/borrow-info/', {
			'method': 'GET',
			headers: {
				'Content-Type': 'application/json',
			}
		})
		.then((response)=> response.json())
		.then((json) => setData(json))
		.catch(err => console.log(err))

	}, []);

  return (

    <Col className="borrower-column" >
      <h1 className="borrower-title">Here are the list of borrower </h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>ISBN of The Book</th>
            {/* <th>Book's Title</th> */}
            <th>Date of Borrow</th>
            <th>Date of Return</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((info, index) => {
            return (
              <tr>
              <td>{index+1}</td>
              <td>{info.id_peminjam.['first_name']} {info.id_peminjam.['last_name']}</td>
              <td>{info.isbn}</td>
              {/* <td>{info.isbn}</td> */}
              <td>{info.tanggal_peminjaman}</td>
              <td>{info.tanggal_pengembalian}</td>
              <td>{info.status_peminjaman}</td>
            </tr>
            );
          })}
        </tbody>
      </Table>
    </Col>  

  );

};

export default BorrowerList





