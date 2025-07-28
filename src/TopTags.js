import { Container, Row, Col, Card } from 'react-bootstrap';

function TopTags() {
  const topPosts = [
    { likes: 270, img: '/media/sal.jpg' },
    { likes: 230, img: '/media/lap.jpg' },
    { likes: 100, img: '/media/jd.jpg' }
  ];

  const topTags = [
    { tag: '#tagone', count: 400 },
    { tag: '#tagtwo', count: 330 },
    { tag: '#tagthree', count: 100 }
  ];

  return (
    <section id="top">
      <Container className="my-5">

        {/* Top Posts */}
        <div className="text-center mb-5">
          <h2 className="mb-4">Top Posts</h2>
          <Row className="justify-content-center">
            {topPosts.map((post, index) => (
              <Col key={index} xs={12} sm={6} md={4} className="mb-3">
                <Card className="h-100 shadow-sm text-center">
                  <div style={{ aspectRatio: '1.1', overflow: 'hidden', width: '100%' }}>
                    <Card.Img
                      variant="top"
                      src={post.img}
                      alt={`Post ${index + 1}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top'
                      }}
                    />
                  </div>
                  <Card.Body>
                    <Card.Text>{post.likes} likes</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Top Tags */}
        <div className="text-center">
          <h2 className="mb-4">Top Tags of Today</h2>
          <Row className="justify-content-center">
            {topTags.map((tag, i) => (
              <Col key={i} xs={12} sm={6} md={4} className="mb-3">
                <div className="border rounded p-3 bg-light h-100">
                  <h5 className="mb-1 text-primary text-wrap">{tag.tag}</h5>
                  <small className="text-muted">{tag.count} posts today</small>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default TopTags;