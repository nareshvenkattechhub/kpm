import { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isSignUp ? "Sign Up Data" : "Login Data", formData);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4" style={{ width: "350px" }}>
        <h3 className="text-center">{isSignUp ? "Sign Up" : "Login"}</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            {isSignUp ? "Sign Up" : "Login"}
          </Button>
        </Form>
        <div className="text-center mt-3">
          <Button variant="link" onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign Up"}
          </Button>
        </div>
      </Card>
    </Container>
  );
}
