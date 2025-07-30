'use client';
import { ReactLenis } from 'lenis/react';
export default function index() {
  return (
    <ReactLenis root>
      <main className="bg-black">
        <div className="wrapper">
          

        </div>

        <section className="text-white   w-full bg-white  ">
          <div className="grid grid-cols-2">
            <div className="sticky top-0 h-screen flex items-center justify-center">
              <h1 className="2xl:text-7xl text-black text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
                Mission
                <br /> 
              </h1>
            </div>
            <div className="grid gap-2">
              <figure className="grid place-content-center -skew-x-12">
                <img
                  src="https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 w-80 h-96  align-bottom object-cover "
                />
              </figure>
              <figure className="grid place-content-center skew-x-12">
                <img
                  src="https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 w-80 h-96  align-bottom object-cover "
                />
              </figure>
              <figure className="grid place-content-center -skew-x-12">
                <img
                  src="https://images.unsplash.com/photo-1718601980986-0ce75101d52d?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 w-80 h-96  align-bottom object-cover "
                />
              </figure>
              <figure className="grid place-content-center skew-x-12">
                <img
                  src="https://images.unsplash.com/photo-1685904042960-66242a0ac352?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 w-80 h-96  align-bottom object-cover "
                />
              </figure>
            </div>
          </div>
        </section>
        <section className="text-white   w-full bg-white  ">
          <div className="grid grid-cols-2 px-8">
            <div className="grid gap-2">
              <figure className="sticky top-0 h-screen grid place-content-center">
                <img
                  src="https://images.unsplash.com/photo-1718183120769-ece47f31045b?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 w-96 h-96  align-bottom object-cover rounded-md"
                />
              </figure>
              <figure className="sticky top-0 h-screen grid place-content-center">
                <img
                  src="https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300  w-96 h-96   align-bottom object-cover rounded-md"
                />
              </figure>
              <figure className="sticky top-0 h-screen grid place-content-center">
                <img
                  src="https://images.unsplash.com/photo-1685904042960-66242a0ac352?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300 w-96 h-96   align-bottom object-cover rounded-md"
                />
              </figure>
              <figure className="sticky top-0 h-screen grid place-content-center">
                <img
                  src="https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=500&auto=format&fit=crop"
                  alt=""
                  className="transition-all duration-300  w-96 h-96   align-bottom object-cover rounded-md"
                />
              </figure>
            </div>
            <div className="sticky top-0 h-screen grid place-content-center">
              <h1 className="text-4xl  text-black px-8 font-medium text-right tracking-tight leading-[120%]">
                Vision
              </h1>
            </div>
          </div>
        </section>

      </main>
    </ReactLenis>
  );
}
