import {
  Environment,
  FirstPersonControls,
  FlyControls,
  OrbitControls,
  TrackballControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function ThreeCanvas() {
  return (
    <Canvas className="three-canvas">
      <Environment preset="sunset" />
      <Box />
      <OrbitControls />
      {/* <TrackballControls /> */}
      {/* <FlyControls /> */}
      {/* <FirstPersonControls /> */}
    </Canvas>
  );
}

function Box() {
  return (
    <>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial />
      </mesh>
    </>
  );
}
