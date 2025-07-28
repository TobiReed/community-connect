import UserProfileCard from './UserProfileCard';
import { Container, Row, Col } from 'react-bootstrap';

const users = [
  {
    username: 'spaceinvadrrz',
    title: 'Artist',
    description: 'Freelance artist nerd commissionlinks.com',
    profileImage: '/media/gleeb.jpg',
    bannerImage: '/media/stars.jpg'
  },
  {
    username: 'LeslieAltercord',
    title: 'Animator',
    description: 'Storyboarder at @LightAnimations.',
    profileImage: '/media/wa.jpg',
    bannerImage: '/media/apple.jpg'
  },
  {
    username: 'AliceW',
    title: 'Graphic Designer',
    description: 'Graphic designer open for work.',
    profileImage: '/media/hmm.jpg',
    bannerImage: '/media/domo.jpg'
  },
  {
    username: 'BobSmith',
    title: 'Back-end dev',
    description: 'Coding tutorials - bobsmith@email.com.',
    profileImage: '/media/puter.jpg',
    bannerImage: '/media/tv.png'
  },
];

function UserDirectory() {
  return (
    <section id="friends" className="friends">
    <Container className="mt-5">
      <h2 className="mb-4 text-center">Friends</h2>
      <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-4">
        {users.map((user, index) => (
          <Col key={index}>
            <UserProfileCard
              username={user.username}
              title={user.title}
              description={user.description}
              profileImage={user.profileImage}
              onProfileClick={() => alert(`Viewing ${user.username}'s profile`)}
              bannerImage={user.bannerImage}
            />
          </Col>
        ))}
      </Row>
    </Container>
    </section>//#friends
  );
}

export default UserDirectory;
