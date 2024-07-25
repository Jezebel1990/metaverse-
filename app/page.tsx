import  Navbar  from '../components/Navbar';
import Explore  from '../sections/Explore';
import Hero from '../sections/Hero';
import About from '../sections/About';
import GetStarted from '../sections/GetStarted';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
 <Navbar />
 <Hero />
 <div className="relative" >
 <About />
 <div className="gradient-03 z-0" />
 <Explore />
 </div>
 <div className="relative">
<GetStarted />
 </div>
  </div>
);

export default Page; 