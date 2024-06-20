import React, { useEffect, useState } from 'react';
import image1 from "../../assets/category-images/Manuel-Sá-Paula.jpg";
import image2 from "../../assets/category-images/Ana-Cabral.jpg";
import image3 from "../../assets/category-images/Filomena-Costa-despensa.jpg";
import image4 from "../../assets/category-images/Fábio-Valente-despensa.jpg";
import image5 from "../../assets/category-images/Ana-Lomba-creche.jpg";
import image6 from "../../assets/category-images/Arlinda-Oliveira-creche.jpg";
import image7 from "../../assets/category-images/Catarina-Moreira-creche.jpg";
import image8 from "../../assets/category-images/Carmo-Vilas-Boas-motorista.jpg";
import image9 from "../../assets/category-images/Hugo-Silva-motorista.jpg";
import image10 from "../../assets/category-images/Celina-Brito-cozinha.jpg";
import image11 from "../../assets/category-images/Candida-Rego-cozinha.jpg";
import image12 from "../../assets/category-images/Emília-Lamela-cozinha.jpg";
import image13 from "../../assets/category-images/Fátima-Barbosa-cozinha.jpg";
import image14 from "../../assets/category-images/Fátima-Barbosa-cozinha.jpg";
import image15 from "../../assets/category-images/Aldina-Pereira-acolhimento.jpg";
import image16 from "../../assets/category-images/Anabela-Oliveira-acolhimento.jpg";
import image17 from "../../assets/category-images/Ana-Gabriela-Costa-acolhimento.jpg";
import image18 from "../../assets/category-images/Sara-Mano-adm.jpg";
import image19 from "../../assets/category-images/Helena-Terroso-adm.jpg";
import image20 from "../../assets/category-images/Joana-Sousa-adm.jpg";
import image21 from "../../assets/category-images/Céu-Gomes-axl.jpg";
import image22 from "../../assets/category-images/Judit-Pereira-aux.jpg";
import image23 from "../../assets/category-images/Rosa-Araújo-aux.jpg";
import image24 from "../../assets/category-images/Amélia-Silva-pre.jpg";
import image25 from "../../assets/category-images/Ana-Costa-pre.jpg";
import image26 from "../../assets/category-images/Célia-Lopes-pre.jpg";
import image27 from "../../assets/category-images/Ana-Serre-recp.jpg";
import image28 from "../../assets/category-images/Piedade-Martins-recp.jpg";
import image29 from "../../assets/category-images/Conceição-Alves-lava.jpg";
import image30 from "../../assets/category-images/Sandra-Fernandes-lava.jpg";
import image31 from "../../assets/category-images/Ana-Machado-prof.jpg";
import image32 from "../../assets/category-images/Ana-Madureira-prof.jpg";
import image33 from "../../assets/category-images/Andreia-Ferreira-prof.jpg";




type Person = {
  name: string;
  category: string;
  image: string;
};

type CategoryImages = {
  [key: string]: Person[];
};


const categoryImages: CategoryImages = {
  'Direção': [
    { name: 'Manuel Sá Paula', category: 'Diretor', image: image1 },
    { name: 'Ana Cabral', category: 'Diretora adjunta', image: image2 }
  ],
  'Dispensa': [
    { name: 'Filomena Costa', category: 'Despenseira', image: image3 },
    { name: 'Fábio Valente', category: 'Despenseiro', image: image4 },
    { name: 'Paula Ferreira', category: 'Despenseira', image: image5 }
  ],
  'Creche': [
    {name: 'Ana Lomba', category: 'Auxiliar de Ação Educativa', image: image5 },
    {name: 'Arlinda Oliveira', category: 'Educadora', image: image6 },
    {name: 'Paula Ferreira', category: 'Educadora', image: image7 },
  ],
  'Serviços Administrativos': [
    {name: 'Sara Mano', category: 'Secretária', image: image18 },
    {name: 'Helena Terroso', category: 'Escriturária', image: image19 },
    {name: 'Joana Sousa', category: 'Secretária', image: image20 },
  ],
  'Serviços Gerais': [
    {name: 'Céu Gomes', category: 'Trab.Auxiliar', image: image21 },
    {name: 'Judit Pereira', category: 'Trab.Auxiliar', image: image22 },
    {name: 'Rosa Araújo', category: 'Jardineira', image: image23 },
  ],
  'Ensino Pré-Escolar': [
    {name: 'Amélia Silva', category: 'Educadora', image: image24 },
    {name: 'Ana Costa', category: 'Educadora', image: image25 },
    {name: 'Célia Lopes', category: 'Educadora', image: image26 },
  ],
  'Portaria': [
    {name: 'Ana Serre', category: 'Rececionista', image: image27 },
    {name: 'Piedade Martins', category: 'Rececionista', image: image28 },
  ],
  'Lavandaria': [
    {name: 'Conceição Alves', category: 'Roupeira', image: image29 },
    {name: 'Sandra Fernandes', category: 'Educadora Social', image: image30 },
  ],
  '1º. Ciclo': [
    {name: 'Ana Machado', category: 'Auxiliar de Ação Educativa', image: image31 },
    {name: 'Ana Madureira', category: 'Professora', image: image32 },
    {name: 'Andreia Ferreira', category: 'Auxiliar de Ação Educativa', image: image33 },
  ],
  'Motoristas': [
    {name: 'Carmo Vilas Boas', category: 'Motorista', image: image8 },
    {name: 'Hugo Silva', category: 'Motorista', image: image9 },
  ],
  'Cozinha': [
  {name: 'Celina Brito', category: 'Cozinheira', image: image10 },
  {name: 'Cândida Rego', category: 'Cozinheira', image: image11 },
  {name: 'Emília Lamela', category: 'Cozinheira', image: image12 },
  {name: 'Fátima Carvalho', category: 'Cozinheira', image: image13 },
  ],
  'Casa de Acolhimento': [
  {name: 'Adriana Cosa', category: 'Psicóloga', image: image14 },
  {name: 'Aldina Pereira', category: 'Auxiliar de Ação Educativa', image: image15 },
  {name: 'Anabela Oliveira', category: 'Psicóloga', image: image16 },
  {name: 'Ana Gabriela Costa', category: 'Auxiliar de Ação Educativa', image: image17 },
  ]
};


export const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('Direção');
  const [categoryImagesList, setCategoryImagesList] = useState<Person[]>(categoryImages['Direção']);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

   // Funções para trocar de categoria e navegar pelas imagens
   const toggleCategory = (category: string) => {
    setSelectedCategory(category);
    setCategoryImagesList(categoryImages[category] || []);
    setIsOpen(false);
    setCurrentImageIndex(0); // Reinicia para a primeira imagem ao trocar de categoria
  };

  const nextImages = () => {
    if (categoryImagesList.length > 3 && currentImageIndex + 3 < categoryImagesList.length) {
      setCurrentImageIndex(prevIndex => prevIndex + 3);
    }
  };

  const prevImages = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(prevIndex => prevIndex - 3);
    }
  };

  const openModal = (person: Person) => {
    setSelectedPerson(person);
    setModalOpen(true);
  };
  
  const closeModal = () => {
    setModalOpen(false);
    setSelectedPerson(null);
  };
  

  // UseEffect para definir as imagens iniciais ao carregar a página
  useEffect(() => {
    // Define as imagens iniciais como da categoria 'Direção' ao montar o componente
    setCategoryImagesList(categoryImages['Direção']);
  }, []);

  return (
    <>
      <div className="relative inline-block text-left">
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex justify-center w-full md:w-auto rounded-md border border-black shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded={isOpen ? 'true' : 'false'}
          >
            {`Departamento: ${selectedCategory}`}
            <svg
              className={`-mr-1 ml-2 h-5 w-5 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {isOpen && (
            <div
              className="left-0 mt-4 w-full rounded-md shadow-lg border border-black bg-white ring-black ring-opacity-5 z-10"
              aria-labelledby="options-menu"
            >
              <div className="flex flex-wrap p-4">
                <div className="w-1/3">
                  {Object.keys(categoryImages).slice(0, 3).map((category) => (
                    <div
                      key={category}
                      onClick={() => toggleCategory(category)}
                      className={`cursor-pointer py-2 px-4 text-sm ${
                        selectedCategory === category ? 'text-gray-900 bg-gray-100' : 'text-gray-700 hover:bg-gray-100 whitespace-nowrap'
                      }`}
                    >
                      {category}
                    </div>
                  ))}
                </div>
                <div className="w-1/3">
                  {Object.keys(categoryImages).slice(3, 6).map((category) => (
                    <div
                      key={category}
                      onClick={() => toggleCategory(category)}
                      className={`cursor-pointer py-2 px-4 text-sm ${
                        selectedCategory === category ? 'text-gray-900 bg-gray-100' : 'text-gray-700 hover:bg-gray-100 whitespace-nowrap'
                      }`}
                    >
                      {category}
                    </div>
                  ))}
                </div>
                <div className="w-1/3">
                  {Object.keys(categoryImages).slice(6, 9).map((category) => (
                    <div
                      key={category}
                      onClick={() => toggleCategory(category)}
                      className={`cursor-pointer py-2 px-4 text-sm ${
                        selectedCategory === category ? 'text-gray-900 bg-gray-100' : 'text-gray-700 hover:bg-gray-100 whitespace-nowrap'
                      }`}
                    >
                      {category}
                    </div>
                  ))}
                </div>
                <div className="w-1/3">
                  {Object.keys(categoryImages).slice(9, 12).map((category) => (
                    <div
                      key={category}
                      onClick={() => toggleCategory(category)}
                      className={`cursor-pointer py-2 px-4 text-sm ${
                        selectedCategory === category ? 'text-gray-900 bg-gray-100' : 'text-gray-700 hover:bg-gray-100 whitespace-nowrap'
                      }`}
                    >
                      {category}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {selectedCategory && (
        <div className="mt-4 p-4 rounded-md">
          <div className="flex justify-center items-center">
            {categoryImagesList.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {categoryImagesList.slice(currentImageIndex, currentImageIndex + 3).map((person, index) => (
                  <div key={index} className="relative">
                    <img
                      src={person.image}
                      alt={`Imagem ${currentImageIndex + index}`}
                      className="w-full h-full object-cover rounded-md"
                    />
                    <div className=" bottom-0 left-0 right-0 bg-white bg-opacity-80 p-2">
                      <h1 className="text-xl font-semibold mb-1">{person.name}</h1>
                      <p className="text-lg font-poppins mb-1 font-normal text-gray-600">{person.category}</p>
                      <a href="#" 
                        className="text-lg font-poppins font-normal text-gray-600 hover:underline"
                        onClick={() => openModal(person)}
                      >Conhecer 
                        <span className='ml-3'>&gt;</span>
                      </a>
                      {selectedPerson && (
                        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
                          <div className="bg-black bg-opacity-50 fixed inset-0 z-40"></div>
                          <div className="flex justify-center items-center z-50 w-full h-full">
                            <div className="bg-black  bg-opacity-60 rounded-lg overflow-hidden max-w-4xl flex">
                              <div className="w-2/5  h-full overflow-hidden">
                                <img
                                  src={selectedPerson.image}
                                  alt={selectedPerson.name}
                                  className="w-full h-full object-cover rounded-l-lg"
                                  style={{ width: '950px', height: '550px' }}
                                />
                              </div>
                              <div className="w-3/5 flex  text-left flex-col p-4 justify-center">
                                  <h1 className="text-xl text-white font-bold mb-2">{selectedPerson.name}</h1>
                                  <p className="text-lg  text-white mb-4">{selectedPerson.category}</p>
                                  <button
                                    onClick={closeModal}
                                    className="block w-full py-2 px-4 text-le text-white rounded-md"
                                  >
                                    X Fechar
                                  </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex justify-end mt-4">
        <button
          onClick={prevImages}
          className={`text-sm md:text-base rounded-full px-3 py-1 mr-4 ${currentImageIndex > 0 ? 'bg-orange-500 text-white hover:bg-orange-600 cursor-pointer' : 'bg-orange-200 text-orange-400 cursor-not-allowed'}`}
          disabled={currentImageIndex === 0}
        >
          {"<"}
        </button>
        <button
          onClick={nextImages}
          className={`text-sm md:text-base rounded-full px-3 py-1 ${categoryImagesList.length > 3 && currentImageIndex + 3 < categoryImagesList.length ? 'bg-orange-500 text-white hover:bg-orange-600 cursor-pointer' : 'bg-orange-200 text-orange-400 cursor-not-allowed'}`}
          disabled={!(categoryImagesList.length > 3 && currentImageIndex + 3 < categoryImagesList.length)}
        >
          {">"}
        </button>
      </div>
        </div>
      )}
    </>
  );
};

export default DropdownButton;
