import { useState } from 'react';
import { Modal, Button, Container } from 'react-bootstrap';
import { MdNotificationsActive } from "react-icons/md";

const tipsData = [
  { id: 1, name: 'Be respectful to others' },
  { id: 2, name: 'No spam or self-promotion' },
  { id: 4, name: 'Use appropriate language' },
  { id: 5, name: "Don't share addresses or personal details" },
  { id: 6, name: 'If you see any posts that break the guidelines, please contact the community moderators.' },
  { id: 7, name: 'Breaking community guidelines will result in a temporary or permanent ban.' }
];

function TipsList() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <section id="rules" className="rules py-4 px-3 px-sm-4">
      <h2 className="mb-4 text-center">Tips and Guidelines</h2>
      <p className="mb-4 text-center">
        Some tips and guidelines on posting here. Please follow these rules to ensure a safe experience for all members.
      </p>

      {/* Button */}
      <div className="modal show"
      style={{ display: 'block', position: 'initial' }}>
        <Button variant="success" className="mb-4" onClick={toggleModal}>
          View community guidelines
        </Button>
      </div>

      {/* Modal */}
      <Container fluid>
        <Modal show={showModal} onHide={toggleModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>
              <MdNotificationsActive className="me-2" />
              Community Tips
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul className="ps-3">
              {tipsData.map(item => (
                <li key={item.id} className="mb-2">{item.name}</li>
              ))}
            </ul>
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
}

export default TipsList;
