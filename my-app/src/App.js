import './App.css';
import Navbar from './Navbaar';
import CarouselComponent from './Carousel';
import HomeSection from './Feature';
import Testimonials from './Testimonial';
import Footer from './Footer';
import FormComponent from './Form';
import Features from './Feature';
import 'aos/dist/aos.css';


function App() {
  return (
    <>
 <Navbar />
<CarouselComponent />
 <Features/>  
 
<FormComponent/>
 <Testimonials/>

 <Footer/>

    </>
  );
}

export default App;
