import { useState } from 'react';
import {
  Dropdown,
  Form,
  Button,
  Card,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import { useForm } from 'react-hook-form';

function LoginForm() {
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({ mode: 'onChange' });
  // detects real-time validation

  const onSubmit = (data) => {
    console.log('Login Data:', data);
    setShow(false); // Close dropdown after login
  };
// bootstrap
  return (
    <Container fluid className="p-3">
      <Row className="justify-content-end">
        <Col xs="auto">
          <Dropdown
            show={show}
            onToggle={() => setShow(!show)}
            align={{ sm: 'end' }}
            autoClose="outside"
          >
            <Dropdown.Toggle
              variant="primary"
              id="dropdown-login"
              className="px-3 py-2"
            >
              Login
            </Dropdown.Toggle>

            <Dropdown.Menu
              className="p-0"
              style={{
                width: '100%',
                maxWidth: '90vw',
                minWidth: '260px',
              }}
            >
              <Card className="p-4 shadow-sm border-0">
                <h4 className="text-center mb-4">Sign in to your account</h4>

                <Form onSubmit={handleSubmit(onSubmit)} noValidate>
                  {/* Username */}
                  <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter username"
                      {...register('username', {
                        required: 'Username is required',
                        minLength: {
                          value: 4,
                          message: 'Username must be at least 4 characters',
                        },
                      })}
                      isInvalid={!!errors.username}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.username?.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Password */}
                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      {...register('password', {
                        required: 'Password is required',
                        minLength: {
                          value: 6,
                          message: 'Password must be at least 6 characters',
                        },
                      })}
                      isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password?.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="success"
                    className="w-100"
                    disabled={!isValid || isSubmitting}
                    // conditionally disables button
                  >
                    {isSubmitting ? 'Logging in...' : 'Login'}
                  </Button>
{/* bootstrap styling aligns text professionally */}
                  <p className="fst-italic text-muted small mt-3 text-center"> 
                    We do not store your password. This form is for demonstration purposes only.
                  </p>
                </Form>
              </Card>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginForm;
