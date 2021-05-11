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


function LoginForm (){

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useCookies(['mytoken']);
  
  let history = useHistory();

  useEffect(() => {
    if(token['mytoken']){
      history.push('/manage-book')
    }
    // else{
    //   history.push('/login')
    // }
  },[token])
  
  const loginBtn = () => {
    APIService.Login({username, password})
    .then(resp => setToken('mytoken',resp.token))
    .catch(error => console.log(error))
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
          onClick={loginBtn}  
        >
           enter {/* <Link className="login-link" to="/manage-book/add-book" >Login</Link> */}
        </Button>
      </Card.Body>
      </Card>
   </div>
     </div>
  );
};

export default LoginForm
