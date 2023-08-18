"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Home = () => {
  const images = [
    "/IMG-7097.jpg",
    "/Kindergarten-What-your-child-should-know.jpg",
    "/mainimage-10.jpg",
    "/prosperpine-kindy1.jpg",
    "/Sin título.jpg",
    "/Student_2.JPG.thumb.1280.1280.jpg",
    "/WhatsApp Image 2023-06-25 at 21.30.12.jpeg",
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3500,
  };
  const features = [
    {
      name: "Seguridad",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
          <path
            fillRule="evenodd"
            d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },

    {
      name: "+400 valoraciones",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
          <path
            fillRule="evenodd"
            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  const [isVideoPoppedUp, setVideoPopUp] = useState(false);

  return (
    <section>
      <div className="max-w-screen-xl  mx-auto px-4 py-14 gap-12 text-gray-600 md:px-8 xl:flex">
        <div className="space-y-7 max-w-2xl mx-auto text-center xl:text-left">
          <div className="flex flex-wrap items-center justify-center gap-6 xl:justify-start">
            {features.map((item, idx) => (
              <div key={idx} className="flex items-center gap-x-2 text-gray-500 text-sm">
                {item.icon}
                {item.name}
              </div>
            ))}
          </div>
          <h1 className="caca text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            Jardin Miralibres, crecemos, aprendemos y disfrutamos. Juntos.
          </h1>
          <p className="relative tomate max-w-xl mx-auto xl:mx-0">
            Creemos firmemente que cada niño es un ser único e irrepetible, lleno de potencialidades por descubrir y
            desarrollar. Todo enmarcado en un contexto familiar y social único en donde creceran con todos los valores
            necesarios.
          </p>

          <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 xl:justify-start">
            <a
              href="/home"
              className="a flex items-center justify-center gap-x-2 py-2 px-4 text-white font-medium bg-green-600 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg md:inline-flex">
              Saber más
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="/form"
              className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
              Contáctanos
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <div className=" -z-20 mt-5 p-5 leading-normal text-white bg-gray-900 rounded-xl" role="alert">
            <p>
              Por que Miralibres? Un lugar mágico donde los niños crecen, aprenden y descubren el mundo a través del
              juego. Es el escenario perfecto para desarrollar habilidades sociales, cognitivas y emocionales mientras
              se divierten. Un paso crucial en su camino hacia el éxito educativo y el desarrollo integral.
            </p>
          </div>
        </div>

        <div className="flex-1 max-w-xl mx-auto mt-14 xl:mt-1">
          <div className="relative h-[520px] w-full">
            <Image fill quality={100} src="/about-kindy.jpg" className="object-cover rounded-3xl" alt="" />
            <button
              className="absolute w-16 h-16 rounded-full inset-0 m-auto duration-150 bg-blue-500 hover:bg-blue-600 ring-offset-2 focus:ring text-white"
              onClick={() => setVideoPopUp(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 m-auto">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isVideoPoppedUp ? (
        <div className="fixed inset-0 w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 w-full h-full bg-black/50" onClick={() => setVideoPopUp(false)}></div>
          <div className="px-4 relative">
            <button
              className="w-12 h-12 mb-5 rounded-full duration-150 bg-gray-800 hover:bg-gray-700 text-white"
              onClick={() => setVideoPopUp(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 m-auto">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
            <iframe
              width="330"
              height="170"
              src="https://www.youtube.com/embed/NIk1-ck4c6Q"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-md"
              ></iframe>
          </div>
        </div>
      ) : (
        ""
      )}
      <Slider className="bg-green-600 py-5 w-full overflow-hidden" {...settings}>
      {images.map((image, index) => (
        <div key={index} className="relative h-56  w-full">
          <Image loading="eager" fill src={image} alt="" className="object-cover "/>
        </div>
      ))}
    </Slider>
    </section>
  );
};
export default Home;
