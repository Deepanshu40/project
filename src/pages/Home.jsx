import HeroSection from "../components/HeroSection"
import Contact from '../components/Contact'
import TrustedByClients from '../components/TrustedByClients'
import InsuranceProducts from "../components/InsuranceProducts"
import WhyChooseUs from "../components/WhyChooseUs"
import Glimpse from "../components/Glimpse"

const Home = () => {
  return (
    <div className='flex flex-col'>
       <HeroSection />
      <TrustedByClients />
      <InsuranceProducts />
      <WhyChooseUs />
      <Glimpse />
      <Contact /> 
    </div>
  )
}

export default Home
