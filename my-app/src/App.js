import './App.css';
import Navbar from './Navbaar';
import CarouselComponent from './Carousel';
import HomeSection from './Homesection';
import Testimonials from './Testimonial';
import Footer from './Footer';

function App() {
  return (
    <>
 <Navbar />

 <HomeSection/>
  <CarouselComponent />
 <Testimonials/>
 <Footer/>

    </>
  );
}

export default App;
