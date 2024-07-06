import { useState, useRef, useEffect } from "react";
import carGallery from './carModels';

const Cars = () => {
  const [currentModelIndex, setCurrentModelIndex] = useState(0);
  const [currentCarIndex, setCurrentCarIndex] = useState(0);
  const [expandedCarIndex, setExpandedCarIndex] = useState(-1);
  const expandedCarRef = useRef(null);

  const handleNext = () => {
    setCurrentCarIndex(0); // Reset current car index when changing model
    setCurrentModelIndex((prevIndex) => (prevIndex + 1) % carGallery.length);
    setExpandedCarIndex(-1); // Reset expanded car index
  };

  const handlePrev = () => {
    setCurrentCarIndex(0); // Reset current car index when changing model
    setCurrentModelIndex((prevIndex) => (prevIndex - 1 + carGallery.length) % carGallery.length);
    setExpandedCarIndex(-1); // Reset expanded car index
  };

  const currentCar = carGallery[currentModelIndex].cars[currentCarIndex];
  const similarCars = carGallery[currentModelIndex].cars;

  const toggleExpand = (index) => {
    setExpandedCarIndex(expandedCarIndex === index ? -1 : index);
  };

  useEffect(() => {
    if (expandedCarIndex !== -1 && expandedCarRef.current) {
      expandedCarRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [expandedCarIndex]);

  return (
    <div className="container mx-auto p-6 bg-black/60 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold italic text-center py-4 px-3 text-white bg-gradient-to-r from-primary to-secondary rounded-lg shadow-lg">Hot Deals</h1>
      <div className="text-white flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="w-full md:w-[70%] bg-transparent shadow-2xl rounded-lg overflow-hidden relative flex items-center justify-center p-6 mt-6">
          <div id="slide" className="relative w-full h-96 sm:h-80 md:h-96 shadow-2xl rounded-lg overflow-hidden animate-lightShade">
            <img
              src={currentCar.image}
              alt={currentCar.text}
              className="w-full h-full object-cover rounded-lg transform transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
              <p className="text-2xl text-white font-semibold">{currentCar.text}</p>
              <p className="text-lg text-gray-300">{currentCar.location}</p>
              <p className="text-lg text-gray-300">{currentCar.year} | {currentCar.mileage} miles</p>
              <p className="text-lg text-gray-300">Cost: {currentCar.cost}</p>
              <p className="text-lg text-gray-300">Power: {currentCar.power}</p>
            </div>
          </div>
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <button
              onClick={handlePrev}
              className="shadow-xl border p-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition hover:-translate-y-1 z-10"
            >
              &lt;
            </button>
          </div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <button
              onClick={handleNext}
              className="shadow-xl border p-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition hover:-translate-y-1 z-10"
            >
              &gt;
            </button>
          </div>
        </div>

        <div className="w-full md:w-[30%] mt-6 md:mt-0">
          <h2 className="text-3xl text-white mb-4 text-center font-bold">Similar Cars</h2>
          <div className="w-full flex flex-wrap justify-center gap-4">
            {similarCars.map((car, index) => (
              <div
                key={index}
                id={`car-${index}`}
                className="relative w-[100px] sm:w-[150px] h-auto flex justify-center shadow-2xl rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <img
                  src={car.image}
                  alt={car.text}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {expandedCarIndex !== -1 && (
        <div className="lg:w-[1000px] w-full animate-lightShade h-[50vh] mt-0 flex flex-row min-h-screen justify-center items-center" ref={expandedCarRef}>
          <div
            id={`car-${expandedCarIndex}`}
            className="relative w-[full] h-auto sm:h-96 md:h-auto shadow-2xl rounded-lg overflow-hidden transform transition-transform duration-500 cursor-pointer"
            onClick={() => toggleExpand(expandedCarIndex)}
          >
            <img
              src={similarCars[expandedCarIndex].image}
              alt={similarCars[expandedCarIndex].text}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black to-transparent z-10">
              <p className="text-2xl text-white font-semibold">{similarCars[expandedCarIndex].text}</p>
              <p className="text-xl text-gray-300">Cost: {similarCars[expandedCarIndex].cost}</p>
              <p className="text-xl text-gray-300">Power: {similarCars[expandedCarIndex].power}</p>
              <p className="text-xl text-gray-300">Mileage: {similarCars[expandedCarIndex].mileage} miles</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cars;
