import React, {useState} from 'react';
// import {Link, Switch, Route} from 'react-router-dom';
import {
  Col,
  Form, 
  Card,
  Button
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddBook.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import APIService from '../../../APIService';
import moment from 'moment';

const AddBook = () => {

  const [isbn, setisbn] = useState('');
  const [judul_buku, setjudul_buku] = useState('');
  const [penulis, setpenulis] = useState('');
  const [penerbit, setpenerbit] = useState('');
  const [jumlah_buku, setjumlah_buku] = useState();
  const [kategori, setkategori] = useState('');
  const [no_lokasi, setno_lokasi] = useState('');
  const [sinopsis, setsinopsis] = useState('');
  const [gambar, setgambar] = useState(null);
  const [id_petugas, setid_petugas] = useState(null);
  var tanggal_pendataan = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

  let formData = new FormData();
  formData.append('isbn', isbn);
  formData.append('judul_buku', judul_buku);
  formData.append('penulis',penulis);
  formData.append('penerbit', penerbit);
  formData.append('jumlah_buku', jumlah_buku);
  formData.append('kategori', kategori);
  formData.append('no_lokasi', no_lokasi);
  formData.append('sinopsis', sinopsis);
  formData.append('gambar', gambar);

  function insertBook(){

      return fetch (`http://127.0.0.1:8000/api/input-books/`, {
        'method': 'POST',
        headers: {
          // 'Authorization': 'Token 915cb9e6ca7f5996fc3a8f1bd9929e3527a38814'
        },
        body: formData
      }).then(response => response.json())
      .then(response => console.log(response))

  };

  function recordingBook(){

    setTimeout(() => {APIService.RecordingBook({id_petugas, isbn,tanggal_pendataan})
    .then(response => console.log(response))},1000);

  };

  function refreshPage(){

    setTimeout(() => {
      window.location.reload(false)
    },3000 );
  
  };

  return(
    <Col className="add-book-column">
      <h1>Add book Menu</h1>
      <Card className="form-card">
          <Card.Body>
            <Card.Title >
              <h2>Input New Book Data</h2>
            </Card.Title>
            <div className="borrow-form">
              <Form.Group>
                <Form.Row>
                  <Form.Label column lg={2} className="form-label">
                    Book Title
                  </Form.Label>
                  <Col className="input-column">
                    <Form.Control 
                      size="lg" 
                      type="text" 
                      placeholder="Book title's" 
                      className="input-field" 
                      onChange={(e) => setjudul_buku(e.target.value)}  
                    />
                  </Col>
                </Form.Row>
                <br />
                <Form.Row>
                  <Form.Label column lg={2}  className="form-label">
                    ISBN 
                  </Form.Label>
                  <Col className="input-column">
                    <Form.Control 
                      size="lg" 
                      type="text" 
                      placeholder="Book ISBN" 
                      className="input-field" 
                      onChange={(e) => setisbn(e.target.value)}  
                    />
                  </Col>
                </Form.Row>
                <br />
                <Form.Row>
                  <Form.Label column lg={2} className="form-label">
                    Writer
                  </Form.Label>
                  <Col className="input-column">
                    <Form.Control 
                      size="lg" 
                      type="text" 
                      placeholder="Writer’s name" 
                      className="input-field" 
                      onChange={(e) => setpenulis(e.target.value)}
                    />
                  </Col>
                </Form.Row>
                <br />
                <Form.Row>
                  <Form.Label column lg={2} className="form-label">
                    Publisher
                  </Form.Label>
                  <Col className="input-column">
                    <Form.Control 
                      size="lg" 
                      type="text" 
                      placeholder="Publisher name"  
                      className="input-field"
                      onChange={(e) => setpenerbit(e.target.value)}  
                    />
                  </Col>
                </Form.Row>
                <br />
                <Form.Row>
                  <Form.Label column lg={2} className="form-label">
                    Category
                  </Form.Label>
                  <Col className="input-column">
                    <Form.Control 
                      size="lg" 
                      type="text" 
                      placeholder="Book’s category" 
                      className="input-field"
                      onChange={(e) => setkategori(e.target.value)}  
                    />
                  </Col>
                </Form.Row>
                <br />
                <Form.Row>
                  <Form.Label column lg={2} className="form-label">
                    Location
                  </Form.Label>
                  <Col className="input-column">
                    <Form.Control 
                      size="lg" 
                      type="text" 
                      placeholder="Ex : S1L1N001"
                      className="input-field" 
                      onChange={(e) => setno_lokasi(e.target.value)}  
                    />
                  </Col>
                </Form.Row>
                <br />
                <Form.Row>
                  <Form.Label column lg={2} className="form-label">
                    Stock
                  </Form.Label>
                  <Col className="input-column">
                    <Form.Control 
                      size="lg" 
                      type="number" 
                      placeholder="Stock of the book in shelf" 
                      className="input-field"
                      onChange={(e) => setjumlah_buku(e.target.value)}
                    />
                  </Col>
                </Form.Row>
                <br />
                <Form.Row>
                  <Form.Label column lg={2} className="form-label">
                    Image
                  </Form.Label>
                  <Col className="input-column">
                  <input
                    id="custom-file"
                    // label={
                    //   checkImage()
                    // }
                    label="select"
                    custom
                    type="file"
                    className="input-img-field"
                    onChange={(e) => setgambar(e.target.files[0])}
                    accept="image/*"
                  />
                  </Col>
                </Form.Row>
                <br />
                <Form.Row>
                  <Form.Label column lg={2} className="form-label">
                  Synopsis
                  </Form.Label>
                  <Col className="input-column">
                    <Form.Control 
                      as="textarea" 
                      rows={8} 
                      placeholder="Book's synopsis" 
                      className="synopsis-field"
                      onChange={(e) => setsinopsis(e.target.value)}  
                    />
                  </Col>
                </Form.Row>
                <br />
                <Form.Row>
                  <Form.Label column lg={2} className="form-label">
                    Your ID
                  </Form.Label>
                  <Col className="input-column">
                    <Form.Control 
                      size="lg" 
                      type="number" 
                      placeholder="Your admin id" 
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
              variant="primary"
              onClick= {()=>{
                insertBook();
                // refreshPage();
                recordingBook();
              }}
            >
              Submit
            </Button>
          </Card.Body>
        </Card>
    </Col>
  )

};



export default AddBook
