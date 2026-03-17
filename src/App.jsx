import { Suspense } from 'react'
import './App.css'
import DaisiuiNav from './components/DaisiuiNav/DaisiuiNav'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/PricingOptions/PricingOptions'
const pricingFetch = async()=>{
  const pricingData = await fetch('pricingData.json')
  return pricingData.json()
}
function App() {
const pricingPromise = pricingFetch()
  return (
    <>
    <header>
      <Navbar></Navbar>
    </header>
    <main>
    <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
    <PricingOptions 
    pricingPromise ={pricingPromise}
    ></PricingOptions>
    </Suspense>
    </main>
    </>
  )
}

export default App
