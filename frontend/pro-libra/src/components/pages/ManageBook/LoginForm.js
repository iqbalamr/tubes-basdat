import React,{useState, useEffect} from 'react';
import {
  Form,
  Button,
  Card
} from 'react-bootstrap';
import APIService from '../../../APIService';
import {Link, useHistory} from 'react-router-dom';
import {useCookies} from 'react-cookie';
import './ManageBook.css';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
  return fetch (`http://127.0.0.1:8000/auth/`, {
      'method': 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
        body: JSON.stringify(credentials)
    }).then(response => response.json())
 }


function LoginForm ({ setToken }){

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [token, setToken] = useCookies(['mytoken']);
  
  // let history = useHistory();

  // useEffect(() => {
  //   if(token['mytoken']){
  //     history.push('/manage-book')
  //   }
    // else{
      // history.push('/login')
    // }
  // },[token])
  
  // const loginBtn = () => {
  //   APIService.Login({username, password})
  //   .then(resp => setToken('mytoken',resp.token))
  //   .catch(error => console.log(error))
  // }

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <div className="login-col">
   <div>
    <h1>Oopps you are not an admin, please login!</h1>
   </div>
   <div className="login-card">
   <Card className="form-login-card">
    <Card.Body>
    <Card.Title >
      <h2>Admin Login</h2>
    </Card.Title>
    <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Label className="login-label">Username</Form.Label>
          <Form.Control 
            type="username" 
            placeholder="Enter username" 
            className="input-field"
            onChange={e => setUsername(e.target.value)}  
          />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label className="login-label" >Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password" 
            className="input-field" 
            onChange={e => setPassword(e.target.value)}  
          />
        </Form.Group>
      </Form>
        <Button 
          className="login-button" 
          variant="primary"
          onClick={handleSubmit}  
        >
           enter {/* <Link className="login-link" to="/manage-book/add-book" >Login</Link> */}
        </Button>
      </Card.Body>
      </Card>
   </div>
     </div>
  );
};

LoginForm.propTypes = {
  setToken: PropTypes.func.isRequired
}
export default LoginForm
