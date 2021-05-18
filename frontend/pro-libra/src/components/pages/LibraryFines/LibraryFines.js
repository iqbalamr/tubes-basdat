import React, {useState, useEffect} from 'react';
import {
  Table,
  Col
} from 'react-bootstrap';
import '../BorrowerList/TableList.css';

function LibraryFines(){

  const [data, setData] = useState([]);

	useEffect(() => {

		fetch('https://prolibra-api.loca.lt/api/fines-list/', {
			'method': 'GET',
			headers: {
				'Content-Type': 'application/json',
			}
		})
		.then((response)=> response.json())
		.then((json) => setData(json))
		.catch(err => console.log(err))

	}, []);

  return(

    <Col className="borrower-column" >
      <h1 className="borrower-title">Here are the list of Fines </h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>The Number of Days Late</th>
            <th>Fines Nominal</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
        {data.map((info, index) => {
        return (
          <tr>
            <td>{index+1}</td>
            <td>{info.id_peminjam.['first_name']} {info.id_peminjam.['last_name']}</td>
            <td>{info.jumlah_hari_telat}</td>
            <td>{info.jumlah_denda}</td>
            <td>{info.status}</td>
          </tr>
          );
        })}
        </tbody>
      </Table>
    </Col>        
  );

};

export default LibraryFines;