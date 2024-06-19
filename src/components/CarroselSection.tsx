import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/image-1.jpeg";
import image2 from "../assets/image-2.jpeg";
import image3 from "../assets/image-3.jpeg";
import image4 from "../assets/image-4.jpeg";

export function CarouselSection() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 15000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };

  return (
    <section className="relative h-screen">
      <Slider {...settings}>
        <div>
          <div className="h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${image1})` }}>
            <div className="text-center text-white p-6 md:p-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">O seu bebé é precioso.<br />Nós velamos por ele</h1>
              <p className="text-lg md:text-xl mb-8 font-poppins">Promovemos uma educação personalizante e libertadora, concebendo-a como o desabrochar progressivo e harmonioso de todas as faculdades da criança.</p>
              <div className="flex justify-center">
                <button className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 text-white font-bold py-2 px-4 md:mx-4 mb-2 md:mb-0">Saber mais</button>
                <button className="bg-transparent border-2 border-white hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg md:mx-4">Ver oferta educativa</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${image2})` }}>
            <div className="text-center text-white p-6 md:p-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Ajudamos a dar o primeiro passo</h1>
              <p className="text-lg md:text-xl mb-8 font-poppins">Atendemos de modo específico às áreas do desenvolvimento psico-motor, cognitivo, comunicação e construção de códigos formais de aprendizagem.</p>
              <div className="flex justify-center">
                <button className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 text-white font-bold py-2 px-4 md:mx-4 mb-2 md:mb-0">Saber mais</button>
                <button className="bg-transparent border-2 border-white hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg md:mx-4">Ver oferta educativa</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${image3})` }}>
            <div className="text-center text-white p-6 md:p-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">O futuro começa aqui, nós impulsionamos</h1>
              <p className="text-lg md:text-xl mb-8 font-poppins">Proporcionamos à criança uma formação sólida e de qualidade, que a prepare para o futuro, para o prosseguimento dos estudos e para a vida ativa.</p>
              <div className="flex justify-center">
                <button className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 text-white font-bold py-2 px-4 md:mx-4 mb-2 md:mb-0">Saber mais</button>
                <button className="bg-transparent border-2 border-white hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg md:mx-4">Ver oferta educativa</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${image4})` }}>
            <div className="text-center text-white p-6 md:p-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Uma família a quem precisa</h1>
              <p className="text-lg md:text-xl mb-8 font-poppins">Facultamos às crianças e jovens todas as necessidades básicas em condições de vida que permitam a experiência de uma vida familiar estruturada.</p>
              <div className="flex justify-center">
                <button className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 text-white font-bold py-2 px-4 md:mx-4 mb-2 md:mb-0">Saber mais</button>
                <button className="bg-transparent border-2 border-white hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg md:mx-4">Ver oferta educativa</button>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
}
