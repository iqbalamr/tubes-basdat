import React, {useState, useEffect} from 'react';
import {
  Col,
  Form, 
  Card,
  Button
} from 'react-bootstrap';
import moment from 'moment';
import APIService from '../../../APIService';  

function ReturnForm(){

  const [isbn, setisbn] = useState('');
  const [id_peminjam, setid_peminjam] = useState('');
  const [data, setData] = useState([]);
  const [jumlah_denda, setjumlah_denda] = useState(0);
  const status_peminjaman = "Sudah dikembalikan";
  const jenis = "Pengembalian";
  const [id_petugas, setid_petugas] = useState();
  var tanggal_urusan = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
  var tanggal_pengembalian = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

	function coba(){
		fetch(`http://127.0.0.1:8000/api/return/${id_peminjam}-${isbn}/`, {
			'method': 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Token 915cb9e6ca7f5996fc3a8f1bd9929e3527a38814'
			}
		})
		.then((response)=> response.json())
		.then((json) => setData(json))
		.catch(err => console.log(err))
	};

  // var dateBorrow=moment(data.tanggal_peminjaman);
  // var dateReturn=moment(tanggal_pengembalian);
  // var totalDay= dateReturn.diff(dateBorrow, 'days');
  // console.log(dateBorrow)
  // console.log(data.tanggal_peminjaman);
  // console.log(tanggal_pengembalian)
  // console.log(totalDay);

  // if (totalDay>Number(7)){
  //   setTimeout(()=>{setjumlah_denda((totalDay - 7) * 10000)})
  //   console.log(jumlah_denda)
  //   // const jumlah_hari_telat = ;
  //   setTimeout(()=>{setjumlah_hari_telat(totalDay-7)})
  //   console.log(jumlah_hari_telat)
  //   setTimeout(() => {APIService.Fines({id_peminjam, jumlah_denda, jumlah_hari_telat})
  //   .then(response => console.log(response))},4000);
  // }
  

  var dateBorrow=moment(data.tanggal_peminjaman);
  var dateReturn=moment(tanggal_pengembalian);
  var totalDay= dateReturn.diff(dateBorrow, 'days');
  console.log(data.tanggal_peminjaman);
  console.log(tanggal_pengembalian)
  console.log(totalDay);
  console.log(jumlah_denda)
  if (totalDay>7){
    setjumlah_denda(((totalDay - 7) * 10000));
  }

// {
//   "id_peminjam": "96",
//   "isbn": "12314012",
//   "tanggal_peminjaman": "2021-04-30T08:18:51Z",
//   "tanggal_pengembalian": null,
//   "status_peminjaman": "Sudah dikembalikan"
// }
  
  // console.log(jumlah_denda);
  
  function finesCount () {
    
      const jumlah_hari_telat = dateReturn.diff(dateBorrow, 'days');
      setTimeout(() => {APIService.Fines({id_peminjam, jumlah_denda,jumlah_hari_telat})
      .then(response => console.log(response))},3000);
  };

  function insertServices () {
    setTimeout(() => {APIService.InputServices({tanggal_urusan, id_peminjam, id_petugas, jenis})
    .then(response => console.log(response))},3000);
  };

  function returnBook () {
    APIService.ReturnBook(id_peminjam, isbn, {status_peminjaman, tanggal_pengembalian})
    .then(response => console.log(response))
  };

   function refreshPage() {
    setTimeout(() => {
      window.location.reload(false)
    },5000 );
  };

  return (
    <>
      <h1>Kindly Return The Book Please</h1>
      <Card className="form-card">
          <Card.Body>
          <Card.Title >
            <h2>Return Form</h2>
          </Card.Title>
          <div className="borrow-form">
          <Form.Group>
              
              <Form.Row>
                <Form.Label column lg={2} className="form-label">
                  Id Number
                </Form.Label>
                <Col className="input-column">
                  <Form.Control 
                    size="lg" 
                    type="text" 
                    placeholder="Your id..." 
                    className="input-field" 
                    onChange={(e) => setid_peminjam(e.target.value)}  
                  />
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
                <Form.Label column lg={2} className="form-label">
                 ISBN of The Book
                </Form.Label>
                <Col className="input-column">
                  <Form.Control 
                    size="lg" 
                    type="text" 
                    placeholder="ISBN of The Book That You Want to Return ...  " 
                    className="input-field"
                    onChange={(e) => setisbn(e.target.value)}
                  />
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
                <Form.Label 
                  column lg={2} 
                  className="form-label"
                >
                  Active admin id
                </Form.Label>
                <Col className="input-column">
                  <Form.Control 
                    size="lg" 
                    type="text" 
                    placeholder="Your address..." 
                    className="input-field"
                    onChange={(e) => setid_petugas(e.target.value)}
                  />
                </Col>
              </Form.Row>
              <br />
            </Form.Group>  
          </div>  
          <Button 
            className="submit-button" 
            onClick={()=>
              returnBook();
              // finesCount();
              insertServices();
              refreshPage();
              coba(id_peminjam, isbn)
            }
            variant="primary"
          >
            Submit
          </Button>
          </Card.Body>
        </Card>
    </>
  )
}

export default ReturnForm;
