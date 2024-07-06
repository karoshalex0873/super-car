import React, { useRef, useState, useEffect } from 'react';
import { Html, OrbitControls, PerspectiveCamera, View } from '@react-three/drei';
import Lights from './Lights';
import { Suspense } from 'react';
import Audi from './Audi';
import * as THREE from 'three';
import gsap from 'gsap';
import { Typewriter } from 'react-simple-typewriter';

const ModelView = () => {
  const cameraRef = useRef();
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [hideContent, setHideContent] = useState(false);

  const paragraphs = [
    "Get the Best car of your dream",
    "Long lasting",
    "Powered car",
    "Top Speed car",
    "Insured Cars"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.to(cameraRef.current.position, {
        x: -6,
        y: 1,
        z: 3,
        duration: 5,
        delay: 2,
        onUpdate: () => {
          cameraRef.current.updateProjectionMatrix();
        },
        onComplete: () => {
          setShowTypewriter(true);
          showParagraphs();
        },
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const showParagraphs = () => {
    paragraphs.forEach((_, index) => {
      gsap.to({}, {
        duration: 2,
        delay: (index + 1) * 3,
        onStart: () => setCurrentParagraph(index),
        onComplete: () => {
          if (index === paragraphs.length - 1) {
            setTimeout(() => {
              setHideContent(true);
            }, 5000);
          }
        },
      });
    });
  };

  return (
    <div className="relative lg:w-[700px] lg:h-[80vh] lg:10 p:2 w-[400px] h-[50vh]">
      <div className="absolute inset-0 w-full h-full"></div>
      <div className="w-full h-full animate-lightShade relative">
        {!hideContent && (
          <>
            <h1 className="absolute top-5 left-10 text-2xl font-bold">Super Cars</h1>
            <div className="absolute top-20 left-10 text-sm lg:text-xl font-thin text-start">
              {showTypewriter && (
                <Typewriter
                  words={[paragraphs[0]]}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              )}
            </div>
          </>
        )}
        <View className="w-full h-full cursor-pointer">
          <ambientLight intensity={0.8} />
          <PerspectiveCamera ref={cameraRef} makeDefault position={[3, 1, 4]} />
          <Lights />
          <OrbitControls
            makeDefault
            enableZoom={false}
            enablePan={false}
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
            rotateSpeed={0.4}
            rotation={[-Math.PI / 2, 0, 0]}
            target0={new THREE.Vector3(0, 0, 0)}
          />
          <group position={[0, 0, 0]}>
            <Suspense fallback={<Html><div>Loading</div></Html>}>
            <Audi />
            </Suspense>
          </group>
        </View>
        {!hideContent && (
          <div className="absolute bottom-10 left-10 bg-transparent p-4 rounded-lg shadow-lg animate-fadeIn">
            {paragraphs.slice(1).map((text, index) => (
              <p
                key={index}
                className={`transition-opacity text-start delay-3000 duration-1000 ${currentParagraph === index + 1 ? 'opacity-100' : 'opacity-0'}`}
              >
                {text}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ModelView;
