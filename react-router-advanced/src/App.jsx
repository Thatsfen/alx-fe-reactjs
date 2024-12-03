import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import Profile from './components/Profile';
import Login from './components/Login';
import { useParams } from 'react-router-dom';
import BlogPost from './components/BlogPost';
import useAuth from './hooks/useAuth';

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const NotFound = () => <h2>Page Not Found</h2>;

const UserProfile = () => {
  const { username } = useParams();
  return <h3>User Profile of: {username}</h3>;
};

const ProtectedRoute = ({ children, isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};

const App = () => {
  const { isAuthenticated, login, logout } = useAuth();
  eturn (
    <Router>
      <div>
        {/* Navigation Links */}
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/about">About</Link> | 
          <Link to="/profile">Profile</Link> | 
          {isAuthenticated ? (
            <button onClick={logout}>Log Out</button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Protected Route for Profile */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute >
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        <Route path="/user/:username" element={<UserProfile />} />
        {/* Dynamic Route for Blog Post */}
        <Route path="/blog/:id" element={<BlogPost />} />  {/* New dynamic route */}

       {/* Login Page */}
       <Route path="/login" element={<Login login={login} />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
