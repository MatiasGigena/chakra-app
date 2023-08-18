const Form = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg">
              Descubre el Jardín Miralibres, un lugar mágico donde las palabras
              bailan entre las flores y los sueños se cultivan. Invita a tu hijo
              a explorar este tesoro literario y a anotar sus pensamientos en
              las páginas en blanco, convirtiéndose así en el autor de su propia
              historia.
            </p>

            <div className="mt-8 ">
              <a href="" className="text-2xl font-bold text-green-600">
                011 2179 5715
              </a>

              <address className="mt-2 not-italic">
                3542 Villa Devoto, Capital Federal, C1419
              </address>
            </div>
            <div
              className="bg-green-50  p-4 shadow-md mt-8 mb-4 text-md text-green-800 rounded-lg  dark:bg-gray-800 dark:text-green-400"
              role="alert"
            >
              <span className="font-bold text-green-700">Contactanos!</span> Nos apasiona
              brindar un ambiente de aprendizaje inspirador. Estamos
              comprometidos en fomentar el crecimiento académico y personal de
              cada niño. Si deseas conocer más sobre nuestros programas,
              metodologías innovadoras y el cuidado dedicado que ofrecemos, te
              invitamos a contactarnos. ¡Juntos crearemos un camino hacia un
              futuro brillante para tu hijo!
            </div>
          </div>

          <div className="rounded-lg bg-white border border-gray-200 p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="" className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 border p-3 text-sm"
                  placeholder="Nombre"
                  type="text"
                  id="nombre"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 border p-3 text-sm"
                    placeholder="Email"
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="Numero">
                    Numero
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 border p-3 text-sm"
                    placeholder="Número de teléfono"
                    type="tel"
                    id="Numero"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                <div>
                  <input
                    className="peer sr-only"
                    id="option1"
                    type="radio"
                    tabIndex="-1"
                    name="option"
                  />

                  <label
                    htmlFor="option1"
                    className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-green-600 peer-checked:border-green-600 peer-checked:bg-green-600 peer-checked:text-white"
                    tabIndex="0"
                  >
                    <span className="text-sm"> Tengo una consulta </span>
                  </label>
                </div>

                <div>
                  <input
                    className="peer sr-only"
                    id="option2"
                    type="radio"
                    tabIndex="-1"
                    name="option"
                  />

                  <label
                    htmlFor="option2"
                    className="block w-full rounded-lg border  border-gray-200 p-3 text-gray-600 hover:border-green-600 peer-checked:border-green-600 peer-checked:bg-green-600 peer-checked:text-white"
                    tabIndex="0"
                  >
                    <span className="text-sm">
                      {" "}
                      Quiero inscribir a mi hijo{" "}
                    </span>
                  </label>
                </div>

                <div>
                  <input
                    className="peer sr-only"
                    id="option3"
                    type="radio"
                    tabIndex="-1"
                    name="option"
                  />

                  <label
                    htmlFor="option3"
                    className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-green-600 peer-checked:border-green-600 peer-checked:bg-green-600 peer-checked:text-white"
                    tabIndex="0"
                  >
                    <span className="text-sm"> Solicitar visita guiada </span>
                  </label>
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="mensaje">
                  Mensaje
                </label>

                <textarea
                  className="w-full rounded-lg border-gray-200 border p-3 text-sm"
                  placeholder="Mensaje"
                  rows="8"
                  id="mensaje"
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-green-600 px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Enviar formulario
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Form;
