import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 2, 2, 2 );
const material = new THREE.MeshBasicMaterial( { color: 0xff00a0 } );
const material2 = new THREE.MeshNormalMaterial ({ color: 0xff00a0 });
const cube = new THREE.Mesh( geometry, material2 );
scene.add( cube );

camera.position.z = 4;

function animate() {

	cube.rotation.x += 0.05;
	cube.rotation.y += 0.05;

	renderer.render( scene, camera );

}