const Direccion = () => {
  return (
    <div className="p-8 bg-white rounded-lg mt-2 dark:bg-gray-800">
      <p className="text-3xl font-bold text-center text-gray-800 dark:text-white">
        Dirección Jardín Miralibres
      </p>
      <p className="mb-12 text-xl font-normal text-center text-gray-500 dark:text-gray-200">
        Conoce a nuestro excelente cuerpo directivo!
      </p>
      <div className="flex flex-col items-center md:flex-row justify-center">
        <div className="p-4">
          <div className="mb-4 text-center opacity-90">
            <a href="#" className="relative block">
              <img
                alt="profil"
                src="/Seduard.jpg"
                className="mx-auto object-cover rounded-full h-56 w-40 "
              />
            </a>
          </div>
          <div className="text-center">
            <p className="text-2xl text-gray-800 dark:text-white">
              Patricio Sebastian Fernandez
            </p>
            <p className="text-xl font-light text-gray-500 dark:text-gray-200">
              Director
            </p>
            <p className="max-w-xs py-4 font-light text-gray-500 text-md dark:text-gray-400">
              Patrick Sébastien, born November 14, 1953 in Brive-la-Gaillarde,
              is an imitator.
            </p>
          </div>
          <div className="flex items-center justify-between pt-8 mx-auto text-gray-500 border-t border-gray-200 w-44"></div>
        </div>
        <div className="p-4">
          <div className="mb-4 text-center opacity-90">
            <a href="#" className="relative block">
              <img
                alt="profil"
                src="/caique-nascimento-KJE--xk4AWE-unsplash.jpg"
                className="mx-auto object-cover rounded-full h-56 w-40 "
              />
            </a>
          </div>
          <div className="text-center">
            <p className="text-2xl text-gray-800 dark:text-white">
              Camila Figal Pineda
            </p>
            <p className="text-xl font-light text-gray-500 dark:text-gray-200">
              Fundadora
            </p>
            <p className="max-w-xs py-4 font-light text-gray-500 text-md dark:text-gray-400">
              Camila Pineda es an imitator, humorist, actor, born November 14,
              1953 in Pontivy.
            </p>
          </div>
          <div className="flex items-center justify-between pt-8 mx-auto text-gray-500 border-t border-gray-200 w-44"></div>
        </div>
        <div className="p-4">
          <div className="mb-4 text-center opacity-90">
            <a href="#" className="relative block">
              <img
                alt="profil"
                src="/fundadora.jpg"
                className="mx-auto object-cover rounded-full h-56 w-40 "
              />
            </a>
          </div>
          <div className="text-center">
            <p className="text-2xl text-gray-800 dark:text-white">
              Sofia Cristina Lopez
            </p>
            <p className="text-xl font-light text-gray-500 dark:text-gray-200">
              Vicedirectora
            </p>
            <p className="max-w-xs py-4 font-light text-gray-500 text-md dark:text-gray-400">
              Thierry Halliday, born November 4, 1993 in Saint hilaire de riez,
              is css specialist.
            </p>
          </div>
          <div className="flex items-center justify-between pt-8 mx-auto text-gray-500 border-t border-gray-200 w-44"></div>
        </div>
      </div>
    </div>
  );
};
export default Direccion;
