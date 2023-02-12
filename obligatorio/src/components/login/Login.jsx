import { login } from '../../services/services';
import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Login = () => {

  const userRef = useRef();
  const passRef = useRef();

  const loginApp = async () => {
    try {
      const user = userRef.current.value;
      const pass = passRef.current.value;
      const response = await login(user, pass);

      if (response.codigo == 200) {
        localStorage.setItem("apiKey", response.apiKey)
      } else {
        localStorage.setItem("apiKey", "")
      }

      console.log('response', response)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <div className='login'>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicUser">
          <Form.Label>User</Form.Label>
          <Form.Control ref={userRef} type="User" placeholder="Enter user" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passRef} type="password" placeholder="Password" />
        </Form.Group>
        {
          userRef.current.value == '' || passRef.current.value == '' ? <Button variant="primary" type="Login" onClick={loginApp} disabled>
            Login
          </Button> :
            <Button variant="primary" type="Login" onClick={loginApp}>
              Login
            </Button>
        }
      </Form>
    </div>
  )
}

export default Login