import React, {useState} from 'react';
import moment from 'moment';  
import {
  Col,
  Form, 
  Card,
  Button
} from 'react-bootstrap';
import './BorrowForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import APIService from '../../../APIService';

function BorrowForm(){
   
  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [id_peminjam, setid_peminjam] = useState('');
  const [nim, setnim] = useState(null);
  const [nip, setnip] = useState(null);
  const [tipe, settipe] = useState('');
  const [dept_name, setdept_name] = useState('');
  const [no_telepon, setno_telepon] = useState('');
  const [alamat, setalamat] = useState('');
  const [isbn, setisbn] = useState('');
  const [id_petugas, setid_petugas] = useState();
  const jenis = "Peminjaman";
  var tanggal_peminjaman = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
  var tanggal_urusan = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

  function insertBorrowerForm  () {
    APIService.InsertBorrowerForm({id_peminjam, first_name, last_name, dept_name, no_telepon, alamat, nim, nip, tipe})
    .then(response => console.log(response))
  };

  function insertBorrowForm () {
    setTimeout(() => {APIService.InsertBorrowForm({id_peminjam,isbn, tanggal_peminjaman})
    .then(response => console.log(response))},3000);
  };

  function insertServices () {
    setTimeout(() => {APIService.InputServices({tanggal_urusan, id_peminjam, id_petugas, jenis})
    .then(response => console.log(response))},5000);
  };

  function refreshPage() {
    setTimeout(() => {
      window.location.reload(false)
    },1000 );
  };
    
  return( 

    <Col className="borrow-form-col">
      <h1>Read At Home, Just Borrow It</h1>
      <Card className="form-card">
        <Card.Body>
          <Card.Title >
            <h2>Borrow Form</h2>
          </Card.Title>
          <div className="borrow-form">
            <Form.Group>
              <Form.Row>
                <Form.Label 
                  column lg={2} 
                  className="form-label"
                >
                  First Name 
                </Form.Label>
                <Col className="input-column">
                  <Form.Control 
                    size="lg" 
                    type="text" 
                    placeholder="First name..." 
                    className="input-field" 
                    onChange={(e) => setfirst_name(e.target.value)}
                  />
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
                <Form.Label 
                  column lg={2}  
                  className="form-label">
                  Last Name   
                </Form.Label>
                <Col className="input-column">
                  <Form.Control 
                    size="lg" 
                    type="text" 
                    placeholder="Last name..." 
                    className="input-field" 
                    onChange={(e) => setlast_name(e.target.value)}  
                  />
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
                <Form.Label 
                column lg={2} 
                className="form-label"
              >
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
                <Form.Label 
                  column lg={2} 
                  className="form-label"
                >
                 NIM
                </Form.Label>
                <Col className="input-column">
                  <Form.Control 
                    size="lg" 
                    type="text" 
                    placeholder="Your NIM if any..."  
                    className="input-field"
                    onChange={(e) => setnim(e.target.value)}  
                  />
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
                <Form.Label 
                  column lg={2} 
                  className="form-label"
                >
                 NIP
                </Form.Label>
                <Col className="input-column">
                  <Form.Control 
                    size="lg" 
                    type="text" 
                    placeholder="Your NIP if any..."  
                    className="input-field"
                    onChange={(e) => setnip(e.target.value)}  
                  />
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
                <Form.Label 
                  column lg={2} 
                  className="form-label">
                 Status
                </Form.Label>
                <Col className="input-column">
                  <Form.Control 
                    size="lg" 
                    type="text" 
                    placeholder="Mahasiswa/Dosen..."  
                    className="input-field"
                    onChange={(e) => settipe(e.target.value)}  
                  />
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
                <Form.Label 
                  column lg={2} 
                  className="form-label">
                  Department
                </Form.Label>
                <Col className="input-column">
                  <Form.Control 
                    size="lg" 
                    type="text" 
                    placeholder="Your department ..." 
                    className="input-field"
                    onChange={(e) => setdept_name(e.target.value)}
                  />
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
                <Form.Label 
                  column lg={2} 
                  className="form-label"
                >
                  Phone Number
                </Form.Label>
                <Col className="input-column">
                  <Form.Control 
                    size="lg" 
                    type="number" 
                    placeholder="0819xxxxxxxx"
                    className="input-field" 
                    onChange={(e) => setno_telepon(e.target.value)}
                  />
                </Col>
              </Form.Row>
              <br />
              <Form.Row>
                <Form.Label 
                  column lg={2} 
                  className="form-label"
                >
                  Address
                </Form.Label>
                <Col className="input-column">
                  <Form.Control 
                    size="lg" 
                    type="text" 
                    placeholder="Your address..." 
                    className="input-field"
                    onChange={(e) => setalamat(e.target.value)}
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
              <Form.Row>
                <Form.Label 
                  column lg={2} 
                  className="form-label"
                >
                 ISBN of The Book
                </Form.Label>
                <Col className="input-column">
                  <Form.Control 
                    size="lg" 
                    type="text" 
                    placeholder="ISBN of The Book you want to borrow ...  " 
                    className="input-field"
                    onChange={(e) => setisbn(e.target.value)}  
                  />
                </Col>
              </Form.Row>
              <br />
            </Form.Group>  
          </div>  
          <h3>Note : Because the limitation of our book stock, 
            you only can borrow just one book right now. 
            Sorry for the inconvenience.
          </h3>
          <Button 
            className="submit-button" 
            variant="primary"
            onClick={()=>{
              insertBorrowerForm();
              insertBorrowForm();
              insertServices(); 
              refreshPage();      
            }}
          >
            Submit
          </Button>
        </Card.Body>
      </Card>
    </Col> 

  );

};

export default BorrowForm;