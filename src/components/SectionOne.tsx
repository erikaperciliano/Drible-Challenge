import { NavBar } from "./NavBar";

export  function SectionOne(){
    return (
      <div>
        <NavBar/>
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Os Anjos de Deus</h1>
            <p className="text-lg text-gray-600 mb-12">
              Desde o início, os anjos têm um papel fundamental na história da salvação, agindo como mensageiros e servidores de Deus. Descubra a sua importância e como eles influenciam nossas vidas.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-600 transition">
                Saber Mais
              </a>
              <a href="#" className="bg-green-500 text-white py-2 px-6 rounded-lg shadow hover:bg-green-600 transition">
                Doar
              </a>
            </div>
          </div>
        </section>
      </div>
    )
}