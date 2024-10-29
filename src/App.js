import logo from './logo.svg';
import Intro from './sections/Intro';
import DeepDive from './sections/DeepDive';
import Testimonials from './sections/Testimonials';
import ContactMe  from './sections/ContactMe';
import './App.css';

function App() {
  return (
    <div>
      <Intro />
      <DeepDive />
      <Testimonials />
      <ContactMe />
    </div>
  );
}

export default App;
