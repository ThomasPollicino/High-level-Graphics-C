import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import {MTLLoader} from 'three/addons/loaders/MTLLoader.js';


let objects; 
function main() {

	const canvas = document.querySelector( '#c' );
	const renderer = new THREE.WebGLRenderer( { antialias: true, canvas } );

	const fov = 45;
	const aspect = 2; 
	const near = 1;
	const far = 1000;
	const camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
	camera.position.set( 0, 10, 20 );

	const controls = new OrbitControls( camera, canvas );
	controls.target.set( 0, 5, 0 );
	controls.update();

	const scene = new THREE.Scene();
	scene.background = new THREE.Color( 'lightBlue' );

	const donutModeButton = document.getElementById('donutModeButton');
	let donutMode = false;

	donutModeButton.addEventListener('click', () => {
  		donutMode = !donutMode;
	});
	let dCheck=false;
	let dCheck2=false;

	{

		const planeSize = 180;

		const loader = new THREE.TextureLoader();
		const texture = loader.load( 'https://threejs.org/manual/examples/resources/images/checker.png' );
		texture.colorSpace = THREE.SRGBColorSpace;
		texture.wrapS = THREE.RepeatWrapping;
		texture.wrapT = THREE.RepeatWrapping;
		texture.magFilter = THREE.NearestFilter;
		const repeats = planeSize / 2;
		texture.repeat.set( repeats, repeats );

		const planeGeo = new THREE.PlaneGeometry( planeSize, planeSize );
		const planeMat = new THREE.MeshPhongMaterial( {
			map: texture,
			side: THREE.DoubleSide,
		} );
		const mesh = new THREE.Mesh( planeGeo, planeMat );
		mesh.rotation.x = Math.PI * - .5;
		scene.add( mesh );

	}


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




	{

		const skyColor = 0xB1E1FF; 
		const groundColor = 0xB97A20; 
		const intensity = 3;
		const light = new THREE.HemisphereLight( skyColor, groundColor, intensity );
		scene.add( light );

	}

	{

		const color = 0xFF0000;
		const intensity = 2.5;
		const light = new THREE.DirectionalLight( color, intensity );
		light.position.set( 0, 10, -3 );
		light.target.position.set( - 5, 0, 0 );
		scene.add( light );
		scene.add( light.target );


		
	}
	{

		const color = 0xFFFF00;
		const intensity = 2.5;
		const light = new THREE.DirectionalLight( color, intensity );
		light.position.set( 0, 10, 0 );
		light.target.position.set( - 5, 0, 0 );
		scene.add( light );
		scene.add( light.target );


		
	}
	{

		const color = 0x800080;
		const intensity = 2.5;
		const light = new THREE.DirectionalLight( color, intensity );
		light.position.set( 0, 5, 0 );
		light.target.position.set( - 5, 0, 0 );
		scene.add( light );
		scene.add( light.target );


		
	}

	{
		{
			const color = 0x800080; 
			const intensity = 5;
		  
			const ambientLight = new THREE.AmbientLight(color, intensity);
			scene.add(ambientLight);
		}
	}


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


	{
		const loader = new THREE.CubeTextureLoader();
		const texture = loader.load([
		  'lib/cartoonCity.jpg',
		  'lib/cartoonCity.jpg',
		  'lib/cartoonCity.jpg',
		  'lib/cartoonCity.jpg',
		  'lib/cartoonCity.jpg',
		  'lib/cartoonCity.jpg',
		]);
		scene.background = texture;
	}


	//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

	

	  let carGroup;
{
  const mtlLoader = new MTLLoader();
  const objLoader = new OBJLoader();
  mtlLoader.load('lib/Avent_sport.mtl', (mtl) => {
    mtl.preload();
    objLoader.setMaterials(mtl);
    objLoader.load('lib/Avent_sport.obj', (root) => {//Credit: https://free3d.com/3d-model/lamborghini-aventador-sport-44634.html
      const scaleFactor = 5.0;
      root.scale.set(scaleFactor, scaleFactor, scaleFactor);
      root.rotation.y = -Math.PI / 2;

      carGroup = new THREE.Group();
      carGroup.add(root);

      carGroup.position.set(-38, 2.31, 150);

      scene.add(carGroup);
      objects.push(carGroup);
    });
  });
}

let newCarGroup;
{
  const mtlLoader = new MTLLoader();
  const objLoader = new OBJLoader();
  mtlLoader.load('lib/Avent_sport.mtl', (mtl) => {
    mtl.preload();
    objLoader.setMaterials(mtl);
    objLoader.load('lib/Avent_sport.obj', (root) => {
      const scaleFactor = 5.0;
      root.scale.set(scaleFactor, scaleFactor, scaleFactor);
      root.rotation.y = -Math.PI / 2;

      newCarGroup = new THREE.Group();
      newCarGroup.add(root);

      newCarGroup.position.set(61, 2.31, 150); 
      scene.add(newCarGroup);
      objects.push(newCarGroup);
    });
  });
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



let oppositeCar1;
{
  const mtlLoader = new MTLLoader();
  const objLoader = new OBJLoader();
  mtlLoader.load('lib/Avent_sport.mtl', (mtl) => {
    mtl.preload();
    objLoader.setMaterials(mtl);
    objLoader.load('lib/Avent_sport.obj', (root) => {
      const scaleFactor = 5.0;
      root.scale.set(scaleFactor, scaleFactor, scaleFactor);
      root.rotation.y = Math.PI / 2; 

      oppositeCar1 = new THREE.Group();
      oppositeCar1.add(root);

      oppositeCar1.position.set(-62, 2.31, -150); 

      scene.add(oppositeCar1);
      objects.push(oppositeCar1);
    });
  });
}

let oppositeCar2;
{
  const mtlLoader = new MTLLoader();
  const objLoader = new OBJLoader();
  mtlLoader.load('lib/Avent_sport.mtl', (mtl) => {
    mtl.preload();
    objLoader.setMaterials(mtl);
    objLoader.load('lib/Avent_sport.obj', (root) => {
      const scaleFactor = 5.0;
      root.scale.set(scaleFactor, scaleFactor, scaleFactor);
      root.rotation.y = Math.PI / 2; 

      oppositeCar2 = new THREE.Group();
      oppositeCar2.add(root);

      oppositeCar2.position.set(38, 2.31, -150); 

      scene.add(oppositeCar2);
      objects.push(oppositeCar2);
    });
  });
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


let xCar1;
{
  const mtlLoader = new MTLLoader();
  const objLoader = new OBJLoader();
  mtlLoader.load('lib/Avent_sport.mtl', (mtl) => {
    mtl.preload();
    objLoader.setMaterials(mtl);
    objLoader.load('lib/Avent_sport.obj', (root) => {
      const scaleFactor = 5.0;
      root.scale.set(scaleFactor, scaleFactor, scaleFactor);
      root.rotation.y = Math.PI; // Rotate the car to face the positive x-direction

      xCar1 = new THREE.Group();
      xCar1.add(root);

      xCar1.position.set(0, 2.31, 72); // Set the initial position

      scene.add(xCar1);
      objects.push(xCar1);
    });
  });
}

let xCar2;
{
  const mtlLoader = new MTLLoader();
  const objLoader = new OBJLoader();
  mtlLoader.load('lib/Avent_sport.mtl', (mtl) => {
    mtl.preload();
    objLoader.setMaterials(mtl);
    objLoader.load('lib/Avent_sport.obj', (root) => {
      const scaleFactor = 5.0;
      root.scale.set(scaleFactor, scaleFactor, scaleFactor);
      root.rotation.y = Math.PI; // Rotate the car to face the positive x-direction

      xCar2 = new THREE.Group();
      xCar2.add(root);

      xCar2.position.set(0, 2.31, -48); // Set the initial position

      scene.add(xCar2);
      objects.push(xCar2);
    });
  });
}

let xCar3;
{
  const mtlLoader = new MTLLoader();
  const objLoader = new OBJLoader();
  mtlLoader.load('lib/Avent_sport.mtl', (mtl) => {
    mtl.preload();
    objLoader.setMaterials(mtl);
    objLoader.load('lib/Avent_sport.obj', (root) => {
      const scaleFactor = 5.0;
      root.scale.set(scaleFactor, scaleFactor, scaleFactor);
      root.rotation.y = 0; // Rotate the car to face the negative x-direction

      xCar3 = new THREE.Group();
      xCar3.add(root);

      xCar3.position.set(18, 2.31, 48); // Set the initial position

      scene.add(xCar3);
      objects.push(xCar3);
    });
  });
}

let xCar4;
{
  const mtlLoader = new MTLLoader();
  const objLoader = new OBJLoader();
  mtlLoader.load('lib/Avent_sport.mtl', (mtl) => {
    mtl.preload();
    objLoader.setMaterials(mtl);
    objLoader.load('lib/Avent_sport.obj', (root) => {
      const scaleFactor = 5.0;
      root.scale.set(scaleFactor, scaleFactor, scaleFactor);
      root.rotation.y = 0; // Rotate the car to face the negative x-direction

      xCar4 = new THREE.Group();
      xCar4.add(root);

      xCar4.position.set(-18, 2.31, -72); // Set the initial position

      scene.add(xCar4);
      objects.push(xCar4);
    });
  });
}
	
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

	{
		const mtlLoader = new MTLLoader();
		const objLoader = new OBJLoader();
		mtlLoader.load('lib/eiffel.mtl', (mtl) => {
		  mtl.preload();
		  objLoader.setMaterials(mtl);
		  objLoader.load('lib/eiffel.obj', (root) => {//Credit: https://free3d.com/3d-model/-eiffel-tower-v1--470573.html
			const scaleFactor = 0.005;
			root.scale.set(scaleFactor, scaleFactor, scaleFactor);
			
			root.rotation.x = -Math.PI / 2; 
			root.position.set(25, 0, 27);
			root.position.x = 0; 
			root.position.y = 0.31; 
			root.position.z = 0; 
			
			scene.add(root);
		  });
		});
	  }


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

{
	const mtlLoader = new MTLLoader();
	const objLoader = new OBJLoader();
	mtlLoader.load('lib/liberty/LibertStatue.mtl', (mtl) => {
	  mtl.preload();
	  objLoader.setMaterials(mtl);
	  objLoader.load('lib/liberty/LibertStatue.obj', (root) => {//Credit: https://free3d.com/3d-model/statue-of-liberty-73656.html 
		const scaleFactor = 100;
		root.scale.set(scaleFactor, scaleFactor, scaleFactor);
		
		
		root.position.set(25, 0, 27);
		root.position.x = 125; 
		root.position.y = 0.31; 
		root.position.z = -120; 
		
		scene.add(root);
	  });
	});
  }


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  {
	const mtlLoader = new MTLLoader();
	const objLoader = new OBJLoader();
	mtlLoader.load('lib/plane/part1.mtl', (mtl) => {
	  mtl.preload();
	  objLoader.setMaterials(mtl);
	  objLoader.load('lib/plane/part1.obj', (root) => {//Credit: https://free3d.com/3d-model/lowpoly-private-jet-plane-16925.html 
		const scaleFactor = 30;
		root.scale.set(scaleFactor, scaleFactor, scaleFactor);
		
		
		root.position.set(25, 0, 27);
		root.position.x = -135; 
		root.position.y = 10; 
		root.position.z = 135; 
		root.rotation.y = -Math.PI/4 // 45 degrees in radians
		scene.add(root);
	  });
	});
  }

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


  {
	const mtlLoader = new MTLLoader();
	const objLoader = new OBJLoader();
	mtlLoader.load('lib/heli/Heli_bell.mtl', (mtl) => {
	  mtl.preload();
	  objLoader.setMaterials(mtl);
	  objLoader.load('lib/heli/Heli_bell.obj', (root) => {//Credit: https://free3d.com/3d-model/heli-bell-206-359500.html 
		const scaleFactor = 4;
		root.scale.set(scaleFactor, scaleFactor, scaleFactor);
		
		
		root.position.set(25, 0, 27);
		root.position.x = 133; 
		root.position.y = 0.31; 
		root.position.z = 140; 
		root.rotation.y = Math.PI / 4; // 45 degrees in radians

		scene.add(root);
	  });
	});
  }

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

{
	const mtlLoader = new MTLLoader();
	const objLoader = new OBJLoader();
	mtlLoader.load('lib/build/10068_empire_state_building_v1_L3.mtl', (mtl) => {
	  mtl.preload();
	  objLoader.setMaterials(mtl);
	  objLoader.load('lib/build/10068_empire_state_building_v1_L3.obj', (root) => {//Credit: https://free3d.com/3d-model/empire-state-building-v2--490585.html 
		const scaleFactor = 0.004;
		root.scale.set(scaleFactor, scaleFactor, scaleFactor);
		
					root.rotation.x = -Math.PI / 2; 

		root.position.set(25, 0, 27);
		root.position.x = -120; 
		root.position.y = 0.31; 
		root.position.z = -120; 
		
		root.rotation.x = -Math.PI / 2; 


		scene.add(root);
	  });
	});
  }

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    {
		const boxWidth = 1;
		const boxHeight = 1;
		const boxDepth = 1;
		const boxGeometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
	
		const cylinderRadius = 0.5;
		const cylinderHeight = 1;
		const cylinderGeometry = new THREE.CylinderGeometry(cylinderRadius, cylinderRadius, cylinderHeight);
	
		const pyramidRadius = 0.5;
		const pyramidHeight = 1;
		const pyramidGeometry = new THREE.ConeGeometry(pyramidRadius, pyramidHeight, 4);
	
		function makeInstance(geometry, x, y, z, scaleX, scaleY, scaleZ, rotationX, rotationY, rotationZ, texture, color) {
			const material = texture ? new THREE.MeshPhongMaterial({ map: texture }) : new THREE.MeshPhongMaterial();
			if (color) {
				material.color.setHex(color);
			}
			const mesh = new THREE.Mesh(geometry, material);
			mesh.scale.set(scaleX, scaleY, scaleZ);
			mesh.rotation.set(rotationX, rotationY, rotationZ);
			mesh.position.set(x, y, z);
			scene.add(mesh);
			return mesh;
		}
	
		const loader = new THREE.TextureLoader();
		const texture = loader.load('lib/coolCat.jpg');
		texture.colorSpace = THREE.SRGBColorSpace;
	
		objects = [
			makeInstance(boxGeometry, -5, 5, 0, 1, 1, 1, 0, 0, 0, texture, 0x44aa88),
			makeInstance(cylinderGeometry, -5, 5, 3, 1, 1, 1, 0, 0, 0, null, 0x8844aa),
			makeInstance(pyramidGeometry, -5, 5, -3, 1, 1, 1, 0, 0, 0, null, 0xaa8844),
		  ];
	


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------		  



		const roadWidth = 35;
		const roadHeight = 0.15;
		const roadDepth = 360;
		const roadGeometry = new THREE.BoxGeometry(roadWidth, roadHeight, roadDepth);
		const roadColor = 0x444444;
	
		const road1 = makeInstance(roadGeometry, 50, 0.35, 0, 1, 1, 1, 0, 0, 0, null, roadColor);
		const road4 = makeInstance(roadGeometry, -50, 0.35, 0, 1, 1, 1, 0, 0, 0, null, roadColor);
		const road2 = makeInstance(roadGeometry, 0, 0.3, 60, 1, 1, 1, 0, Math.PI / 2, 0, null, roadColor);
		const road3 = makeInstance(roadGeometry, 0, 0.3, -60, 1, 1, 1, 0, Math.PI / 2, 0, null, roadColor);

		const roadLineWidth = 0.5;
		const roadLineHeight = 0.1;
		const roadLineDepth = 10;
		const roadLineGeometry = new THREE.BoxGeometry(roadLineWidth, roadLineHeight, roadLineDepth);
		const roadLineColor = 0xFFFF00; 

		const roadLine1 = makeInstance(roadLineGeometry, 50, 0.4, 20, 1, 1, 1, 0, 0, 0, null, roadLineColor);
		const roadLine2 = makeInstance(roadLineGeometry, 50, 0.4, 0, 1, 1, 1, 0, 0, 0, null, roadLineColor);
		const roadLine3 = makeInstance(roadLineGeometry, 50, 0.4, -20, 1, 1, 1, 0, 0, 0, null, roadLineColor);
		const roadLine4 = makeInstance(roadLineGeometry, -50, 0.4, 20, 1, 1, 1, 0, 0, 0, null, roadLineColor);
		const roadLine5 = makeInstance(roadLineGeometry, -50, 0.4, 0, 1, 1, 1, 0, 0, 0, null, roadLineColor);
		const roadLine6 = makeInstance(roadLineGeometry, -50, 0.4, -20, 1, 1, 1, 0, 0, 0, null, roadLineColor);

		const roadLine01 = makeInstance(roadLineGeometry, 50, 0.4, 100, 1, 1, 1, 0, 0, 0, null, roadLineColor);
		const roadLine02 = makeInstance(roadLineGeometry, 50, 0.4, 120, 1, 1, 1, 0, 0, 0, null, roadLineColor);
		const roadLine03 = makeInstance(roadLineGeometry, 50, 0.4, 140, 1, 1, 1, 0, 0, 0, null, roadLineColor);
		const roadLine04 = makeInstance(roadLineGeometry, -50, 0.4, -100, 1, 1, 1, 0, 0, 0, null, roadLineColor);
		const roadLine05 = makeInstance(roadLineGeometry, -50, 0.4, -120, 1, 1, 1, 0, 0, 0, null, roadLineColor);
		const roadLine06 = makeInstance(roadLineGeometry, -50, 0.4, -140, 1, 1, 1, 0, 0, 0, null, roadLineColor);

		const roadLine001 = makeInstance(roadLineGeometry, -50, 0.4, 100, 1, 1, 1, 0, 0, 0, null, roadLineColor);
		const roadLine002 = makeInstance(roadLineGeometry, -50, 0.4, 120, 1, 1, 1, 0, 0, 0, null, roadLineColor);
		const roadLine003 = makeInstance(roadLineGeometry, -50, 0.4, 140, 1, 1, 1, 0, 0, 0, null, roadLineColor);
		const roadLine004 = makeInstance(roadLineGeometry, 50, 0.4, -100, 1, 1, 1, 0, 0, 0, null, roadLineColor);
		const roadLine005 = makeInstance(roadLineGeometry, 50, 0.4, -120, 1, 1, 1, 0, 0, 0, null, roadLineColor);
		const roadLine006 = makeInstance(roadLineGeometry, 50, 0.4, -140, 1, 1, 1, 0, 0, 0, null, roadLineColor);

		const roadLine7 = makeInstance(roadLineGeometry, 20, 0.35, 60, 1, 1, 1, 0, Math.PI / 2, 0, null, roadLineColor);
		const roadLine8 = makeInstance(roadLineGeometry, 0, 0.35, 60, 1, 1, 1, 0, Math.PI / 2, 0, null, roadLineColor);
		const roadLine9 = makeInstance(roadLineGeometry, -20, 0.35, 60, 1, 1, 1, 0, Math.PI / 2, 0, null, roadLineColor);
		const roadLine10 = makeInstance(roadLineGeometry, 20, 0.35, -60, 1, 1, 1, 0, Math.PI / 2, 0, null, roadLineColor);
		const roadLine11 = makeInstance(roadLineGeometry, 0, 0.35, -60, 1, 1, 1, 0, Math.PI / 2, 0, null, roadLineColor);
		const roadLine12 = makeInstance(roadLineGeometry, -20, 0.35, -60, 1, 1, 1, 0, Math.PI / 2, 0, null, roadLineColor);

		const roadLine77 = makeInstance(roadLineGeometry, 100, 0.35, 60, 1, 1, 1, 0, Math.PI / 2, 0, null, roadLineColor);
		const roadLine88 = makeInstance(roadLineGeometry, 120, 0.35, 60, 1, 1, 1, 0, Math.PI / 2, 0, null, roadLineColor);
		const roadLine99 = makeInstance(roadLineGeometry, 140, 0.35, 60, 1, 1, 1, 0, Math.PI / 2, 0, null, roadLineColor);
		const roadLine100 = makeInstance(roadLineGeometry, -100, 0.35, -60, 1, 1, 1, 0, Math.PI / 2, 0, null, roadLineColor);
		const roadLine111 = makeInstance(roadLineGeometry, -120, 0.35, -60, 1, 1, 1, 0, Math.PI / 2, 0, null, roadLineColor);
		const roadLine122 = makeInstance(roadLineGeometry, -140, 0.35, -60, 1, 1, 1, 0, Math.PI / 2, 0, null, roadLineColor);

		const roadLine777 = makeInstance(roadLineGeometry, 100, 0.35, -60, 1, 1, 1, 0, Math.PI / 2, 0, null, roadLineColor);
		const roadLine888 = makeInstance(roadLineGeometry, 120, 0.35, -60, 1, 1, 1, 0, Math.PI / 2, 0, null, roadLineColor);
		const roadLine999 = makeInstance(roadLineGeometry, 140, 0.35, -60, 1, 1, 1, 0, Math.PI / 2, 0, null, roadLineColor);
		const roadLine1000 = makeInstance(roadLineGeometry, -100, 0.35, 60, 1, 1, 1, 0, Math.PI / 2, 0, null, roadLineColor);
		const roadLine1111 = makeInstance(roadLineGeometry, -120, 0.35, 60, 1, 1, 1, 0, Math.PI / 2, 0, null, roadLineColor);
		const roadLine1222 = makeInstance(roadLineGeometry, -140, 0.35, 60, 1, 1, 1, 0, Math.PI / 2, 0, null, roadLineColor);




//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


	
		const greenSquareWidth = 360;
		const greenSquareHeight = 0.2;
		const greenSquareDepth = 360;
		const greenSquareGeometry = new THREE.BoxGeometry(greenSquareWidth, greenSquareHeight, greenSquareDepth);
		const greenSquareColor = 0x006600; 
	
		const greenSquare = makeInstance(greenSquareGeometry, 0, 0.01, 0, 1, 1, 1, 0, 0, 0, null, greenSquareColor);
	

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


const trunkRadius = 0.5;
const trunkHeight = 15;
const trunkGeometry = new THREE.CylinderGeometry(trunkRadius, trunkRadius, trunkHeight);
const trunkColor = 0x8B4513;

const leafRadius = 5;
const leafGeometry = new THREE.SphereGeometry(leafRadius, 5, 5);
const leafColor = 0x228B22;

const pyramidRadiusT = 3;
const pyramidHeightT = 15;
const pyramidGeometryT = new THREE.ConeGeometry(pyramidRadiusT, pyramidHeightT, 4);

// Variables for the big pyramid tree
const bigTrunkRadius = 2;
const bigTrunkHeight = 60;
const bigTrunkGeometry = new THREE.CylinderGeometry(bigTrunkRadius, bigTrunkRadius, bigTrunkHeight);

const bigPyramidRadiusT = 12;
const bigPyramidHeightT = 60;
const bigPyramidGeometryT = new THREE.ConeGeometry(bigPyramidRadiusT, bigPyramidHeightT, 4);

function createTree1(x, y, z) {
  const trunk = makeInstance(trunkGeometry, x, y + trunkHeight / 2, z, 1, 1, 1, 0, 0, 0, null, trunkColor);
  const pyramid = makeInstance(pyramidGeometryT, x, y + trunkHeight, z, 1, 1, 1, 0, 0, 0, null, leafColor);
  objects.push(pyramid);
}

function createTree(x, y, z) {
  const trunk1 = makeInstance(trunkGeometry, x, y + trunkHeight / 2, z, 1, 1, 1, 0, 0, 0, null, trunkColor);
  const leaves = makeInstance(leafGeometry, x, y + trunkHeight, z, 1, 1, 1, 0, 0, 0, null, leafColor);
  objects.push(leaves);
}

// Function for creating the big pyramid tree
function createBigPyramidTree(x, y, z) {
  const trunk = makeInstance(bigTrunkGeometry, x, y + bigTrunkHeight / 2, z, 1, 1, 1, 0, 0, 0, null, trunkColor);
  const pyramid = makeInstance(bigPyramidGeometryT, x, y + bigTrunkHeight, z, 1, 1, 1, 0, 0, 0, null, leafColor);
  objects.push(pyramid);
}

createTree1(83, 0.11, 20);
createTree(83, 0.11, -20);
createTree1(83, 0.11, -32);
createTree(83, 0.11, 32);
createTree(83, 0.11, 6);
createTree1(83, 0.11, -6);

createTree1(-83, 0.11, 20);
createTree(-83, 0.11, -20);
createTree1(-83, 0.11, -32);
createTree(-83, 0.11, 32);
createTree(-83, 0.11, 6);
createTree1(-83, 0.11, -6);

createBigPyramidTree(-103, 0.11, 0); 
createBigPyramidTree(103, 0.11, 0); 

createTree1(123, 0.11, 20);
createTree(123, 0.11, -20);
createTree1(123, 0.11, -32);
createTree(123, 0.11, 32);
createTree(123, 0.11, 6);
createTree1(123, 0.11, -6);

createTree1(-123, 0.11, 20);
createTree(-123, 0.11, -20);
createTree1(-123, 0.11, -32);
createTree(-123, 0.11, 32);
createTree(-123, 0.11, 6);
createTree1(-123, 0.11, -6);

createBigPyramidTree(-143, 0.11, 0); 
createBigPyramidTree(143, 0.11, 0); 

createTree1(163, 0.11, 20);
createTree(163, 0.11, -20);
createTree1(163, 0.11, -32);
createTree(163, 0.11, 32);
createTree(163, 0.11, 6);
createTree1(163, 0.11, -6);

createTree1(-163, 0.11, 20);
createTree(-163, 0.11, -20);
createTree1(-163, 0.11, -32);
createTree(-163, 0.11, 32);
createTree(-163, 0.11, 6);
createTree1(-163, 0.11, -6);

createBigPyramidTree(0, 0.11, -150); 
createBigPyramidTree(0, 0.11, -110); 

createTree1(0, 0.11, 100);
createTree(0, 0.11, 115);
createTree1(0, 0.11, 130);
createTree(0, 0.11, 145);
createTree1(0, 0.11, 160);

createTree1(20, 0.11, 100);
createTree(20, 0.11, 115);
createTree1(20, 0.11, 130);
createTree(20, 0.11, 145);
createTree1(20, 0.11, 160);

createTree1(-20, 0.11, 100);
createTree(-20, 0.11, 115);
createTree1(-20, 0.11, 130);
createTree(-20, 0.11, 145);
createTree1(-20, 0.11, 160);

createTree1(20, 0.11, -100);
createTree(20, 0.11, -115);
createTree1(20, 0.11, -130);
createTree(20, 0.11, -145);
createTree1(20, 0.11, -160);

createTree1(-20, 0.11, -100);
createTree(-20, 0.11, -115);
createTree1(-20, 0.11, -130);
createTree(-20, 0.11, -145);
createTree1(-20, 0.11, -160);

createTree1(-163, 0.11, -100);
createTree(-163, 0.11, -115);
createTree1(-163, 0.11, -130);
createTree(-163, 0.11, -145);
createTree(-163, 0.11, -160);

createTree1(163, 0.11, -100);
createTree(163, 0.11, -115);
createTree1(163, 0.11, -130);
createTree(163, 0.11, -145);
createTree(163, 0.11, -160);

createTree1(-83, 0.11, -100);
createTree(-83, 0.11, -115);
createTree1(-83, 0.11, -130);
createTree(-83, 0.11, -145);
createTree(-83, 0.11, -160);

createTree1(83, 0.11, -100);
createTree(83, 0.11, -115);
createTree1(83, 0.11, -130);
createTree(83, 0.11, -145);
createTree(83, 0.11, -160);

createTree1(-83, 0.11, 100);
createTree(-83, 0.11, 115);
createTree1(-83, 0.11, 130);
createTree(-83, 0.11, 145);
createTree(-83, 0.11, 160);

	}

	
	//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	

	function resizeRendererToDisplaySize( renderer ) {

		const canvas = renderer.domElement;
		const width = canvas.clientWidth;
		const height = canvas.clientHeight;
		const needResize = canvas.width !== width || canvas.height !== height;
		if ( needResize ) {

			renderer.setSize( width, height, false );

		}

		return needResize;

	}


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



function render(time) {
    if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    }

    time *= 0.001;
    objects.forEach((obj, ndx) => {
        const speed = 1 + ndx * 0.1;
        const rot = time * speed;
        if (obj.geometry instanceof THREE.ConeGeometry || obj.geometry instanceof THREE.SphereGeometry) {
            obj.rotation.y = rot/2;
        } else if (obj.type === 'Group') {
            if (obj === carGroup) {
                if(donutMode) {
                    dCheck = true;
					dCheck2 = true;
                    const radius = 60;
                    const revolutionSpeed = 0.2;
                    obj.rotation.y = rot * revolutionSpeed;
                    obj.position.set(
                        Math.cos(rot * revolutionSpeed) * radius,
                        obj.position.y,
                        Math.sin(rot * revolutionSpeed) * radius
                    );
                } else {
                    if(dCheck){
                        obj.position.set(120, 2.31, 150);
                        obj.rotation.y = 0; 
						dCheck2 = false;
                    } 
					else{
						const speed = 1;
                    	const roadLength = 360; 
                    	const initialPosition = 160; 
                    	obj.position.z -= speed;
                    	if (obj.position.z <= -roadLength / 2) {
                        	obj.position.z = initialPosition;
                    	}
					}
                    
                }
            } else if (obj === newCarGroup) {
				if(dCheck2){
					obj.position.z = -100;

				}
				else{
					const speed = 1;
                	const roadLength = 360; 
                	const initialPosition = 160; 
                	obj.position.z -= speed;
                	if (obj.position.z <= -roadLength / 2) {
                    	obj.position.z = initialPosition;
                	}
				}
            } else if (obj === oppositeCar1 || obj === oppositeCar2) {
				if(dCheck2){
					obj.position.z = 100;

				}
				else{
					const speed = 1;
                	const roadLength = 360;
                	const initialPosition = -160;
                	obj.position.z += speed; // Move the car in the opposite direction
                	if (obj.position.z >= roadLength / 2) {
                    	obj.position.z = initialPosition;
                	}
				}
            } else if (obj === xCar1 || obj === xCar2) {
				if(dCheck2){
					obj.position.x = -80;

				}
				else{
					const speed = 1;
					const roadLength = 360;
					const initialPosition = -160;
	
					obj.position.x += speed; // Move the car in the positive x-direction
					if (obj.position.x >= roadLength / 2) {
						obj.position.x = initialPosition;
					}
				}
                
            } else if (obj === xCar3 || obj === xCar4) {
				if(dCheck2){
					obj.position.x = 80;

				}
				else{
					const speed = 1;
                	const roadLength = 360;
					const initialPosition = 160;

                	obj.position.x -= speed; // Move the car in the negative x-direction
                	if (obj.position.x <= -roadLength / 2) {
                    	obj.position.x = initialPosition;
                	}
				}
                
            } else {
                obj.rotation.x = rot / 2;
                obj.rotation.y = rot / 2;
            }
        }
    });

    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

requestAnimationFrame(render);


}

main();
