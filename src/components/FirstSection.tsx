import React, { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/image-1.jpeg";
import image2 from "../assets/image-2.jpeg";
import image3 from "../assets/image-3.jpeg";
import image4 from "../assets/image-4.jpeg";

export function FirstSection() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const sliderRef = useRef<Slider>(null); // Ref para o Slider

  const images = [image1, image2, image3, image4];
  const titles = [
    "Creche",
    "Ensino Pré-Escolar",
    "1º. Ciclo",
    "Casa de Acolhimento"
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
      setProgress(0); // Reinicia o progresso ao mudar de slide
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1; // Incrementa o progresso enquanto não atingir 100%
        } else {
          return 0; // Reinicia o progresso ao atingir 100%
        }
      });
    }, settings.autoplaySpeed / 100);

    return () => clearInterval(interval);
  }, [currentSlide, settings.autoplaySpeed]);

  useEffect(() => {
    if (progress >= 100 && sliderRef.current) {
      sliderRef.current.slickNext(); // Avança para o próximo slide quando o progresso atinge 100%
    }
  }, [progress]);

  const slideStyles = (index: number) => {
    // Verifica se o índice do slide é o índice atual
    return index === currentSlide ? "slide-content animate-slide-in" : "slide-content";
  };

  const handleBarClick = (index: number) => {
    if (sliderRef.current && typeof sliderRef.current.slickGoTo === 'function') {
      sliderRef.current.slickGoTo(index); // Navega para o slide correspondente ao índice clicado
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative h-screen overflow-x-hidden">
            <div className="h-screen bg-cover bg-center flex items-center justify-center relative" style={{ backgroundImage: `url(${image})`, maxWidth: '100%', overflow: 'hidden' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div> {/* Overlay */}
              <div className={`absolute inset-0 md:mt-32 flex flex-col items-center justify-center text-white p-6 md:p-12 z-10 ${slideStyles(index)}`}>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 transition-transform-opacity cursor-pointer" onClick={() => handleBarClick(index)}>
                  {getTitleByIndex(index)}
                </h1>
                <p className="text-lg md:text-xl mt-4 mb-8 font-poppins transition-transform-opacity">
                  {getDescriptionByIndex(index)}
                </p>
                <div className="flex flex-col mt-6 items-center space-y-4">
                  <div className="flex justify-center space-x-2">
                    <button className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 text-white font-bold py-2 px-4 md:mx-2 mb-2 md:mb-0">
                      Saber mais
                    </button>
                    <button className="bg-transparent border-2 border-white text-white font-bold py-2 px-4 rounded-lg md:mx-2 mb-2 md:mb-0">
                      Ver oferta educativa
                    </button>
                  </div>
                  {/* Barra de progresso */}
                  <div className="flex justify-center space-x-4 cursor-pointer">
                    {titles.map((title, barIndex) => (
                      <div key={barIndex} className="flex flex-col items-center mt-6 md:mt-10 text-white cursor-pointer" onClick={() => handleBarClick(barIndex)}>
                        <p className="mt-1 text-base md:text-lg">{title}</p>
                        <div className="relative h-1 w-full md:w-44 bg-gray-300 mt-2 rounded-lg overflow-hidden">
                          <div className={`h-full ${barIndex === currentSlide ? 'bg-white' : 'bg-gray-300'}`} style={{ width: `${barIndex === currentSlide ? progress : 0}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

function getTitleByIndex(index: number) {
  switch (index) {
    case 0:
      return <p className="text-center md:text-left">O seu bebé é precioso. <br /> Nós velamos por ele</p>
    case 1:
      return <p className="text-center md:text-left">Ajudamos a dar o primeiro <br /> <span className="block">passo</span></p>
    case 2:
      return <p className="text-center md:text-left">O futuro começa aqui, nós <br /> <span className="block">impulsionamos</span></p>
    case 3:
      return <p className="text-center md:text-left">Uma família a quem precisa</p>;
    default:
      return "";
  }
}

function getDescriptionByIndex(index: number) {
  switch (index) {
    case 0:
      return <p className="text-center md:text-left">Promovemos uma educação personalizante e libertadora, concebendo-a como o <br /> desabrochar progressivo e harmonioso de todas as faculdades da criança.</p>
    case 1:
      return <p className="text-center md:text-left">Atendemos de modo específico às áreas do desenvolvimento psico-motor, <br /> cognitivo, comunicação e construção de códigos formais de aprendizagem.</p>
    case 2:
      return <p className="text-center md:text-left">Proporcionamos à criança uma formação sólida e de qualidade, que a prepare para <br /> o futuro, para o prosseguimento dos estudos e para a vida ativa.</p>
    case 3:
      return <p className="text-center md:text-left">Facultamos às crianças e jovens todas as necessidades básicas em condições de <br /> vida que permitam a experiência de uma vida familiar estruturada.</p>;
    default:
      return "";
  }
}
