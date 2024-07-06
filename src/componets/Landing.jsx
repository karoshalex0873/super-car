import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Hero from './Hero';
import AudiR8 from '../assets/audi1.jpg';
const Landing = () => {
  useGSAP(() => {
    gsap.to('#Landing', { opacity: 1, duration:2,color:'white'});
    gsap.to('#after',{ease:'power2.in',opacity:1,duration:2,delay:1,marginTop:0})
  }, []);

  const audiHistory = `
    Karobia vehicle is  a company that deals with  Super car selling
  `;

  const audiModels = [
    {
      id: 1,
      name: 'Example of car Model',
      description: 'A car of your Dream',
      image: AudiR8
    },
        // Add more models as needed
  ];

  return (
    <div className="container py-3 text-white bg-black/50 mx-auto w-full ">
        <div>
          <h1 id="Landing" className="opacity-0 text-5xl text-white font-bold text-center">Super cars</h1>
        </div>
      <div id="after" className=" text-white bg-transparent mx-auto lg:flex opacity-0  mt-72">
        <div  className="container mx-auto py-10 flex flex-col">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">About our</h2>
            <p className="text-sm font-light leading-relaxed text-start ">{audiHistory}</p>
          </div>

          <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-2 text-sm">
            {audiModels.map((model) => (
              <div key={model.id} className="rounded-lg shadow-lg p-6 flex flex-col items-center  text-start">
                <img src={model.image} alt={model.name} className="mb-4 rounded-lg w-64 h-auto" />
                <h3 className="text-xl font-bold text-white mb-2">{model.name}</h3>
                <p className="text-gray-300 text-start ">{model.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="py-10 flex justify-center w-full bg-black/60 rounded-xl">
          <div className="shadow-xl">
            <div className="text-center px-10 py-3 text-xl">
              <h1 className="font-light text-3xl italic  text-white  w-full h-full">Drag the Model</h1>
              <div>
                <Hero />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
