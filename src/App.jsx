import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  console.log("App render: mounting App component");
  return (
    <BrowserRouter>

      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>

        <footer className='w-full py-6 mt-8 bg-transparent flex justify-center items-center'>
          <p className='text-secondary text-sm'>Designed & built by Aryan Singh • © 2026</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
