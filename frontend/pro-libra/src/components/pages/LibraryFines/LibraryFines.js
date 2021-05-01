import React from 'react'
import {
  Table,
  Col
} from 'react-bootstrap';
import '../BorrowerList/TableList.css';

function LibraryFines() {
  return (
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
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>12</td>
                    <td>19.000</td>
                    <td>Hutang</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>della</td>
                    <td>12</td>
                    <td>19.000</td>
                    <td>Hutang</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Iqbal</td>
                    <td>12</td>
                    <td>19.000</td>
                    <td>Hutang</td>
                  </tr>
                </tbody>
              </Table>
        </Col>        
      )
}

export default LibraryFines;