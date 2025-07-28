import { useForm, Controller } from 'react-hook-form';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

export default function NewPostForm() {
  const { control, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = data => {
    alert(`New post:\nTitle: ${data.title}\nBody: ${data.body}`);
    reset();
  };

  return (
    <Container className="p-3 border rounded mb-4">
      <Form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Row className="mb-3">
          <Col md={4}>
            <Form.Label>Title</Form.Label>
          </Col>
          <Col md={8}>
            <Controller
              name="title"
              control={control}
              defaultValue=""
              rules={{
                required: 'Title is required',
                minLength: { value: 3, message: 'Must be above 3 chars' }
              }}
              render={({ field }) => (
                <Form.Control
                  {...field}
                  isInvalid={!!errors.title}
                  placeholder="Enter title"
                />
              )}
            />
            <Form.Control.Feedback type="invalid">
              {errors.title?.message}
            </Form.Control.Feedback>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={4}>
            <Form.Label>Body</Form.Label>
          </Col>
          <Col md={8}>
            <Controller
              name="body"
              control={control}
              defaultValue=""
              rules={{
                required: 'Body is required',
                minLength: { value: 20, message: 'Must have above 20 chars' }
              }}
              render={({ field }) => (
                <Form.Control
                  {...field}
                  as="textarea"
                  rows={3}
                  isInvalid={!!errors.body}
                  placeholder="Write your message"
                />
              )}
            />
            <Form.Control.Feedback type="invalid">
              {errors.body?.message}
            </Form.Control.Feedback>
          </Col>
        </Row>

        <Button type="submit" variant="primary">Post</Button>
      </Form>
    </Container>
  );
}
