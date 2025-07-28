import './App.css';
import WelcomeCard from './WelcomeCard';
import TopTags from './TopTags';
import TipsList from './TipsList';
import UserDirectory from './UserDirectory';
import LoginForm from './LoginForm';
import Feed from './Feed';
import SecurityTips from './SecurityTips';
import NewPostForm from './NewPostForm';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Container fluid className="py-4">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">

              <header className="App-header mb-4 text-center">
                <h1>Community Connect</h1>
                <p>The local grapevine. Blog, share, discuss, and connect.</p>
              </header>

              <div className="card p-4 shadow-sm mb-4">
                <WelcomeCard />
                <TipsList />
              </div>
              <div className="card p-4 shadow-sm mb-4">
                <TopTags />
              </div>
              <div className="card p-4 shadow-sm mb-4">
                <UserDirectory />
              </div>
              <div className="card p-4 shadow-sm mb-4">
                <LoginForm />
                <NewPostForm />
              </div>
              <div className="card p-4 shadow-sm mb-4">
                <Feed />
              </div>
              <div className="card p-4 shadow-sm mb-4">
                <SecurityTips />
              </div>

            </div>
          </div>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
