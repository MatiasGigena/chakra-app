const News = () => {
  return (
    <div className="px-4 bg-white py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4">
            Las noticias, de los niños.
            <br className="hidden md:block" />
            las mejores noticias.
          </span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
        <p className="text-gray-700 lg:text-sm lg:max-w-md">
          ¿Sabían que creamos un portal de noticias especialmente para los
          niños? ¡Así es! Queríamos algo divertido y emocionante que les
          mantuviera al tanto de lo que sucede en el jardín, pero de una forma
          que les encante.
        </p>
      </div>
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="/huerta.jpg"
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
              <p className="text-xs font-medium tracking-wide text-white">
                Un paso hacia la sostenibilidad! El Jardín de Infantes inaugura
                un huerto escolar.
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="/ninos-19888-10-consejos-para-que-los-ninos-se-puedan-adaptar-correctamente-al-jardin-de-infantes-200325659-001.jpg"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
              <p className="text-xs font-medium tracking-wide text-white">
                ¡Creatividad floreciente! Los talentosos artistas del Jardín de
                Infantes exhiben sus coloridas obras de arte en una exposición
                especial!
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="/Dia-de-las-Infancias-San-Isidro2022-Museo-del-Juguete-Foto-Carlos-Furman-DSC_8290-1024x796.jpg"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
              <p className="text-xs font-medium tracking-wide text-white">
                ¡Diversión en el aire! El Jardín de Infantes organiza un
                emocionante festival de barriletes para los pequeños aventureros
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="/bosquescuela.jpg"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
              <p className="text-xs font-medium  tracking-wide text-white">
                Descubriendo la naturaleza: Los niños del Jardín de Infantes se
                embarcan en una emocionante expedición de exploración al bosque
                cercano
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="text-center">
        <a
          href="/news/morenews"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          Mira más
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </a>
      </div>
    </div>
  );
};
export default News;
