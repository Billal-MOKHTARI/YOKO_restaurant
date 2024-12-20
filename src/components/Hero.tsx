import React from 'react';

export function Hero() {
  return (
    <section id="home" className="pt-20">
      <div className="relative h-[70vh] w-full">
        <img 
          src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80"
          alt="Signature sushi platter"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-5xl md:text-6xl font-light tracking-widest mb-4">KŌYŌ</h2>
            <p className="text-xl tracking-wide">Traditional Japanese Cuisine</p>
          </div>
        </div>
      </div>
    </section>
  );
}