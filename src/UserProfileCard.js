import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Image, Container, Modal } from 'react-bootstrap';
import { MdNotificationsActive } from "react-icons/md";


function UserProfileCard({
  profileImage,
  username,
  title,
  description,
  onProfileClick,
  profileButtonText = 'Go to profile',
  bannerImage,
  initialFollowed = false,
  isFollowed: controlledIsFollowed,
  onFollowChange,
  followButtonText = 'Follow',
  unfollowButtonText = 'Unfollow',
  className = '',
  style = {},
  profileImageAlt,
  bannerImageAlt = 'Banner image',
  followButtonVariant = 'success',
  unfollowButtonVariant = 'outline-secondary',
  customButtons,
}) {
  const [internalIsFollowed, setInternalIsFollowed] = useState(initialFollowed);
  const [showModal, setShowModal] = useState(false);
  const [pendingAction, setPendingAction] = useState(null);

  const isControlled = controlledIsFollowed !== undefined;
  const isFollowed = isControlled ? controlledIsFollowed : internalIsFollowed;

  const handleFollowClick = () => {
    setPendingAction(isFollowed ? 'unfollow' : 'follow');
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);

    if (pendingAction) {
      const newFollowState = pendingAction === 'follow';

      if (isControlled) {
        onFollowChange && onFollowChange(newFollowState);
      } else {
        setInternalIsFollowed(newFollowState);
        onFollowChange && onFollowChange(newFollowState);
      }

      setPendingAction(null);
    }
  };

  const modalMessage = pendingAction === 'follow'
    ? `You are now following @${username}`
    : `You have unfollowed @${username}`;

  return (
    <Container className={`p-0 ${className}`} style={style}>
      <Card className="text-center mb-4 w-100 shadow-sm h-100 d-flex flex-column">
        {/* banner */}
        <div className="position-relative" style={{ height: '120px', overflow: 'hidden' }}>
          <Card.Img
            src={bannerImage || '/media/placeholder.jpg'}
            alt={bannerImageAlt}
            className="w-100"
            style={{ height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* profile picture */}
        <div
          className="d-flex justify-content-center"
          style={{ position: 'relative', marginTop: '-40px', zIndex: 10 }}
        >
          <Image
            src={profileImage || '/media/placeholder.jpg'}
            roundedCircle
            alt={profileImageAlt || `${username}'s profile`}
            style={{
              width: '80px',
              height: '80px',
              objectFit: 'cover',
              border: '3px solid white',
              backgroundColor: 'white',
            }}
          />
        </div>

        {/* card body */}
        <Card.Body className="d-flex flex-column flex-grow-1 px-3 px-sm-4">
          <div>
            <Card.Title className="text-break">@{username}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-break">{title}</Card.Subtitle>
            <Card.Text className="text-break">{description}</Card.Text>
          </div>

          {/* buttons */}
          <div className="mt-auto pt-3 d-flex justify-content-center flex-wrap gap-2">
            <Button variant="primary" onClick={onProfileClick} className="flex-grow-1 flex-sm-grow-0">
              {profileButtonText}
            </Button>

            <Button
              variant={isFollowed ? unfollowButtonVariant : followButtonVariant}
              onClick={handleFollowClick}
              className="flex-grow-1 flex-sm-grow-0"
            >
              {isFollowed ? unfollowButtonText : followButtonText}
            </Button>

            {customButtons && customButtons.map((btn, i) => (
              <React.Fragment key={i}>{btn}</React.Fragment>
            ))}
          </div>
        </Card.Body>
      </Card>

      {/* follow/unfollow modal */}
      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title><MdNotificationsActive /></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>{modalMessage}</strong></p>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

UserProfileCard.propTypes = {
  profileImage: PropTypes.string,
  username: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  onProfileClick: PropTypes.func,
  profileButtonText: PropTypes.string,
  bannerImage: PropTypes.string,
  initialFollowed: PropTypes.bool,
  isFollowed: PropTypes.bool,
  onFollowChange: PropTypes.func,
  followButtonText: PropTypes.string,
  unfollowButtonText: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  profileImageAlt: PropTypes.string,
  bannerImageAlt: PropTypes.string,
  followButtonVariant: PropTypes.string,
  unfollowButtonVariant: PropTypes.string,
  customButtons: PropTypes.arrayOf(PropTypes.node),
};

export default UserProfileCard;
