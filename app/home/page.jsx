import Image from "next/image";

const Homepage = () => {
  return (
    <section className="text-gray-600 bg-white body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-3xl overflow-hidden">
          <Image
            width={500}
            height={450}
            quality={100}
            alt="feature"
            className=" ml-4 object-cover object-center h-full rounded-3xl  w-full "
            src="/cambios.jpg"
          />
        </div>
        <div className="flex flex-col flex-wrap justify-between lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left  text-center">
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Bilingüe
              </h2>
              <p className="leading-relaxed text-base">
                Nuestra educacion bilingüe es uno de nuestros fuertes, contamos
                con profesores graduados con excelencia que enseñan a la
                perfeccion a los niños.
              </p>
              <a className="mt-3 text-green-600 inline-flex items-center">
                Mira más!
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Comunicación
              </h2>
              <p className="leading-relaxed text-base">
                La comunicacion es uno de los factores mas importantes para
                nosotros, un niño que sabe comunicarse, va a tener un camino mas
                facil en su desarrollo.
              </p>
              <a className="mt-3  text-green-600 inline-flex items-center">
                Mira más!
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Valores
              </h2>
              <p className="leading-relaxed text-base">
                Los valores en los niños son semillas que cultivamos desde
                temprana edad, como la honestidad, el respeto, la empatía y la
                responsabilidad. Estos valores los guían hacia una vida íntegra
                y comprometida con el bienestar de los demás.
              </p>
              <a className="mt-3  text-green-600 inline-flex items-center">
                Mira más!
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Homepage;
