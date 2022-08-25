import { useLocation } from 'react-router-dom';
import './style.css';

const About = () => {
  const location = useLocation();
  const { state } = location;
  return (
    <div>
      <h1>About</h1>
      <p>{state as string}</p>
    </div>
  );
};

export default About;
