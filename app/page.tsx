import Footer from './components/Footer'
import Header from './components/Header'
import GoogleMap from './components/GoogleMap'
import EmailUs from './components/EmailUs'
import WhoWeAre from './components/WhoWeAre'
import Calender from './components/Calender'
import Details from './components/Details'

export default function Home() {
  return (
    <main>
      <div>
      <Header/>
      <WhoWeAre/>
      <Details/>
      <Calender /> 
      <EmailUs />
      <GoogleMap/>
      <Footer/>
      </div>
    </main>
  )
}