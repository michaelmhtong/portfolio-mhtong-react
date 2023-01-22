import * as THREE from "three";
import React, { Suspense, useRef } from "react";
import { Canvas, extend, useFrame, useThree, useLoader } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

const Panorama = ({ src }) => {
  const texture = useLoader(THREE.TextureLoader, src);

  function Controls(props) {
    const { camera, gl } = useThree();
    const ref = useRef();
    useFrame(() => ref.current.update());
    return <orbitControls ref={ref} target={[0, 0, 0]} {...props} args={[camera, gl.domElement]} />;
  }

  return (
    <div style={{ aspectRatio: 2.39 / 1 }}>
      <Canvas camera={{ position: [0, 0, 0.1], fov: 70 }}>
        <Controls
          enableZoom={false}
          enablePan={true}
          enableDamping
          // dampingFactor={0.2}
          autoRotate={true}
          rotateSpeed={1}
          maxAzimuthAngle={-Math.PI / 10}
          panSpeed={0.1}
        />
        <mesh>
          <sphereBufferGeometry attach="geometry" args={[500, 60, 60]} />
          <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Panorama;
