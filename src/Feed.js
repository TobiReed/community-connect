import { useState } from 'react';
import { Card, Container, Button, Image, Modal, Row, Col } from 'react-bootstrap';

const Feed = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    if (imageSrc) {
      setSelectedImage(imageSrc);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  // array
  const posts = [
    {
      id: 1,
      user: 'deeribot',
      profileImage: '/media/dal.jpg',
      message: 'New stock came in yesterday, come check it out at @secondhandmusicnz',
      image: '/media/store.jpg'
    },
    {
      id: 2,
      user: 'spaceinvadrrz',
      profileImage: '/media/gleeb.jpg',
      message: 'Eagle 500kg my beloved #helldivers #art #sketch',
      image: '/media/helldivers.jpg'
    },
    {
      id: 3,
      user: 'AliceW',
      profileImage: '/media/hmm.jpg',
      message: 'Recently bought some new gouache from my town\'s artist\'s market. I love how vibrant these swatches are! #art #gouache #painting',
      image: '/media/gouache.webp'
    },
    {
      id: 4,
      user: 'brocode',
      profileImage: '/media/bro.jpg',
      message: 'New JavaScript tutorial posted! #coding #codingtutorial #javascript',
      video: 'https://www.youtube.com/embed/Ihy0QziLDf0'
    },
  ];

  return (
    <section id="feed" className="feed py-4">
      <Container>
        <section aria-label="Social media feed">
          <h2 className="mb-4 text-center">Feed</h2>

          {posts.map((post) => (
            <Card as="article" className="mb-4 shadow-sm" key={post.id}>
              <Card.Body className="d-flex flex-column">
                <Row className="align-items-center mb-3">
                  <Col xs="auto">
                    <Image
                      src={post.profileImage || '/media/placeholder-profile.jpg'}
                      roundedCircle
                      width={60}
                      height={60}
                      alt={`${post.user}'s profile picture`}
                      className="object-fit-cover"
                      style={{ objectFit: 'cover' }}
                    />
                  </Col>
                  <Col xs={12} sm className="mt-2 mt-sm-0">
                    <Card.Title as="h4" className="mb-0">{post.user}</Card.Title>
                  </Col>
                </Row>
                
                {/* unexpanded image/video */}
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={`${post.user}'s post image`}
                    title={`${post.user}'s post`}
                    className="mb-3 rounded w-100"
                    style={{ cursor: 'pointer', objectFit: 'cover' }}
                    fluid
                    onClick={() => handleImageClick(post.image)}
                  />
                ) : post.video ? (
                  <div className="ratio ratio-16x9 mb-3 rounded overflow-hidden">
                    <iframe
                      src={post.video}
                      title={`${post.user}'s video post`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ border: 0 }}
                    />
                  </div>
                ) : null}

                <p className="card-text mb-4">{post.message}</p>

                <div
                  role="group"
                  aria-label={`Post actions for ${post.user}`}
                  className="d-flex flex-column flex-sm-row gap-2 justify-content-sm-end"
                >
                  <Button variant="outline-primary" size="sm" className="w-100 w-sm-auto">Like</Button>
                  <Button variant="outline-secondary" size="sm" className="w-100 w-sm-auto">Comment</Button>
                  <Button variant="outline-success" size="sm" className="w-100 w-sm-auto">Share</Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </section>
      </Container>

      {/* image modal */}
      
      {selectedImage && (
  <Modal
    show={showModal}
    onHide={handleCloseModal}
    fullscreen
    centered
    backdropClassName="custom-backdrop"
    contentClassName="border-0 bg-transparent"
  >
    <Modal.Body
      className="p-0 d-flex align-items-center justify-content-center position-relative"
      style={{ overflow: 'auto', backgroundColor: 'rgba(0, 0, 0, 0.85)' }}
    >
      <Button
        variant="light"
        onClick={handleCloseModal}
        className="position-absolute top-0 end-0 m-3"
        aria-label="Close"
        style={{ zIndex: 1051 }}
      >
        ✕
      </Button>

      <Image
        src={selectedImage}
        alt="Expanded post"
        fluid
        style={{
          maxWidth: '90vw',
          maxHeight: '90vh',
          objectFit: 'contain',
        }}
      />
    </Modal.Body>
  </Modal>
)}
    </section>
  );
};

export default Feed;
