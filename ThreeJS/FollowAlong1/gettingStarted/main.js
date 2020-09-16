// import "./textures/crate.gif"
let scene, camera, renderer, cube;
let boxX = 2
let boxY = 2
let boxZ = 2
let camPosition = 6

function init(){
 scene = new THREE.Scene();
 camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

 renderer = new THREE.WebGLRenderer({antialias: true});
 renderer.setSize( window.innerWidth, window.innerHeight );
 document.body.appendChild( renderer.domElement );

 const geometry = new THREE.BoxGeometry( boxX, boxY, boxZ );
 const material = new THREE.MeshBasicMaterial( {color: 0x000ff} );
//  const texture = new THREE.TextureLoader().load('textures/crate.gif');
//  const material = new THREE.MeshBasicMaterial( { map: texture } );
 cube = new THREE.Mesh( geometry, material );
 scene.add( cube );

 camera.position.z = camPosition;    
}

init()



function animate () {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera)
}
animate();

function onResize(){
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

function enLarge(){
 console.log("Actived Scroll")
 console.log(camPosition)
 camPosition -= 1
 camera.updateProjectionMatrix();
}

function enSmall(){
 boxX -= 1
 boxY -= 1
 boxZ -= 1
}

window.addEventListener('onClick', enLarge, false)
window.addEventListener('resize', onResize, false)