import { Form } from "react-bootstrap";

interface EmailInputProps {
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const EmailInput: React.FC<EmailInputProps> = ({ handleOnChange, value }) => {
  return (
    <Form.Group className="my-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control
        type="email"
        name="email"
        placeholder="Enter email"
        required
        onChange={handleOnChange}
        value={value}
      />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
  );
};

export default EmailInput;
