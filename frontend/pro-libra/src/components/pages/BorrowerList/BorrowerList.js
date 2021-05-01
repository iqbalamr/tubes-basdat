import React from 'react';
import {
  Table,
  Col
} from 'react-bootstrap';
import './TableList.css';

const BorrowerList = () => {
  return (
    <Col className="borrower-column" >
      <h1 className="borrower-title">Here are the list of borrower </h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>ISBN of The Book</th>
                <th>Date of Borrow</th>
                <th>Date of Return</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>1291013121368</td>
                <td>2021-05-19</td>
                <td>2021-05-22</td>
                <td>Belum dikembalikan</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Manuel</td>
                <td>1291013121368</td>
                <td>2021-05-19</td>
                <td>2021-05-22</td>
                <td>Belum dikembalikan</td>
              </tr><tr>
                <td>1</td>
                <td>Dhifaf</td>
                <td>1291013121368</td>
                <td>2021-05-19</td>
                <td>2021-05-22</td>
                <td>Belum dikembalikan</td>
              </tr>
            </tbody>
          </Table>
    </Col>        
  )
}

export default BorrowerList





