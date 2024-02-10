import './Styles/Login.css';
import { Helmet } from 'react-helmet';  // added extra
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import MainPage from './Pages/MainPage'
import Login from './Login'


function Register() {
  const [err, setErr] = useState(false)
  const navigate = useNavigate()



  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      navigate('/MainPage')
    } catch (err) {
      setErr(true)
    }


  }
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Sixtyfour&display=swap" rel="stylesheet" />
        <style>{`
          h1 {
            font-family: 'Sixtyfour', sans-serif;
            margin-top: 200px;
            font-size: 70px;
            margin-left: -60px
          }
        `}</style>
      </Helmet>

      <h1>Teen<br></br>Finance<br></br>Manager</h1>

      <div className='box' >
        <h2 style={{ fontFamily: 'revert', fontSize: '50px', fontWeight: 'bolder', textAlign: 'center', marginBottom: '50px' }}>Register</h2>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" className="custom-placeholder" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" className="custom-placeholder" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Password" className="custom-placeholder" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          {/* <Button variant="outline-dark" type="submit" style={{ marginRight: '130px' }}>
            Register
          </Button >{' '} */}
          {err && <span>Something went wrong</span>}

        </Form>
        <p>Already Have An Account? <Link to="/Login">LogIn</Link></p>

      </div>
    </>
  )
}

export default Register