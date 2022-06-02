import React from "react";
import dodo from "../../Assets/image/dodo.jpg";
const Landing = () => {
  return (
    <>
      <div class="hero min-h-screen bg-base-200 mt-16">
        <div class="hero-content flex-col lg:flex-row">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
          
            <p>best quality</p>
            <h1 class="text-5xl font-bold">Blue Jobs Boobs!</h1>
            <p class="py-6 max-w-xl">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
          <div
            className="h-[60vh]"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img src={dodo} class="h-full" alt="" />
          </div>
        </div>
      </div>
      <div className="shadow-lg rounded-lg p-10 z-[1500] mt-[-50px] w-5/6 mx-auto bg-accent-focus my-10" >
        <h2>proffesonal skill</h2>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4" >
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
      </div>
    </>
  );
};

export default Landing;
