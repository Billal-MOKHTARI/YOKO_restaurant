import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { DishDetail } from './components/DishDetail';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <section id="about" className="py-20 px-4">
                <div className="container mx-auto max-w-2xl text-center">
                  <h2 className="text-3xl mb-8 tracking-wide dark:text-white">Our Story</h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Founded in 1985, KŌYŌ brings the authentic flavors of Japan to your table. 
                    Our master chefs combine traditional techniques with modern presentation, 
                    creating an unforgettable dining experience that honors both heritage and innovation.
                  </p>
                </div>
              </section>
              <Menu />
              <Contact />
            </>
          } />
          <Route path="/dish/:dishName" element={<DishDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;