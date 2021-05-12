import React, {useState} from 'react';
import {
  Col,
  Form, 
  Card,
  Button
} from 'react-bootstrap';
import moment from 'moment';
import APIService from '../../../APIService';  
import './ReturnForm.css'

function ReturnForm(){

  const [isbn, setisbn] = useState('');
  const [id_peminjam, setid_peminjam] = useState('');
  let setData= [];
  const status_peminjaman = "Sudah dikembalikan";
  const jenis = "Pengembalian";
  const [id_petugas, setid_petugas] = useState();
  var tanggal_urusan = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
  var tanggal_pengembalian = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

  
  const request = (async ()=> {
    
    const response = await fetch(`http://127.0.0.1:8000/api/return/${id_peminjam}-${isbn}/`, {
			'method': 'GET',
			headers: {
				'Content-Type': 'application/json',
			}
		})

    const data = await response.json();
    tgl_peminjaman(data);
    
  })();

  function tgl_peminjaman(data){

    setData= data;
  
  }

  function finesCount(){
    
    setTimeout(()=>{

      var dateBorrow=moment(setData.tanggal_peminjaman);
      var dateReturn=moment(tanggal_pengembalian);
      var totalDay= dateReturn.diff(dateBorrow, 'days');
      var jumlah_denda = 0;
      var jumlah_hari_telat = 0;

      if (totalDay>Number(7)){
        jumlah_denda = (totalDay - 7) * 1000;
        jumlah_hari_telat = totalDay - 7;
        setTimeout(() => {APIService.Fines({id_peminjam, jumlah_denda, jumlah_hari_telat})
        .then(response => console.log(response))},500);
      }
    },1000)

  };

  function insertServices () {

    setTimeout(() => {APIService.InputServices({tanggal_urusan, id_peminjam, id_petugas, jenis})
    .then(response => console.log(response))},1000)

  };

  function returnBook () {

    APIService.ReturnBook(id_peminjam, isbn, {status_peminjaman, tanggal_pengembalian})
    .then(response => console.log(response))

  };

   function refreshPage() {

    setTimeout(() => {
      window.location.reload(false)
    },3000 )

  };

  return (

    <Col className="return-form-col">
      <h1>Kindly Return The Book Please</h1>
      <Card className="form-card">
          <Card.Body>
          <Card.Title >
            <h2>Return Form</h2>
          </Card.Title>
          <div className="return-form">
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
            onClick={()=>{
              returnBook();
              finesCount();
              insertServices();
              refreshPage();
            }}
            variant="primary"
          >
            Submit
          </Button>
          </Card.Body>
        </Card>
    </Col>

  );

};

export default ReturnForm;
