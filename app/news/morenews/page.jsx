import Image from "next/image"
const page = () => {
  return (
    <div className="p-[60px] bg-white">
  <div className="flex flex-col items-center justify-center">
    <h1 className="font-medium text-center text-4xl">Revisa todas las noticias!</h1>
    <div className="container">
      <div className="mt-8 grid grid-cols-2 gap-6 rounded-xl bg-white p-2 lg:grid-cols-3 w-full h-full">
        <div className="group relative overflow-hidden h-[25rem] w-full rounded-xl">
          <div className="absolute inset-0 h-full w-full group-hover:bg-black/30"></div>

          <Image loading="eager" fill src="/bosquescuela.jpg" className="object-cover" alt="Nasi lemak cover" />
        </div>
        <div className="group relative overflow-hidden h-[25rem] w-full rounded-xl">
          <div className="absolute inset-0 z-10 h-full w-full group-hover:bg-black/30"></div>

          <Image loading="eager" fill src="/Dia-de-las-Infancias-San-Isidro2022-Museo-del-Juguete-Foto-Carlos-Furman-DSC_8290-1024x796.jpg" className="object-cover" alt="Nasi lemak cover" />
        </div>
        <div className="group relative overflow-hidden h-[25rem] w-full rounded-xl">
          <div className="absolute inset-0 z-10 h-full w-full group-hover:bg-black/30"></div>

          <Image loading="eager" fill src="/huerta.jpg" className="object-cover" alt="Nasi lemak cover" />
        </div>
        <div className="group relative overflow-hidden h-[25rem] w-full rounded-xl">
          <div className="absolute inset-0 z-10 h-full w-full group-hover:bg-black/30"></div>

          <Image loading="eager" fill src="/ninos-19888-10-consejos-para-que-los-ninos-se-puedan-adaptar-correctamente-al-jardin-de-infantes-200325659-001.jpg" className="object-cover" alt="Nasi lemak cover" />
        </div>
        <div className="group relative overflow-hidden h-[25rem] w-full rounded-xl">
          <div className="absolute inset-0 z-10 h-full w-full group-hover:bg-black/30"></div>

          <Image loading="eager" fill src="https://images.unsplash.com/photo-1664136262345-daa7e71f0c0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" className="object-cover" alt="Nasi lemak cover" />
        </div>
        <div className="group relative overflow-hidden h-[25rem] w-full rounded-xl">
          <div className="absolute inset-0 z-10 h-full w-full group-hover:bg-black/30"></div>

          <Image loading="eager" fill src="https://images.unsplash.com/photo-1664142315040-69e24a9c2356?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" className="object-cover" alt="Nasi lemak cover" />
        </div>
        <div className="group relative overflow-hidden h-[25rem] w-full rounded-xl">
          <div className="absolute inset-0 z-10 h-full w-full group-hover:bg-black/30"></div>

          <Image loading="eager" fill src="https://images.unsplash.com/photo-1664141232184-456f73b8be74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" className="object-cover" alt="Nasi lemak cover" />
        </div>
        <div className="group relative overflow-hidden h-[25rem] w-full rounded-xl">
          <div className="absolute inset-0 z-10 h-full w-full group-hover:bg-black/30"></div>

          <Image loading="eager" fill src="https://images.unsplash.com/photo-1664176062054-715f89b1974b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" className="object-cover" alt="Nasi lemak cover" />
        </div>
        <div className="group relative overflow-hidden h-[25rem] w-full rounded-xl">
          <div className="absolute inset-0 z-10 h-full w-full group-hover:bg-black/30"></div>

          <Image loading="eager" fill src="/nathan-dumlao-P5MXtYfgmmw-unsplash.jpg" className="object-cover" alt="Nasi lemak cover" />
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
export default page