import { Canvas } from '@react-three/fiber';
import { View } from '@react-three/drei';
import ModelView from './ModelView';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Hero = () => {
  useGSAP(() =>
  {
    gsap.to('#hero',{opacity:1,
     x:50,
     duration:5,
     ease:'power3.out',
    })
  },[])
    return (
      <div className="">
        <div>
          <ModelView />
          <Canvas
        className="opacity-0"
        id='hero'
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
        }}
        eventSource={document.getElementById('root')}
      >
        <View.Port />
      </Canvas>
        </div>
      </div>
    );
  };


export default Hero;
