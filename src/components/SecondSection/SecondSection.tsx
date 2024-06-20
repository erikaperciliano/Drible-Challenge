import React from 'react';
import { DropdownButton } from './DropdownButton';

export function SecondSection() {
  return (
    <section className="bg-white py-12 h-screen flex flex-col justify-start items-start">
      <div className="container mx-auto px-4">
        <div className="text-left mb-8">
          <h1 className="mb-4 font-petrona text-5xl text-black font-medium">
            A nossa <span className="shadow-md inline-block px-4 py-2 rounded-lg bg-gray-200">equipa</span>
          </h1>
          <p className="text-lg text-gray-800 font-poppins tracking-wide font-medium">Uma equipa dedicada a inspirar e educar, guiada pela fé no Menino Deus</p>
        </div>
        <DropdownButton /> 
      </div>
    </section>
  );
}

export default SecondSection;
